import React, { useEffect, useState } from 'react';
import getLightVsDark from '@components/CrtTheme/CrtTheme';
import { Box, ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Head from 'next/head';
import MenuBar from '@components/MenuBar';
import '@styles/main.css';
import Footer from '@components/Footer';

function MyApp({ Component, pageProps }) {
  const [mode, setMode]   =   useState();
  
  useEffect(() => {
    getLocalMode();
  },[]);

  useEffect(() => {
    saveLocalMode();
  }, [mode])

  const saveLocalMode = () => {
    localStorage.setItem('mode', JSON.stringify(mode));
  }

  const getLocalMode = () => {
    if (localStorage.getItem('mode') === String) {
      const localMode = JSON.parse(localStorage.getItem('mode'));
      setMode(localMode);
    }
  }

  const theme = createTheme(getLightVsDark(mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Code Ride Translate</title>
        <meta name="description" content="A Blog tributed to coding, cycling and languages" />
        <meta name="author" content="Dominik Oesterle"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="container">
        <MenuBar mode={mode} setMode={setMode} saveLocalMode={saveLocalMode} />
        <main>
          <Box id="contentBox" display="flex" justifyContent="center">
            <Component {...pageProps} />
          </Box>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )


}

export default MyApp