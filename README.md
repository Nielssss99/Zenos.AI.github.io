# Zenos.AI

Static website for **Zenos.AI**, a project building computational models of human physiology: *"Computational Physiology Without Limits."*

The site is a plain HTML/CSS/JavaScript project with no build step, and is served with GitHub Pages.

## Live site

https://nielssss99.github.io/Zenos.AI.github.io/

## Pages

| Path | Page | Status |
| --- | --- | --- |
| `/` (`index.html`) | Landing page: motivation, limits of current models, approach, roadmap, updates signup | Live |
| `/zenos/` | "Zenos" | Live |

## Project structure

```
.
├── index.html          # Landing page
├── nav.html            # Shared navigation markup (sidebar + top bar), injected at runtime
├── zenos/              # "Zenos" page
├── css/
│   ├── base.css        # Base/global styles
│   ├── typography.css  # Fonts and text styles
│   └── components.css  # Layout and component styles (hero, cards, grid, nav, forms)
├── js/
│   ├── component-loader.js  # Fetches nav.html, injects it into #nav-placeholder, highlights the current page
│   ├── nav.js               # Mobile sidebar open/close (delegated click + Escape handlers)
│   └── signup.js            # Submits the updates signup form in the background (index page only)
└── Images/             # Logos and media
```

## How it works

- **Shared navigation:** each page contains an empty `<div id="nav-placeholder"></div>`. `js/component-loader.js` fetches `nav.html` on `DOMContentLoaded` and inserts it into that placeholder. `js/nav.js` then drives the mobile sidebar through delegated event listeners, so `nav.html` needs no inline handlers.
- **Styling:** pages load `css/base.css`, `css/typography.css`, and `css/components.css`, plus Roboto from Google Fonts.
- **Early-access signup:** the form on the landing page posts to Formspree (`formspree.io/f/xzzvnayy`).

## Running locally

Because the navigation is loaded with `fetch()`, the pages must be served over HTTP rather than opened as `file://` URLs:

```bash
# from the repository root
python -m http.server 8000
```

Then open http://localhost:8000/.

## Known issues

- Because the navigation is loaded with `fetch()`, it does not appear when a page is opened directly as a `file://` URL. Serve the site over HTTP (see above).
