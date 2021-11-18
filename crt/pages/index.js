import React from 'react';
// import Image from 'next/image';
import NextLink from 'next/link'
import { Button, Link as MUILink } from '@mui/material';
import PostOverview from '@components/PostOverview';
import ContentfulApi from '@utils/ContentfulApi';

export default function Home(props) {
  const {posts} = props
  return (
    <main>
      
      <div className="main">
        <h1 className="title">
          Welcome to CRT
        </h1>
        <NextLink href="/blog" passHref>
          <Button color="tertiary" variant="contained">
            View all Posts
          </Button>
        </NextLink>
      </div>

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