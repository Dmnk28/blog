import React from 'react';
// import Image from 'next/image';
import NextLink from 'next/link'
import { Button, Link as MUILink } from '@mui/material';

export default function Home() {
  
  return (
    <div>
      
      <main className="main">
        <h1 className="title">
          Welcome to CRT
        </h1>
        <NextLink href="/blog" passHref>
          <Button variant="contained">
            View all Posts
          </Button>
        </NextLink>
      </main>

    </div>
  )
}
