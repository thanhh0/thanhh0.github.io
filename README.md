# thanh.portfolio

Personal site — landing page + `/blogs`. Terminal aesthetic, "hidden luxury"
restraint, silver + brass-gold palette. Vite + React + TS + MDX.

## stack

- vite + react 18 + ts
- react-router (hash routing — no SPA-fallback gymnastics on GitHub Pages)
- mdx for posts (`src/posts/*.mdx`)
- framer-motion for tasteful reveals
- giscus for optional post comments (wire repo + category id in `BlogPost.tsx`)

## run

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # production build
pnpm preview      # preview build
```

## adding a blog post

1. Drop a file at `src/posts/<slug>.mdx` with frontmatter:

```mdx
---
title: "..."
date: "YYYY-MM-DD"
description: "..."
tags: ["x", "y"]
---
```

2. Done. The `import.meta.glob` registry in `src/blog/registry.ts` picks it up.

## deploy — github pages

The `.github/workflows/deploy.yml` workflow builds on push to `main` and
deploys via the GitHub Pages action.

- **User site** (`thanhh0.github.io`) — default, `VITE_BASE=/`.
  Repo name must be `thanhh0.github.io`.
- **Project site** — set `VITE_BASE=/<repo-name>/` in the workflow.

In repo Settings → Pages, set **Source** to **GitHub Actions**.

## design notes

- type: Fraunces (display, opsz axis) + JetBrains Mono (body / terminal)
- palette: graphite `#0c0d0f` · platinum `#c6c8cc` · brass `#b08a4e`
- motion: staggered fade-up on first paint, `whileInView` reveals on cards
- restraint: one accent colour, dashed dividers only when separating idioms
# thanhh0.github.io
