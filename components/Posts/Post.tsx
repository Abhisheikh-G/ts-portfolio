import React from "react";
import Link from "../../src/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IPost } from "../../@types";
import Grid from "@mui/material/Grid";
import { Fade } from "@mui/material";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <Fade in={true} timeout={750}>
      <Grid
        item
        sx={{
          ...styles.post,
          backgroundColor: "black",
          filter: "brightness(50%)",
          transition: "all .3s ease-in-out",
          cursor: "pointer",
          ":hover": {
            filter: "brightness(100%)",
            "> div": {
              opacity: 1,
            },
          },
          WebkitTapHighlightColor: "transparent",
        }}
        onClick={() => router.push(`/blog/${post.slug}`)}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            opacity: 0.3,
            transition: "all .3s ease-in-out",
            color: "common.white",
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
    </Fade>
  );
};

export default Post;
