import React from 'react';
import { useState } from 'react';

import Head from 'next/head';
// import Image from 'next/image';
import NextLink from 'next/link'
import { Button, createTheme, IconButton, Link as MUILink, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';

import MenuBar from '@components/MenuBar';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function Home() {
  
  return (
    <div>
      
      <main className="main">
        <h1 className="title">
          Welcome to CRT
        </h1>

        <Button variant="contained" href="/blog">
          View all Posts
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
