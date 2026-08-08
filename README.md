# FMCGIOUS — FMCG Distributor Website

Live site: **https://parmarjh.github.io/fmcg/**

Single-page static website for FMCGIOUS, an FMCG (fast-moving consumer goods) distributor
based in Sharjah, UAE. No build step, no backend — plain HTML with Tailwind CSS from CDN
and vanilla JavaScript.

## Pages

| Route | Content |
| --- | --- |
| [`/`](https://parmarjh.github.io/fmcg/) | Hero, company stats, about section, featured products, brand slider |
| [`/brands`](https://parmarjh.github.io/fmcg/brands) | Brand partners (Unilever, Nestlé, PepsiCo, Coca-Cola, Kellogg's, P&G, Red Bull, Nivea) |
| [`/products`](https://parmarjh.github.io/fmcg/products) | Catalog of 51 products, filterable by category |
| [`/about`](https://parmarjh.github.io/fmcg/about) | Company profile |
| [`/contact`](https://parmarjh.github.io/fmcg/contact) | Enquiry form (EmailJS) and contact details |

Product categories: Beverages, Coffee & Tea, Food & Confectionery, Personal Care, Household.

## Features

- Client-side routing via `history.pushState` — no page reloads
- Light/dark theme toggle, persisted in `localStorage`
- Category filtering and per-product "Enquire" actions
- Enquiry form submission through [EmailJS](https://www.emailjs.com/) (browser SDK, no server)
- Responsive layout with mobile navigation menu

## Structure

```
index.html      entire single-page app (markup, styles, product data, routing)
404.html        copy of index.html — serves deep links on GitHub Pages
css/, js/       standalone stylesheet and script
assets/         alternative styles/scripts used by index-new.html
pages/          standalone (non-SPA) versions of each page
images/         product, brand, and category imagery
_redirects      SPA rewrite rule for Netlify-style hosts
```

## Running locally

```bash
python3 -m http.server 8000
# open http://localhost:8000/index.html
```

Deep links such as `http://localhost:8000/products` 404 with a plain static file server
because it has no SPA rewrite; navigate from the home page instead, or use a server that
falls back to `index.html`.

## Deployment

Deployed with GitHub Pages from the `main` branch (root). Two details make the SPA work
from the `/fmcg/` subpath:

- `404.html` is a copy of `index.html`, so GitHub Pages serves the app for unknown paths
  like `/fmcg/products` and the router resolves the route client-side.
- `index.html` sets `window.BASE_PATH` and injects a `<base href>` when served from a
  `github.io` subdirectory, so relative asset paths and pushed URLs stay correct.

Also included: `.github/workflows/pages.yml`, which deploys via GitHub Actions if the
Pages source is switched from "Deploy from a branch" to "GitHub Actions".

## Known issues

- Tailwind is loaded from `cdn.tailwindcss.com`, which logs a production warning. For
  production use, compile Tailwind with the CLI or PostCSS instead.
- The footer `instagram` and `linkedin` icons are not present in the Lucide icon set, so
  they render empty and log a console warning.
- The EmailJS public key is committed in `index.html`; the enquiry form has not been
  verified end to end.
