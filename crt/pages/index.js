import React from 'react';
// import Image from 'next/image';
import MuiNextButton from '@components/MuiNextButton';
import PostOverview from '@components/PostOverview';
import ContentfulApi from '@utils/ContentfulApi';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Markdown from 'markdown-to-jsx';

export default function Home(props) {
  const { posts, about } = props;

  return (
    <main>
      
      <section>
        <Box className="welcome-banner">
          <Typography variant="h3" align="center" component="h1">
            Willkommen zu Code Ride Translate
          </Typography>
          <Typography variant="h6" align="center" component="p" sx={{mt:1, mb:4}}>
            Einem Blog rund um Frontend Development, Rennräder und orientalische Literatur
          </Typography>
          <MuiNextButton href="/blog" variant="contained" size="large" color="tertiary" btnText="View all Posts" /> 
        </Box>
      </section>
      
      <section>
        <PostOverview posts={posts} />
      </section>

      <section>
        <Card sx={{mt: 15, mx: {xs: 1, sm: 10, md: 18, lg: 30, xl: 57}}} elevation={12}>
          <CardContent>
            <Typography variant="h4" component="h2">
              {about.title}
            </Typography>
            <Markdown>
              {about.text}
            </Markdown>
          </CardContent>
        </Card>
      </section>

    </main>
  )
}

export async function getServerSideProps() {
  const allLatestPosts = await ContentfulApi.getLatestPosts();
  const aboutContent   = await ContentfulApi.getPage('xqOWhx23Vu8UhHeor5LpN');
  
  return {
    props: {
      posts: allLatestPosts.items,
      about: aboutContent,
    }
  }
}