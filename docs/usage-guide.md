# How to Use the Blog

A guide to publishing content, managing posts, and working with the blog day-to-day.

## Writing a New Post

1. Create a new `.mdx` file in `content/posts/`:

   ```
   content/posts/my-new-post.mdx
   ```

   The filename becomes the URL slug: `https://infradawn.xyz/blog/my-new-post`

2. Add YAML frontmatter at the top of the file:

   ```yaml
   ---
   title: "My Post Title"
   description: "A short summary that appears on the homepage and in SEO metadata."
   date: "2026-04-10"
   tags: ["tag1", "tag2"]
   published: true
   ---
   ```

3. Write your content below the frontmatter using standard Markdown:

   ```markdown
   This is the opening paragraph.

   ## A Section Heading

   Some text with **bold** and *italic* formatting.

   - Bullet point one
   - Bullet point two

   > A blockquote for emphasis.

   ### Code Example

   ```python
   print("hello world")
   ```
   ```

4. Save the file. If the dev server is running (`npm run dev`), the post appears immediately.

## Frontmatter Reference

| Field         | Type       | Required | Description                                         |
| ------------- | ---------- | -------- | --------------------------------------------------- |
| `title`       | `string`   | Yes      | Post title (displayed on page and in SEO)           |
| `description` | `string`   | Yes      | Short summary (homepage card, OpenGraph, Twitter)    |
| `date`        | `string`   | Yes      | Publication date in `YYYY-MM-DD` format             |
| `tags`        | `string[]` | No       | Array of tags displayed as badges                   |
| `published`   | `boolean`  | No       | Set to `false` to hide a draft. Defaults to `true`  |

## Working with Drafts

Set `published: false` in the frontmatter to keep a post hidden from the homepage, sitemap, and RSS feed:

```yaml
---
title: "Work in Progress"
description: "Not ready yet."
date: "2026-04-10"
tags: []
published: false
---
```

The file stays in `content/posts/` but won't be visible on the live site. Change to `published: true` when ready.

## Using MDX Features

MDX lets you embed React components inside your Markdown. All standard Markdown syntax works, plus:

### Custom Styled Elements

The blog automatically applies custom styling to all Markdown elements (headings, links, code blocks, blockquotes, etc.) via `src/components/MDXComponents.tsx`.

### Links

- **Internal links** (starting with `/`) use Next.js client-side navigation
- **External links** automatically open in a new tab with `rel="noopener noreferrer"`

### Images

Place images in the `public/` folder and reference them:

```markdown
![Alt text](/my-image.png)
```

### Code Blocks

Use triple backticks with a language identifier:

````markdown
```typescript
const greeting: string = "Hello, world!";
console.log(greeting);
```
````

## Publishing Workflow

### Local Development

```bash
npm run dev
```

Opens at `http://localhost:3000`. Changes to `.mdx` files and code hot-reload automatically.

### Deploy to Production

Push to the `main` branch:

```bash
git add -A
git commit -m "Add new post: my-post-title"
git push origin main
```

Vercel auto-deploys on every push to `main`. The site is live within ~30 seconds.

### Verify the Build Locally

Before pushing, you can check that everything compiles:

```bash
npm run build
```

This runs the full static generation and catches any errors.

## Managing Content

### Editing a Post

Open the `.mdx` file in `content/posts/`, make your changes, and push. The slug (URL) is determined by the filename — if you rename the file, the URL changes.

### Deleting a Post

Delete the `.mdx` file from `content/posts/` and push. The post is removed from the homepage, sitemap, and RSS feed.

### Reordering Posts

Posts are automatically sorted by `date` (newest first). To change the order, update the `date` field in the frontmatter.

## Accessing Feeds

| URL              | Description                  |
| ---------------- | ---------------------------- |
| `/sitemap.xml`   | XML sitemap for search engines |
| `/rss.xml`       | RSS feed for subscribers     |

## Editing Site Content

| What                    | Where to edit                       |
| ----------------------- | ----------------------------------- |
| Site title & SEO        | `src/app/layout.tsx`                |
| Homepage intro text     | `src/app/page.tsx`                  |
| About page              | `src/app/about/page.tsx`            |
| Navigation links        | `src/components/Header.tsx`         |
| Footer                  | `src/components/Footer.tsx`         |
| Colors & theme          | `src/app/globals.css`               |
| Markdown element styles | `src/components/MDXComponents.tsx`  |
