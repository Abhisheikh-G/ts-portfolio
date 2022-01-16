import React from 'react';

import Link from '@/src/Link';
import { IPost } from '@/types/index';
import { Fade } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type PostProps = React.PropsWithChildren<{
  post: IPost;
}>;

const styles = {
  post: {
    border: '1px solid',
    borderColor: 'secondary.main',
    borderRadius: 1,
    color: 'primary.contrastText',
    my: 2,
    mx: 1,
    p: 2,
    width: { xs: '100%', sm: 225 },
    height: { xs: '100%', sm: 110 },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Fade in={true} timeout={750}>
      <Grid
        item
        sx={{
          ...styles.post,
          backgroundColor: 'black',
          filter: 'brightness(50%)',
          transition: 'all .3s ease-in-out',
          cursor: 'pointer',
          ':hover': {
            filter: 'brightness(100%)',
            '> a': {
              opacity: 1,
            },
          },
          WebkitTapHighlightColor: 'transparent',
          justifyContent: {
            xs: 'center',
            sm: 'inherit',
          },
        }}
      >
        <Box
          component={Link}
          href={`/blog/${post.slug}`}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            opacity: 0.3,
            transition: 'all .3s ease-in-out',
            ...styles.link,
          }}
        >
          <Typography variant="body2" fontWeight="bold">
            {post.frontmatter.title}
          </Typography>

          <Typography variant="body2">{post.frontmatter.date}</Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ color: 'secondary.main' }}
          >
            {post.frontmatter.category}
          </Typography>
        </Box>
      </Grid>
    </Fade>
  );
};

export default Post;
