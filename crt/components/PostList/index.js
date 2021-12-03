import React from 'react';
import Pagination from './Pagination';
import Markdown from '@utils/MarkdownMUI';
import NextLink from 'next/link'
import {    formatPublishedDateForDateTime,
            formatPublishedDateForDisplay, } from '@utils/Date';

import { Card, Chip, CardActionArea, CardContent, Typography, Divider, CardMedia } from "@mui/material";
import { Box } from '@mui/system';
       

export default function PostList(props) {
  const { posts, currentPage, totalPages } = props;

  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

  return (
      <Box mx={{xl:27}}>
        {posts.map((post) => (
          <Card sx={{m: 4}} key={post.sys.id} elevation={12}>
            <NextLink href={"/" + post.slug} passHref>
            <CardActionArea >
              {post.titleImage && (<CardMedia component="img"
                          height="300 "
                          image={post.titleImage.url}
                          alt={post.titleImage.title}/>
              )}<CardContent px={4} pb={3}>
                
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
    </Box>
  );
}
