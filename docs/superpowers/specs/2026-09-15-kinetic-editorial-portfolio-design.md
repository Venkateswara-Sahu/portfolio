# Kinetic Editorial Portfolio Redesign

**Date:** 2026-09-15  
**Status:** Approved design  
**Repository:** `Venkateswara-Sahu/portfolio`

## Objective

Replace the current generic dark AI landing-page presentation with a memorable, recruiter-readable portfolio built around kinetic editorial typography, real project evidence, and restrained data-system motion. Preserve the existing Next.js repository and Vercel deployment path while rebuilding the presentation layer.

## Success Criteria

- A recruiter understands the candidate's name, target role, strongest evidence, and contact options within 20 seconds.
- The opening is visually distinctive without blocking reading, navigation, or keyboard use.
- The site presents three primary visual case studies and one compact supporting project.
- Every metric shown publicly has a nearby explanation or link to supporting evidence.
- The site works without animation and honors `prefers-reduced-motion`.
- Mobile layout retains the editorial identity without horizontal overflow or interaction-only content.
- Production build, lint, accessibility smoke checks, link checks, and responsive visual checks pass before deployment.

## Art Direction

The visual system combines a warm editorial canvas with technical signal details.

- **Primary canvas:** warm paper/ivory, near-black text.
- **Technical canvas:** near-black sections used sparingly for diagrams and system states.
- **Accent colors:** warm orange for editorial emphasis; signal green only for measured system output.
- **Typography:** one expressive editorial serif and one highly legible grotesk/sans. Monospace is limited to measurements and system labels.
- **Composition:** oversized kinetic headings, asymmetric grids, strong rules, intentional negative space, and full-width project imagery.
- **Motion:** typography settles quickly; project visuals respond to scroll or pointer; body copy remains stable.
- **Avoid:** generic glowing cards, pill-heavy UI, particle backgrounds, terminal cosplay, gratuitous 3D, and decorative metrics without context.

## Information Architecture

1. **Editorial navigation** — name, Work, About, Resume, GitHub, and contact access.
2. **Kinetic identity hero** — name, role, one plain-language value statement, resume/GitHub actions, and a short kinetic typography sequence.
3. **Selected systems index** — four projects in a compact editorial index. Changing selection updates one full-width visual stage rather than displaying repeated cards.
4. **Primary case studies** — Vigil, F1InsightAI, and P&ID Intelligence.
5. **Supporting project** — CTR Predictor receives a shorter evidence block with demo and repository links.
6. **Background** — internship, degree, grant, and open-source work in a compact timeline.
7. **Direct close** — one master resume, email, LinkedIn, GitHub, and location/availability.

The current skills wall, animated metrics strip, four-track resume hub, generic contact copy, and duplicated page sections are removed or consolidated.

## Hero Experience

The hero uses the phrase **“Make it measurable.”** as an editorial device, paired with the unambiguous identity:

> Venkateswara Sahu — Applied AI & Machine Learning Engineer

Supporting copy:

> I build evaluated AI systems—from concept-drift monitoring to Text-to-SQL agents—with evidence you can inspect.

The display words enter through a short mask/reveal sequence and settle within approximately 1.2 seconds. A restrained data signal intersects the typography, but it never sits behind essential copy. Resume and GitHub links remain visible above the fold.

## Project Presentation

### Interactive Index

The index lists project number, name, discipline, and one verified result. Hover, focus, or tap changes a single visual stage. Keyboard and touch users receive the same information without relying on hover.

### Case-Study Anatomy

Each primary case study follows the same evidence order while using a distinct visual treatment:

1. Problem and context
2. What Venkateswara personally implemented
3. System architecture
4. Evaluation setup and results
5. Limitations or boundary conditions
6. Repository, demo, documentation, or package links

### Project Visual Languages

- **Vigil:** stream waveform, distribution shift, attribution bars, and adaptive/frozen autoencoder relationship.
- **F1InsightAI:** schema graph, natural-language question transformation, execution/reflection loop, and evaluation progression.
- **P&ID Intelligence:** engineering drawing crop, detection boxes, OCR regions, relationship graph, and MTO output.
- **CTR Predictor:** ranking curve, top-decile lift, model comparison, and compact scoring interface.

Visuals should be generated from real screenshots, repository diagrams, or verified project data. Decorative mock telemetry must be clearly illustrative or omitted.

## Content Rules

- Prefer “built,” “evaluated,” “implemented,” and “measured” over “enterprise,” “production-grade,” or “advanced.”
- Do not claim production scale when evidence shows a project, benchmark, prototype, or internship deliverable.
- Explain sample size, dataset, or evaluation boundary near headline metrics.
- Use “200 samples,” not “200 packets,” for the documented Vigil stream experiment.
- Present the F1 system as the internship/industry project; do not duplicate it as separate experience and unrelated work.
- Show one downloadable master resume. Job-description-specific resumes remain part of the application workflow, not the public site navigation.

## Component Architecture

The new page is composed from focused modules:

- `EditorialNav`
- `KineticHero`
- `ProjectIndex`
- `ProjectStage`
- `CaseStudy`
- project-specific visual modules for Vigil, F1, P&ID, and CTR
- `BackgroundTimeline`
- `ContactFooter`
- a typed portfolio content module

Project content and visual configuration stay separate from rendering components. Each visual module receives typed data and must provide a static fallback.

The current duplicate `Hero*`, `Projects*`, `Skills*`, `Experience*`, `ResumeHub*`, and `Contact*` implementations are retired after the new page is verified. Generic effect utilities are removed when no longer referenced.

## Animation and Interaction

- Use Motion for reveal, layout, and selection transitions.
- Introduce GSAP only if the approved kinetic typography cannot be implemented predictably with Motion.
- Prefer SVG and CSS for diagrams. Use Canvas only for a measured interaction that is difficult to express in SVG.
- Do not add Three.js/WebGL in the initial implementation.
- Pointer effects are progressive enhancement, never required navigation.
- Reduced-motion mode replaces transitions with immediate state changes.
- Animation work pauses when the page is not visible and avoids continuous high-cost loops.

## Responsive Behavior

- Desktop uses asymmetric two-column and full-width editorial compositions.
- Tablet reduces heading scale and removes nonessential overlapping elements.
- Mobile uses a linear reading order, tap-controlled project index, static diagram fallbacks, and persistent access to Resume/GitHub.
- Typography uses fluid `clamp()` sizing with tested minimum and maximum widths.
- No section requires horizontal scrolling.

## Accessibility and Failure Handling

- Semantic landmarks and heading order define the page without JavaScript.
- Interactive index items are native buttons or links with visible focus states.
- All project imagery has meaningful alt text; decorative signals are hidden from assistive technology.
- If animation initialization fails, content remains visible in its settled state.
- Broken external links do not prevent access to repository or contact actions.
- Font loading uses local or framework-managed files with a metric-compatible fallback to avoid layout shift.
- Color combinations meet WCAG AA for normal text.

## Performance Budget

- Avoid heavyweight 3D dependencies in the first release.
- Optimize screenshots to AVIF/WebP and size them responsively.
- Lazy-load below-the-fold project visuals.
- Keep above-the-fold animation CPU-light and avoid large client-only dependency trees.
- Target good Core Web Vitals on representative mobile and desktop profiles.

## Verification

- Run lint and production build.
- Exercise the page with JavaScript enabled and disabled where practical.
- Test keyboard navigation, focus visibility, reduced motion, and high-contrast readability.
- Check at mobile, tablet, laptop, and wide desktop breakpoints.
- Verify every external project, demo, documentation, email, social, and resume link.
- Visually compare the implementation against the approved Kinetic Editorial direction.
- Inspect production deployment after Vercel publishes it; deployment occurs only after explicit user confirmation at the final public-change step.

## Delivery Strategy

Work on a dedicated branch. First implement the design system, hero, and project index as a vertical slice. Review the local visual result before building the case studies. Replace the old page only after the complete new route is verified. Preserve rollback through Git history and Vercel deployment history.
