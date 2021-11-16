import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';

import Posts from '@/components/Posts/Posts';
import Underline from '@/components/Underline/Underline';
import { getPosts } from '@/lib/posts';
import Link from '@/src/Link';
import { IPost } from '@/types/index';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

type BlogIndexProps = React.PropsWithChildren<{
  posts: IPost[];
}>;

const styles = {
  link: {
    color: 'secondary.main',
    fontSize: {
      xs: 14,
      sm: 16,
    },
    textDecoration: 'none',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      background: (theme: any) =>
        `linear-gradient(to right, ${theme.palette.custom.yellow}, ${theme.palette.secondary.main})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
};

const Index: React.FC<BlogIndexProps> = function ({ posts }) {
  return (
    <>
      <Head>
        <title>Abhisheikh Gill | Blog</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Welcome to my coding blog! You can find posts about all things web development - like React.js, Node.js, Typescript, Javascript, Next.js, C#, MongoDB, PostgreSQL"
        />

        <meta itemProp="name" content="Abhisheikh Gill | Blog" />
        <meta
          itemProp="description"
          content="Welcome to my coding blog! You can find posts about all things web development - like React.js, Node.js, Typescript, Javascript, Next.js, C#, MongoDB, PostgreSQL"
        />
        <meta itemProp="image" content="https://abhisheikhgill.com/blog" />

        <meta property="og:url" content="https://abhisheikhgill.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abhisheikh Gill | Blog" />
        <meta
          property="og:description"
          content="Welcome to my coding blog! You can find posts about all things web development - like React.js, Node.js, Typescript, Javascript, Next.js, C#, MongoDB, PostgreSQL"
        />
        <meta
          property="og:image"
          content="https://abhisheikhgill.com/meta-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abhisheikh Gill | Blog}" />
        <meta
          name="twitter:description"
          content="Welcome to my coding blog! You can find posts about all things web development - like React.js, Node.js, Typescript, Javascript, Next.js, C#, MongoDB, PostgreSQL"
        />
        <meta
          name="twitter:image"
          content="https://abhisheikhgill.com/meta-image.png"
        />
      </Head>
      <Container maxWidth="md">
        <Breadcrumbs sx={{ color: 'secondary.main', mb: 2 }}>
          <Link underline="hover" sx={{ ...styles.link }} href="/">
            HOME
          </Link>
          <Link underline="hover" sx={{ ...styles.link }} href="/blog">
            BLOG
          </Link>
        </Breadcrumbs>
        <Fade in timeout={1000}>
          <Typography
            variant="h3"
            gutterBottom
            align="left"
            fontFamily="Zen Tokyo Zoo"
            sx={{
              mt: 2,
              marginBottom: (theme) => theme.spacing(2),
              maxWidth: '6em',
              fontSize: 30,
            }}
          >
            <Box component="span" sx={{ color: 'secondary.main' }}>
              ALL
            </Box>{' '}
            <Box component="span" sx={{ color: 'custom.yellow' }}>
              POSTS
            </Box>
            <Underline />
          </Typography>
        </Fade>
        <Posts posts={posts} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: await getPosts(),
  },
});

export default Index;
