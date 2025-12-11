# meaningfun - Quick Guide

## What you have

A blazing-fast Astro site for publishing interviews, optimized for Vercel deployment.

**Pages:**
- Landing page with interview listings (/)
- Individual interview pages (/interviews/[slug])
- About page (/about)
- RSS feed (/rss.xml)

## How to add a new interview

1. Create a new markdown file in `src/content/interviews/`
2. Use this format:

```markdown
---
title: 'A conversation with [Guest Name]'
guest: '[Guest Name]'
description: 'Brief description of the interview'
pubDate: 2024-11-15
---

# Your Interview Content Here

Write your interview content in markdown. You can:
- Add headings
- Embed videos/audio
- Include images
- Use all markdown features
```

3. Commit and push - Vercel will auto-deploy!

## Development

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
```

## Deploy to Vercel

### First time setup:
1. Push this repo to GitHub
2. Go to vercel.com and import your repository
3. Vercel auto-detects Astro - just click "Deploy"
4. Done! Your site is live

### Adding new interviews:
1. Create markdown file in `src/content/interviews/`
2. Git commit and push
3. Vercel automatically rebuilds and deploys

## Customization

- **Site info**: Edit `src/consts.ts`
- **About page**: Edit `src/pages/about.astro`
- **Styling**: Edit the `<style>` blocks in page files
- **Domain**: Update `site` in `astro.config.mjs`

## Why Astro?

- **Lightning fast**: Static HTML, minimal JavaScript
- **Great DX**: Write content in markdown
- **Vercel-native**: Perfect deployment integration
- **Build time**: Sub-second for small sites like this
