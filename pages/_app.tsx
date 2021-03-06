import Head from 'next/head';
import React from 'react';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/src/theme';
import createEmotionCache from '@/src/createEmotionCache';

import Layout from '@/components/Layout/Layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <StylesProvider generateClassName={generateClassName}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Abhisheikh Gill | My Portfolio</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta content="index, follow" name="robots" />
          <meta
            itemProp="name"
            key="name"
            content="Abhisheikh Gill | My Portfolio"
          />
          <meta
            key="description"
            itemProp="description"
            content="Hello, my name is Abhisheikh Gill.
        I'm a full stack web developer and an IT solutions expert.
        I work with web development technologies like Next.js, Node.js, React.js, MongoDB, PostgreSQL, and Git.
        I'm also a certified network and cyber security specialist as well a proficient Linux Administrator."
          />
          <meta
            key="image"
            itemProp="image"
            content="https://abhisheikhgill.com/meta-image.png"
          />

          <meta
            property="og:url"
            content="https://abhisheikhgill.com"
            key="url"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Abhisheikh Gill | My Portfolio"
            key="title"
          />
          <meta
            key="description"
            property="og:description"
            content="Hello, my name is Abhisheikh Gill.
        I'm a full stack web developer and an IT solutions expert.
        I work with web development technologies like Next.js, Node.js, React.js, MongoDB, PostgreSQL, and Git.
        I'm also a certified network and cyber security specialist as well a proficient Linux Administrator."
          />
          <meta
            key="og:image"
            property="og:image"
            content="https://abhisheikhgill.com/meta-image.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Abhisheikh Gill | My Portfolio"
            key="title"
          />
          <meta
            name="twitter:description"
            key="description"
            content="Hello, my name is Abhisheikh Gill.
        I'm a full stack web developer and an IT solutions expert.
        I work with web development technologies like Next.js, Node.js, React.js, MongoDB, PostgreSQL, and Git.
        I'm also a certified network and cyber security specialist as well a proficient Linux Administrator."
          />
          <meta
            name="twitter:image"
            key="image"
            content="https://abhisheikhgill.com/meta-image.png"
          />

          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <ThemeProvider theme={theme}>
          <Layout>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </StylesProvider>
  );
}
