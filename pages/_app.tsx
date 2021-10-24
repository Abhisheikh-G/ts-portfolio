import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Header from "../components/Header/Header";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Abhisheikh Gill | My Portfolio</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content={`Hello, my name is Abhisheikh Gill. 
        I'm a full stack web developer and an IT solutions expert. 
        I work with web development technologies like Next.js, Node.js, React.js, MongoDB, PostgreSQL, and Git. 
        I'm also a certified network and cyber security specialist as well a proficient Linux Administrator.`}
        />

        <meta content="index, follow" name={`robots`} />

        <meta itemProp="name" content="Abhisheikh Gill | My Portfolio" />
        <meta
          itemProp="description"
          content="Hello, my name is Abhisheikh Gill. 
        I'm a full stack web developer and an IT solutions expert. 
        I work with web development technologies like Next.js, Node.js, React.js, MongoDB, PostgreSQL, and Git. 
        I'm also a certified network and cyber security specialist as well a proficient Linux Administrator."
        />
        <meta
          itemProp="image"
          content="https://abhisheikhgill.com/meta-image.png"
        />

        <meta property="og:url" content="https://abhisheikhgill.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abhisheikh Gill | My Portfolio" />
        <meta
          property="og:description"
          content="Hello, my name is Abhisheikh Gill. 
        I'm a full stack web developer and an IT solutions expert. 
        I work with web development technologies like Next.js, Node.js, React.js, MongoDB, PostgreSQL, and Git. 
        I'm also a certified network and cyber security specialist as well a proficient Linux Administrator."
        />
        <meta
          property="og:image"
          content="https://abhisheikhgill.com/meta-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abhisheikh Gill | My Portfolio" />
        <meta
          name="twitter:description"
          content="Hello, my name is Abhisheikh Gill. 
        I'm a full stack web developer and an IT solutions expert. 
        I work with web development technologies like Next.js, Node.js, React.js, MongoDB, PostgreSQL, and Git. 
        I'm also a certified network and cyber security specialist as well a proficient Linux Administrator."
        />
        <meta
          name="twitter:image"
          content="https://abhisheikhgill.com/meta-image.png"
        />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
