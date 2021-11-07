declare module "remark-code-blocks" {}

export interface IFrontmatter {
  title: string;
  category: string;
  date: string;
  cover_image: string;
  author: string;
  author_image: string;
  excerpt: string;
}

export interface IPost {
  frontmatter: IFrontmatter;
  slug: string;
  content?: string;
}

export interface IProject {
  title: string;
  description: string;
  image: string;
  work: string;
  projectLink: string;
}
