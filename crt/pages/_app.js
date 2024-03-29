import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import getLightVsDark from '@components/CrtTheme/CrtTheme';
import { Box, ThemeProvider, createTheme, CssBaseline } from '@mui/material';

/* Setting up FontAwesome-CSS so the Icons won't become huge in Next.js */
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Head from 'next/head';
import MenuBar from '@components/MenuBar';
import '@styles/main.css';

/* Loading modules needed further below the page dynamically for better initial page load*/
const Footer  = dynamic(() => import('@components/Footer'));


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