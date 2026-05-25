import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

// Deployed to user site thanhh0.github.io → base "/".
// Override via VITE_BASE env if you ever fork to a project repo.
export default defineConfig(({ mode: _mode }) => ({
  base: (globalThis as { process?: { env: Record<string, string | undefined> } })
    .process?.env.VITE_BASE ?? "/",
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remarkGfm,
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: "frontmatter" }],
        ],
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, { theme: "github-dark-dimmed", keepBackground: false }],
        ],
      }),
    },
    react(),
  ],
}));
