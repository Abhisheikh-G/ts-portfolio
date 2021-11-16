import React from 'react';

import Post from '@/components/Posts/PostCard';
import { IPost } from '@/types/index';
import Grid from '@mui/material/Grid';

type PostsProps = React.PropsWithChildren<{
  posts: IPost[];
}>;

const Posts: React.FC<PostsProps> = function ({ posts }) {
  return (
    <Grid container justifyContent="center">
      {posts.map((post) => (
        <Post key={post.frontmatter.title} post={post} />
      ))}
    </Grid>
  );
};

export default Posts;
