import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import path from 'path';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Link from '@/src/Link';
import { IFrontmatter } from '@/types/index';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

type Props = React.PropsWithChildren<{
  frontmatter: IFrontmatter;
  content: string;
}>;

const styles = {
  markdown: {
    color: 'white',
  },
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
      <Fade in={true} timeout={1000}>
        <Container maxWidth="md">
          <Breadcrumbs sx={{ color: 'secondary.main', mb: 2 }}>
            <Link underline="hover" sx={{ ...styles.link }} href="/">
              HOME
            </Link>
            <Link underline="hover" sx={{ ...styles.link }} href="/blog">
              BLOG
            </Link>
            <Link
              underline="hover"
              href={router.asPath}
              sx={{ textTransform: 'uppercase', ...styles.link }}
            >
              {frontmatter.title}
            </Link>
          </Breadcrumbs>
          <Typography variant="h4" color="common.white" gutterBottom>
            {frontmatter.title}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Image src={frontmatter.cover_image} height={350} width={625} />
          </Box>
          <div style={{ ...styles.markdown }}>
            <ReactMarkdown
              children={content}
              components={{
                pre: (props) => (
                  <pre
                    style={{
                      backgroundColor: theme.palette.primary.light,
                      padding: '1em',
                      overflowX: 'auto',
                    }}
                    {...props}
                  />
                ),
                code: (props) => <code {...props} />,
                blockquote: (props) => (
                  <blockquote
                    style={{
                      borderLeft: `5px solid ${theme.palette.secondary.main}`,
                      backgroundColor: theme.palette.primary.light,
                      padding: '1em',
                      margin: 0,
                    }}
                    {...props}
                  />
                ),
              }}
              remarkPlugins={[remarkGfm]}
            />
          </div>
        </Container>
      </Fade>
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
    path.join('posts', slug + '.md'),
    'utf-8'
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
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
