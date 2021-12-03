import React from 'react';
// import Image from 'next/image';
import MuiNextButton from '@components/MuiNextButton';
import PostOverview from '@components/PostOverview';
import ContentfulApi from '@utils/ContentfulApi';
import { Box, Typography } from '@mui/material';

export default function Home(props) {
  const { posts } = props
  return (
    <main>
      
      <Box className="welcome-banner">
        <Typography variant="h3" align="center" component="h1">
          Willkommen zu Code Ride Translate
        </Typography>
        <Typography variant="h6" align="center" component="p" sx={{mt:1, mb:4}}>
          Einem Blog rund um Frontend Development, Rennräder und orientalische Literatur
        </Typography>
        <MuiNextButton href="/blog" variant="contained" size="large" color="tertiary" btnText="View all Posts" /> 
      </Box>

      <PostOverview posts={posts} />

    </main>
  )
}

Home.defaultProps = {
  latestPosts: [],
}

export async function getServerSideProps() {
  const allLatestPosts = await ContentfulApi.getLatestPosts();
  
  return {
    props: {
      posts: allLatestPosts.items,
    }
  }
}