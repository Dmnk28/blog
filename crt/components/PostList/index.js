import React from 'react';
import Pagination from './Pagination';
import Markdown from '@utils/MarkdownMUI';
import NextLink from 'next/link'
import {    formatPublishedDateForDateTime,
            formatPublishedDateForDisplay, } from '@utils/Date';

import { Card, Chip, CardActionArea, CardContent, Typography, Divider } from "@mui/material";
       

export default function PostList(props) {
  const { posts, currentPage, totalPages } = props;

  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

  return (
      <React.Fragment>
        {posts.map((post) => (
          <Card sx={{m: 4}} key={post.sys.id} elevation={12}>
            <NextLink href={"/" + post.slug} passHref>
            <CardActionArea >
              <CardContent px={4} pb={3}>
                
                <Typography variant="overline">
                  <time dateTime={formatPublishedDateForDateTime(post.publicationDate)}>
                    {formatPublishedDateForDisplay(post.publicationDate)}
                  </time>
                </Typography>
                <Typography variant="h4" component="h2" mt={1} mb={2}>
                  {post.title}
                </Typography>

                <Divider sx={{mb:2}} />

                <div className="postlist-tags">
                  {post.tags.map((tag, index) => (
                    <Chip key={tag + index.toString()} 
                          size="small" 
                          variant="outlined"
                          color="tertiary" 
                          label={tag}
                          sx={{mr:1}} 
                    />
                  ))}
                </div>

                <div className="postlist-excerpt">
                  <Markdown>{post.excerpt}</Markdown>
                </div>
              </CardContent>
            </CardActionArea>
            </NextLink>
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
