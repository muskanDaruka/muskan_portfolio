# Muskan Daruka — Portfolio

Premium personal portfolio built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, and Framer Motion. All content is sourced from `src/data/portfolio.ts`, generated from the resume.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Editing content

Everything shown on the site is driven by one file: `src/data/portfolio.ts` (typed via `src/types/portfolio.ts`). Update names, roles, skills, projects, education, etc. there — no component changes required.

- **Certifications / Achievements** sections are empty (not present on the source resume) and are hidden automatically. Add entries to `portfolio.certifications` / `portfolio.achievements` to make them appear.
- **Projects** without a live/GitHub URL show a "Private repository" placeholder instead of a broken link. Add `githubUrl` / `liveUrl` to a project in the data file to enable the buttons.

## Replacing placeholders

- **Profile photo**: the hero currently shows a gradient initials avatar (no photo was supplied). Drop an image at `public/images/profile.jpg` and swap the placeholder markup in `src/components/sections/hero.tsx` for a `next/image`.
- **Resume PDF**: stored at `public/resume/resume.pdf`. Replace the file directly (keep the same filename) to update the download/viewer/print everywhere.
- **Site URL**: set `NEXT_PUBLIC_SITE_URL` in your deployment environment (used for metadata, Open Graph, sitemap, robots). Defaults to a placeholder Vercel URL in `src/lib/site-config.ts`.

## Notes

- Dark/light mode is a custom lightweight implementation (`src/components/theme-provider.tsx`) with a no-flash inline script — no external theming library.
- `lucide-react`'s brand icons (GitHub, LinkedIn) were removed upstream; hand-rolled SVGs live in `src/components/icons.tsx`.
- The `/resume` route embeds the PDF via `<object>`/`<iframe>` with a graceful download-only fallback on mobile or when inline preview isn't supported.

## Deploy on Vercel

```bash
vercel
```

Set `NEXT_PUBLIC_SITE_URL` to your production domain in the Vercel project settings before going live.
