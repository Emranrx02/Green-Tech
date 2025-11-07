# Green‑Tech — Frontend (React + Vite)

A small marketing website built with React and Vite. It’s a clean, responsive single‑page layout with a hero, clients belt, Reviews section, FAQ, and a compact CTA.

Why this repo
- Lightweight, component-driven React site for a B2B outreach / telemarketing landing page.
- Simple, production-ready Vite setup with fast HMR for development and a static build for deployment.

What I (we) worked on
- Polished the FAQ typography and centered the heading for better emphasis.
- Redesigned and tightened the CTA for a cleaner, more premium look.
- Added `ReviewsV2` — a premium single-card review slider (avatar, stars, quote, prev/next). Mobile swipe support included.
- Fixed Vercel routing so CSS/JS assets are served with correct MIME types (avoids assets being returned as HTML).
- Verified the production build locally (`npm run build`) — build succeeds.

Quick start (developer)

1. Install dependencies

```bash
npm install
```

2. Run development server (hot reload)

```bash
npm run dev
# open http://localhost:5173
```

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
# open the preview URL printed by vite
```

Deploying to Vercel

This project already includes `vercel.json` configured for static deployments. Vercel will run `npm run build` and serve the `dist/` folder.

When you import the repo into Vercel, check:
- Build Command: `npm run build`
- Output Directory: `dist`

If you use runtime secrets (EmailJS, analytics keys, etc.), add them in the Vercel project settings under Environment Variables.

Troubleshooting notes
- If CSS/JS load errors appear in the browser console and show a MIME-type mismatch (assets served as text/html), it usually means a rewrite rule is returning `index.html` for asset requests. `vercel.json` has been updated to only rewrite paths without an extension to `index.html`.
- Vercel runs on Linux (case-sensitive). Make sure import paths match filenames exactly.

Files of interest
- `src/pages/Home.jsx` — homepage layout and content
- `src/components/ReviewsV2.jsx` — Reviews component (single-card slider)
- `styles/style.css` — global site styles
- `vercel.json` — Vercel build & rewrite config

Short changelog (recent commits)
- chore: apply ReviewsV2 UI and style fixes; fix pro6 import; add avatars and animations
- chore: add vercel.json to ensure correct static build and SPA routing
- fix(deploy): change vercel rewrite to exclude asset files so CSS/JS keep correct MIME types
- feat(reviews): update ReviewsV2 content and animation hooks (user-updated)

Want it cuter?
- I can add emoji, a small logo, or a short demo GIF to the README if you want a livelier project page for GitHub.

---
If you'd like, I'll commit and push this README now.

<!-- redeploy-trigger: 2025-11-07T12:00:00Z -->
