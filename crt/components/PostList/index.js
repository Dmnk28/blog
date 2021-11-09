// import Link from 'next/link';
// import marked from 'marked';
import ReactMarkdown from 'react-markdown';
// import ReactMarkdownRenderers from '../../utils/ReactMarkdownRenderers'
import {    formatPublishedDateForDateTime,
            formatPublishedDateForDisplay, } from '../../utils/Date';

export default function PostList(props) {
    const { posts } = props;
    
    return (
        <ol>
            {posts.map((post) => (
                <li key={post.sys.id}>
                    <article>
                        <time dateTime={formatPublishedDateForDateTime(publicationDate)}>
                            {formatPublishedDateForDisplay(publicationDate)}
                        </time>
                        <link href={`blog/${post.slug}`}>
                            <a>
                                <h2>{post.title}</h2>
                            </a>
                        </link>

                        <ul>
                            {tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>

                        <ReactMarkdown 
                            children={post.excerpt}
                            // renderers={ReactMarkdownRenderers(post.excerpt)}
                        />

                    </article>
                </li>
            ))}
        </ol>
    );
}