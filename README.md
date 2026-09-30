# Venkateswara Sahu — portfolio

A warm editorial portfolio for Applied AI and Machine Learning work, built with Next.js, React, TypeScript, Tailwind CSS, and Motion.

## Run locally

Use Node.js 20.9 or later and npm. Install dependencies with `npm ci`, then:

```sh
npm run dev
```

Open http://localhost:3000. For a production preview:

```sh
npm run build
npm run start -- --port 3014
```

Open http://localhost:3014. The build uses framework-managed Google fonts, so a fresh build may need network access for fonts.

## Verify

```sh
npm test
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```

Vitest covers content integrity, the server-rendered page, and project selection behavior. Playwright tests use the installed Microsoft Edge browser (`msedge` channel), build the app, and launch a temporary production server on port 3020. Keep that port free. They cover keyboard selection, responsive geometry and readable copy, native disclosures without JavaScript, and the master résumé response.

On systems without Edge, install Microsoft Edge before running the browser tests. No browser download or deployment is part of the test command. Browser traces are retained only for failed tests.

## Content and layout

- `src/data/portfolio.ts` is the canonical typed content. Keep metrics attached to their evaluation scope and evidence links.
- `src/app/page.tsx` assembles the server-rendered page. Hero motion and the project selector are progressive enhancements; full project text and links remain in HTML.
- `src/components/projects/` contains the selector and case studies. Native `details` disclosures expose architecture and limitations without JavaScript.
- `src/components/visuals/` contains explicitly illustrative diagrams, with readable text flows on small screens. They do not represent measured telemetry.
- `public/projects/` contains a real F1 results capture and a sample P&ID input drawing. Captions distinguish captures, inputs, and evaluation evidence.
- `public/resumes/Venkateswara_Sahu_Applied_AI_Resume.pdf` is the one public résumé. Replace it deliberately when updating career evidence.
- `src/app/globals.css` contains the ivory, near-black, orange editorial styles. Green is reserved for measured evaluation results.

The external demo links point to third-party services. An HTTP response confirms reachability, not a functioning model backend. Publication and deployment remain separate, explicit release steps.
