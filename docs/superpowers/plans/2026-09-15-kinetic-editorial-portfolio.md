# Kinetic Editorial Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing portfolio as a kinetic editorial, evidence-led Applied AI/ML portfolio while preserving its repository and Vercel deployment.

**Architecture:** Keep Next.js 16, React 19, TypeScript, Tailwind 4, and the central data-module pattern. Replace the current presentation layer with focused editorial sections and project-specific SVG visuals; Motion provides progressive-enhancement animation and every animated surface has a static/reduced-motion state.

**Tech Stack:** Next.js 16.3.2, React 19.2.8, TypeScript 5, Tailwind CSS 4, Motion 13, Vitest, Testing Library, Playwright.

**Spec:** `docs/superpowers/specs/2026-09-15-kinetic-editorial-portfolio-design.md`

## Global Constraints

- Preserve the current GitHub repository and Vercel project.
- Use a warm ivory canvas, near-black text, warm orange editorial accent, and signal green only for measured system output.
- Use Motion first; do not add GSAP unless the approved typography cannot be implemented predictably with Motion.
- Do not add Three.js/WebGL in the initial release.
- All essential content must remain visible without animation and under `prefers-reduced-motion`.
- Use “200 samples,” not “200 packets,” for Vigil.
- Avoid unsupported “enterprise,” “production-grade,” “advanced,” and “expert” claims.
- Deployment requires explicit confirmation after local and preview verification.

---

### Task 1: Establish test harness and verified content model

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Replace: `src/data/portfolio.ts`
- Create: `src/data/portfolio.test.ts`

**Interfaces:**
- Produces: `PortfolioContent`, `ProjectCaseStudy`, `MetricEvidence`, `portfolioContent`.

- [ ] Install `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, and `@playwright/test`; add `test`, `test:watch`, and `test:e2e` scripts.
- [ ] Read the relevant installed Next.js 16 guides under `node_modules/next/dist/docs/` before modifying app files.
- [ ] Write a failing data test asserting the role is `Applied AI & Machine Learning Engineer`, primary project order is Vigil/F1/P&ID, Vigil uses `200 samples`, and banned marketing phrases are absent.
- [ ] Run `npm test -- src/data/portfolio.test.ts` and verify failure against the old model.
- [ ] Replace the content model with typed identity, navigation, four evidence-led projects, background entries, and contact links.
- [ ] Run the data test and `npm run lint`; verify both pass.
- [ ] Commit: `refactor: establish verified portfolio content model`.

### Task 2: Build editorial foundation and shell

**Files:**
- Modify: `src/app/layout.tsx`
- Replace: `src/app/globals.css`
- Create: `src/components/editorial/EditorialNav.tsx`
- Create: `src/components/editorial/ContactFooter.tsx`
- Create: `src/components/editorial/EditorialShell.test.tsx`

**Interfaces:**
- Consumes: `portfolioContent.identity`, `.navigation`, `.contact`.
- Produces: semantic page shell, design tokens, `.container-editorial`, `.rule`, `.signal-label` utilities.

- [ ] Write failing tests for navigation landmarks, Resume/GitHub links, email link, and visible keyboard-focus classes.
- [ ] Run the focused test and verify failure because components do not exist.
- [ ] Implement framework-managed serif/sans/mono fonts, ivory/orange/green tokens, responsive container rules, selection styles, and reduced-motion defaults.
- [ ] Implement accessible navigation and contact footer with no client JavaScript requirement.
- [ ] Run focused tests, lint, and build; verify pass.
- [ ] Commit: `feat: add kinetic editorial foundation`.

### Task 3: Implement the kinetic identity hero

**Files:**
- Create: `src/components/editorial/KineticHero.tsx`
- Create: `src/components/editorial/KineticHero.test.tsx`
- Create: `src/components/visuals/HeroSignal.tsx`

**Interfaces:**
- Consumes: `portfolioContent.identity`.
- Produces: `KineticHero` with settled server-rendered text and decorative `HeroSignal` SVG.

- [ ] Write failing tests for name, role, plain-language value statement, Resume/GitHub actions, and decorative SVG accessibility hiding.
- [ ] Run the focused test and verify failure.
- [ ] Implement the “Make it measurable.” mask/reveal sequence with settled markup as the default state.
- [ ] Add a lightweight SVG signal that intersects only decorative letter space and stops motion under reduced-motion.
- [ ] Verify tests, keyboard reading order, mobile wrapping, lint, and build.
- [ ] Commit: `feat: create kinetic editorial hero`.

### Task 4: Build the accessible project index and visual stage

**Files:**
- Create: `src/components/projects/ProjectIndex.tsx`
- Create: `src/components/projects/ProjectStage.tsx`
- Create: `src/components/projects/ProjectExplorer.tsx`
- Create: `src/components/projects/ProjectExplorer.test.tsx`
- Create: `src/components/visuals/VigilSignal.tsx`
- Create: `src/components/visuals/F1SchemaGraph.tsx`
- Create: `src/components/visuals/PIDExtraction.tsx`
- Create: `src/components/visuals/CTRRanking.tsx`

**Interfaces:**
- Consumes: `ProjectCaseStudy[]`.
- Produces: `ProjectExplorer`; selection is controlled by button focus, hover, click, and arrow keys.

- [ ] Write failing interaction tests asserting Vigil is default, clicking/focusing F1 changes the labelled stage, arrow keys move selection, and all four links remain available.
- [ ] Run and verify failure.
- [ ] Implement the editorial project index with a single shared stage and touch/keyboard parity.
- [ ] Implement four responsive SVG visual modules using only verified labels and measurements.
- [ ] Add immediate state changes for reduced-motion and cross-fade/layout transitions otherwise.
- [ ] Run focused tests, lint, and build.
- [ ] Commit: `feat: add interactive systems index`.

### Task 5: Implement three visual case studies and supporting CTR evidence

**Files:**
- Create: `src/components/projects/CaseStudy.tsx`
- Create: `src/components/projects/CaseStudy.test.tsx`
- Create: `src/components/projects/CaseStudies.tsx`
- Create: `src/components/projects/EvidenceMetric.tsx`

**Interfaces:**
- Consumes: `ProjectCaseStudy` fields `problem`, `contribution`, `architecture`, `evaluation`, `limitations`, `links`, `visual`.
- Produces: semantic `CaseStudies` section with Vigil, F1, P&ID plus compact CTR block.

- [ ] Write failing tests for the required evidence order, limitation text, link labels, and exactly three expanded case studies.
- [ ] Run and verify failure.
- [ ] Implement asymmetric case-study layouts that reuse project visuals without repeated card styling.
- [ ] Add evidence captions containing dataset/sample boundaries next to headline metrics.
- [ ] Render CTR as a compact supporting project with AUC, demo, and repository.
- [ ] Run focused tests, lint, and build.
- [ ] Commit: `feat: present evidence-led project case studies`.

### Task 6: Assemble background, page, metadata, and remove obsolete UI

**Files:**
- Create: `src/components/editorial/BackgroundTimeline.tsx`
- Create: `src/components/editorial/BackgroundTimeline.test.tsx`
- Replace: `src/app/page.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/opengraph-image.tsx`
- Delete after reference check: obsolete duplicated `src/components/sections/*` and unreferenced generic `src/components/ui/*`

**Interfaces:**
- Consumes: all new sections and `portfolioContent.background`.
- Produces: final single-page route with IDs `work`, `case-studies`, `about`, `contact`.

- [ ] Write failing tests for chronological background entries, one résumé route, and final section order.
- [ ] Run and verify failure.
- [ ] Implement the compact timeline and assemble the final page.
- [ ] Update title, description, and Open Graph art to match Applied AI/ML positioning.
- [ ] Use `rg` to prove obsolete components have no imports, then delete only unreferenced files.
- [ ] Run all unit tests, lint, and production build.
- [ ] Commit: `feat: assemble redesigned portfolio experience`.

### Task 7: Responsive, accessibility, link, and visual verification

**Files:**
- Create: `playwright.config.ts`
- Create: `tests/e2e/portfolio.spec.ts`
- Create: `tests/e2e/links.spec.ts`
- Modify as failures require: new portfolio components and styles only.

**Interfaces:**
- Produces: repeatable browser verification at mobile and desktop breakpoints.

- [ ] Write Playwright tests for hero visibility, project keyboard selection, external-link destinations, reduced-motion behavior, no horizontal overflow, and mobile menu access.
- [ ] Run `npm run test:e2e`; verify failures expose missing browser behavior before repairs.
- [ ] Fix only demonstrated accessibility/responsive issues.
- [ ] Run `npm test`, `npm run lint`, `npm run build`, and `npm run test:e2e` to green.
- [ ] Run a local browser inspection at 390×844, 768×1024, 1440×900, and 1920×1080; compare with approved art direction.
- [ ] Check all external URLs and record any intentionally unavailable demo.
- [ ] Commit: `test: verify portfolio experience across devices`.

### Task 8: Preview delivery and production handoff

**Files:**
- Modify: `README.md`
- Create: `docs/portfolio-content-evidence.md`

**Interfaces:**
- Produces: documented local setup, content evidence map, pushed branch, and Vercel preview URL.

- [ ] Replace the boilerplate README with setup, test, architecture, asset, and deployment instructions.
- [ ] Document each public metric and its repository evidence source.
- [ ] Re-run the full verification suite and inspect `git diff --check` and `git status`.
- [ ] Commit: `docs: document portfolio architecture and evidence`.
- [ ] Push the redesign branch and create a pull request; verify the Vercel preview without merging.
- [ ] Present the preview and verification results to the user.
- [ ] After explicit confirmation, merge/deploy and verify the live domain; otherwise leave the current production site unchanged.
