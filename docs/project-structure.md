# Project Structure

This document describes the architecture and configuration of the infradawn.xyz blog.

## Tech Stack

| Layer       | Technology                     | Purpose                                    |
| ----------- | ------------------------------ | ------------------------------------------ |
| Framework   | Next.js 16 (App Router)        | SSG, routing, API routes                   |
| Language    | TypeScript                     | Type safety                                |
| Content     | MDX via `next-mdx-remote`      | Markdown + React components                |
| Styling     | Tailwind CSS 4 + Typography    | Utility-first CSS, prose styling           |
| Fonts       | Geist Sans & Geist Mono        | Google Fonts via `next/font`               |
| Deployment  | Vercel                         | Hosting, CDN, SSL, auto-deploys from Git   |
| Domain      | infradawn.xyz (GoDaddy → Vercel NS) | DNS managed by Vercel nameservers     |

## Directory Structure

```
projects-blog/
├── content/
│   └── posts/                  # Blog post .mdx files live here
├── public/                     # Static assets (favicon, images)
├── src/
│   ├── app/
│   │   ├── globals.css         # Theme colors, global styles
│   │   ├── layout.tsx          # Root layout (Header + Footer, SEO metadata)
│   │   ├── page.tsx            # Homepage — lists all published posts
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── sitemap.ts          # Auto-generated XML sitemap
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Individual blog post (SSG with MDX)
│   │   └── rss.xml/
│   │       └── route.ts        # RSS feed endpoint
│   ├── components/
│   │   ├── Header.tsx          # Sticky navigation bar
│   │   ├── Footer.tsx          # Site footer with copyright
│   │   ├── PostCard.tsx        # Post preview card for the homepage
│   │   └── MDXComponents.tsx   # Custom styling for MDX elements
│   └── lib/
│       └── posts.ts            # Content pipeline: reads, parses, sorts posts
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript config (path alias: @/* → ./src/*)
├── postcss.config.mjs          # PostCSS with Tailwind plugin
└── package.json                # Dependencies and scripts
```

## Theme Configuration

Colors are defined as CSS custom properties in `src/app/globals.css`:

| Token          | Value     | Usage                        |
| -------------- | --------- | ---------------------------- |
| `background`   | `#fafafa` | Page background              |
| `foreground`   | `#1a1a2e` | Primary text                 |
| `primary`      | `#e94560` | Links, accents, selection    |
| `primary-dark` | `#c73e54` | Hover state for primary      |
| `secondary`    | `#16213e` | Code blocks, dark accents    |
| `accent`       | `#0f3460` | Tags, inline code            |
| `muted`        | `#6b7280` | Secondary text, dates        |
| `border`       | `#e5e7eb` | Dividers, borders            |
| `surface`      | `#ffffff` | Card/header backgrounds      |

## SEO & Feeds

- **Metadata**: Configured in `src/app/layout.tsx` with OpenGraph and Twitter cards. Each blog post generates its own metadata via `generateMetadata()`.
- **Sitemap**: Auto-generated at `/sitemap.xml` from all published posts.
- **RSS**: Available at `/rss.xml` in RSS 2.0 format.

## Content Pipeline

`src/lib/posts.ts` handles all content loading:

1. Reads `.mdx` files from `content/posts/`
2. Parses YAML frontmatter with `gray-matter`
3. Calculates reading time with `reading-time`
4. Filters out posts where `published: false`
5. Sorts by date (newest first)

Key exports:
- `getAllPosts()` — returns all published post metadata
- `getPostBySlug(slug)` — returns a single post with its full MDX content
- `getAllSlugs()` — returns slugs for static generation

## NPM Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start dev server with hot reload   |
| `npm run build` | Production build (static generation) |
| `npm run start` | Serve the production build locally |
| `npm run lint`  | Run ESLint                         |
