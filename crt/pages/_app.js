import React, { useState } from 'react';
import getLightVsDark from '@components/CrtTheme/CrtTheme';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Head from 'next/head';
import MenuBar from '@components/MenuBar';
import '@styles/main.css';

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');
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
      
      <MenuBar mode={mode} setMode={setMode}/>

      
      <Component {...pageProps} />


    </ThemeProvider>
  )


}

export default MyApp