import { IFrontmatter } from '../@types/index';

export const sortByDate = (a: IFrontmatter, b: IFrontmatter) => {
  // @ts-ignore
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
