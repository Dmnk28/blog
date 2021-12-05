import React, { useEffect, useState } from 'react';
import getLightVsDark from '@components/CrtTheme/CrtTheme';
import { Box, ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Head from 'next/head';
import MenuBar from '@components/MenuBar';
import '@styles/main.css';
import Footer from '@components/Footer';

function MyApp({ Component, pageProps }) {
  const [mode, setMode]   =   useState();

  const theme = createTheme(getLightVsDark(mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
      <Head>
        <title>Code Ride Translate</title>
        <meta name="description" content="A Blog tributed to coding, cycling and languages" />
        <meta name="author" content="Dominik Oesterle"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="container">
        <MenuBar mode={mode} setMode={setMode} />
        <main>
          <Box mb={{xs: 10, md: 20}} display="flex" justifyContent="center">
            <Component {...pageProps} />
          </Box>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )


}

export default MyApp