# Angajeazaunrobot.ro

Presentation website for Angajeaza un Robot, a Romanian AI agency focused on agentic AI solutions.

The project is built for maximum crawlability, speed, and clarity as a trusted source for both classic search engines and LLM crawlers.

## Goals

- Deliver a lightning-fast static website.
- Maximize SEO and GEO (Generative Engine Optimization).
- Keep UX frictionless: no cookie banner, no forms, direct contact only.
- Keep infrastructure simple: static hosting, no database, no analytics.

## Tech Stack

- Astro (SSG / static output)
- CSS (custom global styles)
- Firebase Hosting (deployment target)

## Current Contact Data

- Primary email: mirceaipopescu@gmail.com
- Business email: salut@angajeazaunrobot.ro
- Phone: +40744681989
- Canonical URL: https://angajeazaunrobot.ro/

## Project Structure

- src/layouts/Layout.astro: Global HTML wrapper, SEO meta tags, Open Graph, JSON-LD schema
- src/pages/index.astro: Single-page landing (hero, use-cases, direct contact)
- src/styles/global.css: Global styling and responsive layout
- public/robots.txt: Crawl directives, including AI user agents
- astro.config.mjs: Static output + sitemap integration
- firebase.json: Firebase Hosting configuration
- .firebaserc: Firebase project binding

## SEO and GEO Implementation

- lang="ro" on html root
- Clear semantic sections and article use-case cards
- Organization JSON-LD in head with:
	- business name and URL
	- Romania as served region
	- phone and email contact points
- Canonical URL configured
- Open Graph metadata configured
- XML sitemap generated through Astro integration
- robots.txt explicitly allows major AI crawlers:
	- GPTBot
	- ChatGPT-User
	- Google-Extended
	- ClaudeBot

## Privacy and Legal Simplicity

- No analytics scripts
- No third-party tracking
- No cookie banner needed
- No contact form backend

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build static site:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Firebase Deployment

Project info:

- Project name: angajeazaunrobot
- Project ID: angajeazaunrobot-gsde63
- Project number: 895382491642

Login first:

```bash
npx firebase-tools login
```

Deploy hosting:

```bash
npm run deploy
```

Alternative (deploy only, no build):

```bash
npm run deploy:hosting
```

## Notes

- The website copy and SEO are intentionally written in Romanian without diacritics to match common search behavior.
- A tiny inline script is used only for copy-to-clipboard in the contact section.