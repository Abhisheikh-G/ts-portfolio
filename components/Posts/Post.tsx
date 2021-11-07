import React from "react";
import Link from "../../src/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IPost } from "../../@types";
import Grid from "@mui/material/Grid";

type PostProps = React.PropsWithChildren<{
  post: IPost;
}>;

const styles = {
  post: {
    border: "1px solid",
    borderColor: "secondary.main",
    borderRadius: 1,
    color: "primary.contrastText",
    my: 2,
    mx: 1,
    p: 2,
    width: 200,
    height: 200,
    maxHeight: 200,
    maxWidth: 200,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
};

const Post: React.FC<PostProps> = ({ post }) => {
  console.log(post);
  return (
    <Grid
      item
      sx={{
        ...styles.post,
        backgroundColor: "black",
        filter: "brightness(50%)",
        transition: "all .3s ease-in-out",
        ":hover": {
          filter: "brightness(100%)",
          "> a": {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        component={Link}
        href={`/blog/${post.slug}`}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          opacity: 0.3,
          transition: "all .3s ease-in-out",
          ...styles.link,
        }}
      >
        <Link href={`/blog/${post.slug}`} sx={{ ...styles.link }}>
          <Typography variant="body2" fontWeight="bold">
            {post.frontmatter.title}
          </Typography>
        </Link>
        <Typography variant="body2">{post.frontmatter.date}</Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ color: "secondary.main" }}
        >
          {post.frontmatter.category}
        </Typography>
        <Typography variant="body1">
          {post.frontmatter.excerpt.slice(0, 65)}...
        </Typography>
      </Box>
    </Grid>
  );
};

export default Post;
