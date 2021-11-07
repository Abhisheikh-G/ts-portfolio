import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import Container from "@mui/material/Container";
import ReactMarkdown from "react-markdown";
import { useTheme } from "@mui/material";
import remarkGfm from "remark-gfm";
import { IFrontmatter } from "../../@types";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
import Link from "../../src/Link";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

type Props = React.PropsWithChildren<{
  frontmatter: IFrontmatter;
  content: string;
}>;

const styles = {
  markdown: {
    color: "white",
  },
};

const Posts: React.FC<Props> = ({ frontmatter, content }) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Abhisheikh Gill | {frontmatter.title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={frontmatter.excerpt} />

        <meta
          itemProp="name"
          content={`Abhisheikh Gill | ${frontmatter.title}`}
        />
        <meta itemProp="description" content={frontmatter.excerpt} />
        <meta
          itemProp="image"
          content={`https://abhisheikhgill.com${router.asPath}`}
        />

        <meta
          property="og:url"
          content={`https://abhisheikhgill.com${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Abhisheikh Gill | ${frontmatter.title}`}
        />
        <meta property="og:description" content={frontmatter.excerpt} />
        <meta
          property="og:image"
          content={`https://abhisheikhgill.com${frontmatter.cover_image}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Abhisheikh Gill | ${frontmatter.title}`}
        />
        <meta name="twitter:description" content={frontmatter.excerpt} />
        <meta
          name="twitter:image"
          content={`https://abhisheikhgill.com${frontmatter.cover_image}`}
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
          <Link
            underline="hover"
            color="inherit"
            href={router.asPath}
            sx={{ textTransform: "uppercase" }}
          >
            {frontmatter.title}
          </Link>
        </Breadcrumbs>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Image src={frontmatter.cover_image} height={475} width={750} />
        </Box>
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
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </Container>
    </>
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
  return {
    paths,
    fallback: false,
  };
};
