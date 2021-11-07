import React from "react";
import { GetStaticProps } from "next";
import { getPosts } from "../../lib/posts";
import { IPost } from "../../@types";
import Posts from "../../components/Posts/Posts";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "../../src/Link";

type BlogIndexProps = React.PropsWithChildren<{
  posts: IPost[];
}>;

const Index: React.FC<BlogIndexProps> = ({ posts }) => {
  console.log(posts);
  return (
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
