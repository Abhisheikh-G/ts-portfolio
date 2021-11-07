import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import Container from "@mui/material/Container";
import ReactMarkdown from "react-markdown";
import { useTheme } from "@mui/material";
import remarkCb from "remark-code-blocks";
import remarkGfm from "remark-gfm";

type Props = React.PropsWithChildren<{
  frontmatter: {
    title: string;
    category: string;
    date: string;
    cover_image: string;
    author: string;
    author_image: string;
  };
  content: string;
}>;

const styles = {
  markdown: {
    color: "white",
  },
};

const Posts: React.FC<Props> = ({ frontmatter, content }) => {
  console.log(frontmatter);
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ mt: 16 }}>
      <div style={{ ...styles.markdown }}>
        <ReactMarkdown
          children={content}
          components={{
            pre: (props) => (
              <pre
                style={{
                  backgroundColor: theme.palette.primary.light,
                  padding: "1em",
                  overflowX: "auto",
                }}
                {...props}
              />
            ),
            code: (props) => <code {...props} />,
          }}
          remarkPlugins={[remarkCb, remarkGfm]}
        />
      </div>
    </Container>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const { slug } = params as { slug: string };
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  console.log(frontmatter);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};
