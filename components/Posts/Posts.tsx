import React from "react";
import { IPost } from "../../@types";
import Post from "./Post";
import Grid from "@mui/material/Grid";

type PostsProps = React.PropsWithChildren<{
  posts: IPost[];
}>;

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Grid container justifyContent="center">
      {posts.map((post) => (
        <Post key={post.frontmatter.title} post={post} />
      ))}
    </Grid>
  );
};

export default Posts;
