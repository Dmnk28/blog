import Link from 'next/link';
import Pagination from './Pagination';
// import marked from 'marked';
import ReactMarkdown from 'react-markdown';
import ReactMarkdownRenderers from '@utils/ReactMarkdownRenderers'
import {    formatPublishedDateForDateTime,
            formatPublishedDateForDisplay, } from '@utils/Date';

import { Button } from "@mui/material";

import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';
            

export default function PostList(props) {
  const { posts, currentPage, totalPages } = props;

  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

  return (
    <div>
      <Button id="prevBtn" variant="contained">
        <NextLink href="./" passHref>
          <MUILink variant="body" color="secondary">Home</MUILink>
        </NextLink>
      </Button> 
      <ol>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <article>
              <time dateTime={formatPublishedDateForDateTime(post.publicationDate)}>
                {formatPublishedDateForDisplay(post.publicationDate)}
              </time>

              <Link href={post.slug}>
                <a>
                  <h2>{post.title}</h2>
                </a>
              </Link>

              <h6>Tags</h6>
              <ul>
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <ReactMarkdown
                renderers={ReactMarkdownRenderers(post.excerpt)}
              >{post.excerpt}</ReactMarkdown>
            </article>
          </li>
        ))}
      </ol>
      <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </div>
  );
}
