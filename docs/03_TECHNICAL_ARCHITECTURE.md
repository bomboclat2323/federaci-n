# CFOP Website: Technical Architecture & QA Notes

This note outlines how the production application in the GitHub repository will be built, and will also form the basis for the updated `README.md`.

## 1. Frontend & Hosting
- **Stack:** React, Vite, and TypeScript (strict mode).
- **Routing:** `react-router-dom` with clean URLs (`/about`, `/what-we-do`, `/members`, `/membership`, `/documents`, `/events`, `/extranet`, `/contact`) and language support.
- **Hosting:** Cloudflare Pages connected directly to GitHub, so every branch/PR generates a preview link for you to test before anything goes live.

## 2. How the wireframe maps to React components
- `src/components/Navbar.tsx` & `Footer.tsx`: shared header (with language switch and search) and legal registry footer.
- `src/pages/HomePage.tsx`: overview sections introducing CFOP, activities, and regional contact details.
- `src/pages/AboutPage.tsx`: mission, statutory board, supervisory board, and registry numbers.
- `src/pages/MembersPage.tsx`: searchable/filterable list of member NGOs and Czech-Polish partners.
- `src/pages/MembershipPage.tsx`: membership info, fee structure (if applicable), and application form.
- `src/pages/DocumentsPage.tsx`: filterable repository for statutes, reports, legislative briefs, and templates.
- `src/pages/EventsPage.tsx`: calendar of upcoming workshops/conferences and press contact/assets.
- `src/pages/ExtranetPage.tsx`: login-protected member area.

## 3. Content Management (CMS)
To let CFOP staff publish news, events, member entries, and PDFs without editing code, we suggest one of two options:

1. **Decap CMS (recommended if you want zero monthly fees):**
   - Runs at `/admin` on the site and saves edits directly to Markdown/JSON files in GitHub.
   - Cloudflare Pages rebuilds the site automatically in about 30 seconds after each save.
   - No separate database to maintain.

2. **Sanity.io (free tier):**
   - Better if several editors work at the same time and want side-by-side `EN / PL / CZ` fields, drafts, and a media library for PDFs and photos.

## 4. Member Extranet Authentication
For the private Member Area (`Pro členy / Dla członków`):
- **Proposed tool:** Supabase Auth (or Clerk).
- **How it works:** Users log in with email/password or a one-time login link. React checks session state before rendering `/extranet`, and internal files (board minutes, draft calls, member templates) are stored privately and served via short-lived signed download links rather than public URLs.

## 5. Multilingual Support (`EN / PL / CZ`)
- Implemented with `react-i18next` using separate JSON files per language (`src/locales/en.json`, `pl.json`, `cs.json`).
- Covers navigation, page copy, form errors, and page titles. Missing keys are flagged during local builds so untranslated text doesn't slip into production.

## 6. Forms, Search & GDPR Cookies
- **Forms:** Built with `react-hook-form` + `zod` validation, posting to a Cloudflare Pages Function that sends notifications via Resend (with Cloudflare Turnstile to block spam).
- **Search:** Lightweight client-side index (`Fuse.js`) built from site pages, members, events, and document titles.
- **Cookies & GDPR:** Real opt-in consent manager. No analytics or external tracking scripts will load unless the user explicitly accepts them.

## 7. Quality Assurance & AI-Assisted Workflow
- No placeholder numbers, sample member names, or unverified claims are allowed in production commits.
- All code (including any AI-assisted scaffolding) is reviewed manually, checked with TypeScript (`tsc --noEmit`) and ESLint, and tested on desktop (`1440px`) and mobile (`390px`).
- Accessibility checks per milestone: one clear `<h1>` per page, proper heading order, keyboard navigation, alt text, and WCAG 2.1 AA color contrast.
