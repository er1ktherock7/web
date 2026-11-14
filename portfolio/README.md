# Herick portfolio

Next.js, TypeScript, Tailwind CSS, Lucide, and locally bundled Manrope / IBM Plex Mono fonts. A static redesign of the existing `er1ktherock7/web` GitHub Pages homepage. Existing HTML pages and apps stay intact at their original URLs.

## Local development

Use Node.js 22 LTS or newer. From this directory:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000/web/ . Run `npm run typecheck` for TypeScript checks.

## Build and GitHub Pages

```sh
npm run build:pages
```

This builds `out/`, copies the generated website into the repository root, and creates `.nojekyll` so GitHub Pages serves `_next/`. It preserves existing `apps/`, `css/`, `Js/`, `img/`, and legacy HTML pages. Commit the source AND generated files. Existing GitHub Pages deployment from `main` / repository root can continue without a paid service or a framework-specific build action. Only publish after owner approval.

Do not edit generated HTML or `_next` directly. Rebuild after source changes. Older hashed files can be removed in a later cleanup once cached clients no longer need them.

## Content updates

- `src/content/portfolio.ts`: biography, email, social URLs, projects, stacks, and case-study text. LinkedIn is intentionally empty until a verified URL is supplied.
- `src/app/page.tsx`: homepage sections and education timeline. Employment dates were not added because the old site's “present” status could be stale.
- `src/components/artwork.tsx`: original SVG artwork and explicitly labeled illustrative project previews.
- `src/components/interactions.tsx`: mobile navigation, copy email, and BPM study.
- `src/app/globals.css`: palette, typography, spacing, responsive layouts, and reduced motion.
- `public/`: local images. Reference them under `/web/` for this deployment. A real portrait can replace the monogram in the about section.
- `src/app/layout.tsx`, `public/og-image.png`, `src/app/icon.svg`: search/social metadata and favicon.
- `src/app/work/[slug]/page.tsx`: statically generated project pages.

Email is from the existing public about page. Spotify and Apple Music links are from the existing homepage. No contact backend, tracking scripts, external font requests, invented clients, or fabricated performance metrics.

## Cloudflare Pages (optional migration)

For a root-domain deployment, remove `basePath` from `next.config.ts`, replace hardcoded `/web/` prefixes in navigation / metadata / original-tool links, and set `NEXT_PUBLIC_SITE_URL` to the actual origin. Build with `npm run build` and upload `out/`. To preserve legacy pages, copy the existing `apps`, `css`, `Js`, `img`, and legacy `.html` files into the output, excluding the old index. This is an alternative; the current target is GitHub Pages.

Official guidance: https://nextjs.org/docs/app/guides/static-exports and https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

## Design rationale and provenance

Charcoal, warm ivory, and lime; spacious editorial typography; a mathematical line study; project previews built as SVG/CSS, with no stock or AI illustrations. A small tempo interaction ties the technical work to music. CSS handles restrained motion without an animation runtime.

Reviewed references: Brittany Chiang (content hierarchy), Rauno Freiberg (interaction restraint), Dennis Snellenberg (editorial scale), Bruno Simon (personal experimentation), and github.com/byigitt/portfolio (component-based Next.js organization). No code or visual assets were copied from these sites.

Project claims were checked against `apps/DER_maker.html`, `apps/guitar_tuner3.html`, and `apps/bpm_tap_tool.html` in the original repository. The project pages are source overviews, not claims of production adoption. Original tools are preserved, not rewritten or independently certified.
