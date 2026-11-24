# CFOP Website (Cieszyn Federation of NGOs and Social Economy Entities)

Official repository for the **CFOP** (*Cieszyńska Federacja Organizacji Pozarządowych i Podmiotów Ekonomii Społecznej*) cross-border web portal.

## Repository Structure

- `wireframe/cfop_wireframe.html` — Stage 1 static structural wireframe (standalone HTML file, opens directly in any browser without a build step). Used to validate the 8-section site map and page hierarchy before writing the clean React production app.
- `docs/` — Project documentation, planning, architecture notes, and client sign-off materials:
  - `01_CLIENT_RESPONSE_EMAIL.md` — Project status summary and response notes.
  - `02_PROJECT_ROADMAP_AND_STATUS.md` — Done vs. mocked vs. planned inventory and Milestone 1–5 schedule.
  - `03_TECHNICAL_ARCHITECTURE.md` — Planned React + Vite + TypeScript stack, CMS, Extranet auth, `i18n`, forms, GDPR, and QA checks.
  - `04_CONTENT_AND_AESTHETIC_QUESTIONNAIRE.md` — Content verification and visual direction questionnaire for CFOP.
  - `analisis_webs_federaciones.pdf` — Audit of 20 Czech federation websites used to define the mandatory federation modules.
- `legacy_archive/` — Archived early Czech React/Vite draft (`src/`, `package.json`, `index.html`, etc.), set aside so the production v1 codebase can be rebuilt cleanly from verified content and approved architecture.

## Previewing the Stage 1 Wireframe

Open `wireframe/cfop_wireframe.html` directly in any web browser (no Node server or dependencies required).

## Planned Production Stack

- **Frontend:** React + Vite + TypeScript (strict mode)
- **Multilingual:** `react-i18next` (`PL`, `CZ`, `EN`)
- **CMS:** Decap CMS or Sanity (for CFOP staff to manage news, events, members, and PDFs)
- **Member Extranet:** Supabase Auth or Clerk with protected routes and signed document links
- **Hosting & Forms:** Cloudflare Pages + Cloudflare Pages Functions (`Resend` + Turnstile)

## Current Status

We are in **Milestone 1** (documentation, architecture alignment, and official content/design verification via `docs/04_CONTENT_AND_AESTHETIC_QUESTIONNAIRE.md`). No placeholder metrics or unverified sample data will be carried into the production build.
