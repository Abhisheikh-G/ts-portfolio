import React from "react";
import { GetStaticProps } from "next";
import { getPosts } from "../../lib/posts";
import { IPost } from "../../@types";
import Posts from "../../components/Posts/Posts";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Head from "next/head";
import Link from "../../src/Link";

type BlogIndexProps = React.PropsWithChildren<{
  posts: IPost[];
}>;

const Index: React.FC<BlogIndexProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Abhisheikh Gill | Blog</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Welcome to my coding blog! You can find posts about all things web development - like React.js, Node.js, Typescript, Javascript, Next.js, C#, MongoDB, PostgreSQL"
        />

        <meta itemProp="name" content={`Abhisheikh Gill | Blog`} />
        <meta
          itemProp="description"
          content="Welcome to my coding blog! You can find posts about all things web development - like React.js, Node.js, Typescript, Javascript, Next.js, C#, MongoDB, PostgreSQL"
        />
        <meta itemProp="image" content={`https://abhisheikhgill.com/blog`} />

        <meta property="og:url" content={`https://abhisheikhgill.com/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Abhisheikh Gill | Blog`} />
        <meta
          property="og:description"
          content="Welcome to my coding blog! You can find posts about all things web development - like React.js, Node.js, Typescript, Javascript, Next.js, C#, MongoDB, PostgreSQL"
        />
        <meta
          property="og:image"
          content={`https://abhisheikhgill.com/meta-image.png`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Abhisheikh Gill | Blog}`} />
        <meta
          name="twitter:description"
          content="Welcome to my coding blog! You can find posts about all things web development - like React.js, Node.js, Typescript, Javascript, Next.js, C#, MongoDB, PostgreSQL"
        />
        <meta
          name="twitter:image"
          content={`https://abhisheikhgill.com/meta-image.png`}
        />
      </Head>
      <Container maxWidth="md">
        <Breadcrumbs sx={{ color: "secondary.main", mb: 2 }}>
          <Link underline="hover" color="inherit" href="/">
            HOME
          </Link>
          <Link underline="hover" color="inherit" href="/blog">
            BLOG
          </Link>
        </Breadcrumbs>
        <Posts posts={posts} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await getPosts(),
    },
  };
};

export default Index;
