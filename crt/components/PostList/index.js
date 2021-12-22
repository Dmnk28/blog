import React from 'react';
import Pagination from './Pagination';
import Markdown from '@utils/MarkdownMUI';
import NextLink from 'next/link'
import {    formatPublishedDateForDateTime,
            formatPublishedDateForDisplay, } from '@utils/Date';

import { Card, CardActionArea, CardContent, Typography, Divider, CardMedia } from "@mui/material";
import { Box } from '@mui/system';

import { ArrowForwardIos } from '@mui/icons-material';
import TagChips from '@components/TagChips';
       

export default function PostList(props) {
  const { posts, currentPage, totalPages } = props;

  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

  return (
      <Box mx={{xs: 1, sm: 6, md: 20, lg: 40, xl: 57}}>
        {posts.map((post) => (
          <article key={post.sys.id}>
          <Card sx={{my: {xs: 2, sm: 4}}} elevation={12}>
            <NextLink href={"/" + post.slug} passHref>
            <CardActionArea >
              {post.thumbnail && (<CardMedia component="img"
                          height="300 "
                          image={post.thumbnail.url}
                          alt={post.thumbnail.title}/>
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
                
                <TagChips tags={post.tags}/>

                <Box className="postlist-excerpt">
                  <Markdown>{post.excerpt}</Markdown>
                </Box>
                

                <Box display="flex" justifyContent="end">
                  <ArrowForwardIos color="tertiary"/>
                </Box>
                
              </CardContent>
            </CardActionArea>
            </NextLink>
          </Card>
          </article>
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
