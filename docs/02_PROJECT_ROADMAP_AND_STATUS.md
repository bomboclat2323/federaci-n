# CFOP Website: Current Status & Development Roadmap

## 1. What is done, what is a mockup, and what is still to build

To keep expectations clear, here is an honest breakdown of where the project stands right now.

**Done**
- Review of 20 Czech federation and association websites (`analisis_webs_federaciones.pdf`) to see which pages, legal blocks, and features are standard in practice.
- Draft site map with 8 main sections tailored to a Polish-Czech cross-border NGO federation.
- Initial static wireframe (`wireframe/cfop_maqueta_10pct.html`) showing the rough page layout and section order.
- Earlier Czech React/Vite draft moved to `legacy_archive/` on GitHub so the clean production app can be built from verified content.

**Mocked only (demonstrative in the wireframe)**
- Sample impact numbers (`48+` members, `650+` trained, `1.4M€+`, etc.), sample fee tiers, and the 5-row member table.
- Language switch (`EN / PL / CZ`) that currently only changes the hero heading.
- Stub forms, demo Extranet toggle, and visual cookie box.

**Planned for production (in the React/Vite repo)**
- Updating the GitHub README and project documentation.
- Building the real accessible pages in React with CFOP's verified copy and photography.
- Full Polish, Czech, and English translations.
- Real member directory, downloadable official PDFs, working contact/membership forms, CMS for your team, authenticated member extranet, and compliant GDPR cookie consent.

---

## 2. How the federation research shaped the site map

When we audited the 20 existing federation websites, a few patterns stood out immediately. Many older sites had bloated navigation menus, missing footers, leftover shop links, broken `<h1>` headings, or no English version at all. On the other hand, the most useful federation sites all shared the same 8 core areas:

1. A clear homepage explaining who the federation represents, with quick links to join or log in.
2. An About & Governance section listing board members and linking to statutes and annual reports.
3. A clear breakdown of activities and cross-border programmes.
4. A searchable member directory so partner NGOs and social enterprises are easy to find.
5. A Membership page explaining benefits, fees (if applicable), and how to apply.
6. A Documents & Data library for official PDFs, templates, and policy briefs.
7. An Events & Press section with upcoming dates and media contacts/logos.
8. A protected Member Area (Extranet) plus a Contact page and footer with all required legal registry details (`KRS`, `NIP`, address, GDPR).

This is why the wireframe has those exact sections, rather than being just a landing page.

---

## 3. Development Roadmap (Functionality First)

The schedule below prioritizes repo cleanup, verified content, and working core pages before any visual polish or animations.

**Milestone 1: Repo docs, architecture & content sign-off (Nov 25 - Dec 4, 2026)**
- Replace the default Vite `README.md` with project-specific documentation.
- Lock the site map, aesthetic direction, and verified organizational data using the attached questionnaire.
- Remove any unconfirmed placeholder figures.

**Milestone 2: Design system & core pages in React (Dec 7 - Dec 18, 2026)**
- Set up typography, colors, and responsive grid in React/Vite.
- Build the main static pages: Home, About & Governance, What We Do, and Contacts.
- Check mobile layout, keyboard navigation, and heading structure.
- Deliverable: live preview URL on Cloudflare Pages with zero complex animations.

**Milestone 3: Multilingual support, directory, documents & events (Dec 21, 2026 - Jan 8, 2027)**
- Set up full `EN / PL / CZ` translation files (`react-i18next`).
- Build the searchable Member Directory with real member organizations.
- Upload real PDFs to the Documents page and add confirmed events.

**Milestone 4: CMS, membership form, Extranet login & GDPR (Jan 11 - Jan 22, 2027)**
- Connect the headless CMS so CFOP staff can update news, events, and PDFs.
- Connect the Membership and Contact forms to email delivery.
- Add real authentication for the Member Extranet and a proper GDPR cookie banner.

**Milestone 5: Visual polish, SEO & launch QA (Jan 25 - Feb 5, 2027)**
- Add subtle, accessible hover/page transitions (respecting `prefers-reduced-motion`).
- Add `sitemap.xml`, `robots.txt`, and social sharing metadata.
- Final cross-browser, mobile, and accessibility testing before going live.

---

## 4. How the wireframe relates to the React app

The wireframe (`cfop_maqueta_10pct.html`) is just a throwaway layout sketch so we can agree on structure without getting bogged down in React setup early on. In the repository, each section of that wireframe becomes a separate React component (`Navbar`, `Footer`, `HomePage`, `AboutPage`, `MembersPage`, `DocumentsPage`, etc.) backed by structured data and real translations.
