# Project Memory & Architecture Gotchas (abhishek4official.github.io)

## 1. Hosting & Deployment Architecture (GitHub Pages)
- **Root Serving:** The repository serves GitHub Pages directly from the repo root (`/`). A `.nojekyll` file at root prevents Jekyll from skipping directories starting with special characters.
- **Source Directory:** All source code is isolated under `/src`.
- **Build Workflow:**
  - `npm run build` runs `tsc -b && vite build` which compiles the React 19 TypeScript SPA into `src/dist`.
  - `postbuild.js` executes immediately after `vite build`:
    1. Generates pre-rendered HTML directories for each route: `/vajrastocks/index.html`, `/ai-agents/index.html`, `/mcp/index.html`, `/agent-frameworks/index.html`, and `/local-ai/index.html`.
    2. Injects route-specific Schema.org JSON-LD graphs (`WebSite`, `Person`, `TechArticle`, `SoftwareApplication`, `BreadcrumbList`).
    3. Injects semantic HTML fallback inside `<div id="root">` so non-JS web crawlers, AI search bots, and answer engines (Perplexity, ChatGPT Search, Claude) receive 100% crawlable content immediately.
    4. Generates `robots.txt` with explicit allowances for AI search crawlers (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `Claude-User`).
    5. Generates `sitemap.xml` with dynamic build date stamps for `<lastmod>`.
    6. Automatically cleans old root directories and mirrors `src/dist` directly into the repository root.

## 2. Machine-Readable AI Standards (GEO & AEO)
- **`llms.txt` & `llms-full.txt`:** Hosted at root per the [llmstxt.org](https://llmstxt.org) standard. Any new major technical guide, case study, or open-source tool should be documented in `src/public/llms.txt` and `src/public/llms-full.txt` so that AI models can ingest clean markdown without scraping clutter.

## 3. Platform & Environment Gotchas
- **Windows Terminal Sandbox:**
  - Creating new git branches or writing to `.git/refs/heads/` can fail with `Permission denied` inside the restricted sandbox. Run git branch operations with `BypassSandbox: true` if ref locking fails.
  - Windows PowerShell 5.1 does not support the `&&` statement separator. Use `;` with `if ($LASTEXITCODE -eq 0)` to chain dependent build commands.
- **Git Commit Protocol:**
  - Always work in a feature branch (`feat/<name>`). Never commit directly to `main` without explicit instructions.
  - Never run `git push` unless specifically requested by the user.

## 4. Core Web Vitals & Image Optimization Standards
- **Favicons:** Modern browsers load `favicon.svg` (< 1 KB) or 48x48 `favicon.png` (< 5 KB), and iOS uses `apple-touch-icon.png` (180x180 px). Never load raw 1024x1024 images in `<head>`.
- **CLS (Cumulative Layout Shift = 0.00):** Explicit `width="1280"`, `height="800"`, and CSS `aspect-[16/10]` must be present on mockup images to reserve layout dimensions prior to asset download.
- **LCP & Deferral:** High-priority hero images use `fetchPriority="high"` and `decoding="async"`. All below-the-fold tab mockups use `loading="lazy"` and `decoding="async"`.
