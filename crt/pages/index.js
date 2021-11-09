import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlogIndex from './blog';

// import marked from 'marked';
// import DOMPurify from 'dompurify';

// const query = `{
//   pageCollection {
//     items {
//       title
//       text
//       image {
//         title
//         description
//         contentType
//         fileName
//         size
//         url
//         width
//         height
//       }
//     }
//   }
// }`;

// marked.setOptions({
//   gfm: true,
//   xhtml: true
// });


export default function Home() {
  // const [page, setPage] = useState(null);
// 
  // useEffect(() => {
    // window.fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACEID}/`, {
      // method: "POST",
      // headers: {
        // "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_DELIVERY_KEY}`,
      // },
      // body: JSON.stringify({ query }),
    // })
    // .then((response) => response.json())
    // .then(({ data, errors }) => {
      // if (errors) {
        // console.error(errors);
      // }
// 
      // setPage(data.pageCollection.items[0])
    // });
  // }, []);
// 
  // if (!page) return 'Loading...';
// 
  // const returnHTML = (content) => {
    // const dirtyHTML = marked(content);
    // const cleanContent = DOMPurify.sanitize(dirtyHTML, {USE_PROFILES: {html:true}, PARSER_MEDIA_TYPE: 'application/xhtml+xml'});
    // return cleanContent; 
  // }
  // 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <BlogIndex />
{/* 
        <h1>{page.title}</h1>
        
        <p dangerouslySetInnerHTML={{__html:returnHTML(page.text)}}>
        </p>
 */}
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
