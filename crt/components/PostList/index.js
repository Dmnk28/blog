import Link from 'next/link';
import Pagination from './Pagination';
import Markdown from '@utils/MarkdownMUI';

import {    formatPublishedDateForDateTime,
            formatPublishedDateForDisplay, } from '@utils/Date';

import { Button, Card, CardActionArea, CardContent, Paper, Typography } from "@mui/material";

import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';
import MenuBar from '@components/MenuBar';
import React from 'react';
            

export default function PostList(props) {
  const { posts, currentPage, totalPages } = props;

  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

  return (
      <React.Fragment>
        {posts.map((post) => (
          <Card sx={{m: 4}} key={post.sys.id} elevation={12}>
            <CardActionArea href={post.slug}>
              <CardContent px={4} py={3}>
                <time dateTime={formatPublishedDateForDateTime(post.publicationDate)}>
                  {formatPublishedDateForDisplay(post.publicationDate)}
                </time>

                <Typography vaiant="h2" component="h2">{post.title}</Typography>

                <h6>Tags</h6>
                <ul>
                  {post.tags.map((tag, index) => (
                    <li key={tag + index.toString()}>{tag}</li>
                  ))}
                </ul>

                <Markdown>{post.excerpt}</Markdown>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      
      <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </React.Fragment>
  );
}
