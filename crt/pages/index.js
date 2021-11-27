import React from 'react';
// import Image from 'next/image';
import MuiNextButton from '@components/MuiNextButton';
import PostOverview from '@components/PostOverview';
import ContentfulApi from '@utils/ContentfulApi';

export default function Home(props) {
  const {posts} = props
  return (
    <main>
      
      <div className="welcome-banner">
        <h1 className="title">
          Welcome to CRT
        </h1>
        <MuiNextButton href="/blog" variant="contained" size="large" color="tertiary" btnText="View all Posts" /> 
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