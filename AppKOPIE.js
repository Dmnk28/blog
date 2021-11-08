import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';
import DOMPurify from 'dompurify';

const query = `{
  pageCollection {
    items {
      title
      text
      image {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
  }
}`;

marked.setOptions({
  gfm: true,
  xhtml: true
});

const App = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window.fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACEID}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_DELIVERY_KEY}`,
      },
      body: JSON.stringify({ query }),
    })
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }

      setPage(data.pageCollection.items[0])
    });
  }, []);

  if (!page) return 'Loading...';

  const returnHTML = (content) => {
    const dirtyHTML = marked(content);
    const cleanContent = DOMPurify.sanitize(dirtyHTML, {USE_PROFILES: {html:true}, PARSER_MEDIA_TYPE: 'application/xhtml+xml'});
    return cleanContent; 
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{page.title}</h1>
        
        <p dangerouslySetInnerHTML={{__html:returnHTML(page.text)}}>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
