import type { ComponentType } from "react";

type Frontmatter = {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
};

type MdxModule = {
  default: ComponentType;
  frontmatter: Frontmatter;
};

const modules = import.meta.glob<MdxModule>("../posts/*.mdx", { eager: true });

export type Post = {
  slug: string;
  Component: ComponentType;
  meta: Frontmatter;
};

export const posts: Post[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split("/").pop()!.replace(/\.mdx$/, "");
    return { slug, Component: mod.default, meta: mod.frontmatter };
  })
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
