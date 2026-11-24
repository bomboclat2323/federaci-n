# Email Reply to Reviewer

Subject: CFOP Website - Project Status, Architecture Plan & Content Verification

Hi,

Thanks for taking the time to review the wireframe (`cfop_maqueta_10pct.html`) and the GitHub repository. Everything you flagged makes complete sense, and I agree with your priorities: we should get the documentation, verified content, and core working pages right before spending time on animations or extra visual polish.

Here is where things actually stand and how we plan to handle each point:

1. The HTML wireframe vs. the GitHub repository
`wireframe/cfop_maqueta_10pct.html` is just an early static wireframe to agree on page structure and navigation before rebuilding the production app. It is not meant to be production code. The earlier Czech React/Vite draft from the initial commits has been moved to `legacy_archive/` so we can start clean from verified content and an approved design. Updating the repository `README.md` and documenting the architecture properly is the first step before moving to the next build stage.

2. Content sources and placeholder numbers
The basic legal and contact details in the wireframe (organization name, `ul. Wałowa 4, 43-400 Cieszyn`, `KRS 0000547004`, `NIP 5482668985`, `cfoppes@gmail.com`, `+48 608 031 289`, and the board names) came from the existing CFOP site (`cfop-djs.pages.dev`).
Everything else, including the membership figures (`48+`), grant totals (`1.4M€+`), training numbers (`650+`), fee tiers, sample member rows, and event dates, was only put there as placeholder text so the layout wasn't empty. None of those placeholder figures will go into the live website unless you confirm them or send us the real ones.

3. Features that are currently just demos
Right now, the language toggle, membership application form, member login, document downloads, and cookie banner in the HTML wireframe are only visual stubs. In the attached architecture note (`03_TECHNICAL_ARCHITECTURE.md`), I have outlined how each of them will be built properly in the React app (real translation files, form submission handling, authenticated member access, CMS-managed PDFs, and an actual GDPR cookie banner).

4. Development approach and quality checks
We do use AI tools to speed up boilerplate and research, but all code, copy, and layouts are reviewed and tested manually before going live. Moving forward, we will build clean, accessible, responsive pages first and leave subtle transitions for the end, once the content and core features are signed off.

I have attached three short documents covering everything you asked for:
- `02_PROJECT_ROADMAP_AND_STATUS.md`: what is done vs. mocked vs. planned, the milestone schedule, and how our review of 20 federation websites (`analisis_webs_federaciones.pdf`) shaped the page structure.
- `03_TECHNICAL_ARCHITECTURE.md`: the React/Vite setup, CMS and login options, multilingual handling, and testing checks (which will also go into the repo README).
- `04_CONTENT_AND_AESTHETIC_QUESTIONNAIRE.md`: a practical list of questions to confirm CFOP's real data, documents, and design preferences.

Once you have had a chance to look through the questionnaire and send back your answers (or let me know if you prefer a quick call), we will update the repository README and start on the next milestone.

Best,
[Your Name]
