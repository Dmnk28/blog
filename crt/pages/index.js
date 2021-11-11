import Head from 'next/head';
// import Image from 'next/image';
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';

// import styles from '../styles/Home.module.css'

import { Button } from '@mui/material';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Code Ride Translate</title>
        <meta name="description" content="A Blog tributed to coding, cycling and languages" />
        <meta name="author" content="Dominik Oesterle"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="main">
        <h1 className="title">
          Welcome to CRT
        </h1>

        <Button variant="contained">
          <NextLink href="/blog"> View all Posts</NextLink>
        </Button>
      </main>

      <footer id="footer">
        <NextLink href="https://do-webdev.de/projects/timer" passHref>
          <MUILink variant="body2">&copy; 2021 Dominik Oesterle</MUILink>
        </NextLink>
      </footer>
    </div>
  )
}
