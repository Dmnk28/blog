import React, { useState } from 'react';
import getLightVsDark from '@components/CrtTheme/CrtTheme';
import { ThemeProvider, createTheme, CssBaseline, useMediaQuery } from '@mui/material';

import Head from 'next/head';
import MenuBar from '@components/MenuBar';
import '@styles/main.css';
import Footer from '@components/Footer';

function MyApp({ Component, pageProps }) {
  const [mode, setMode]   =   useState();
  
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

      <div className="container">
        <MenuBar mode={mode} setMode={setMode}/>
        <div id="content-container">
          <Component {...pageProps} />
        </div>
        <Footer />

      </div>
    </ThemeProvider>
  )


}

export default MyApp