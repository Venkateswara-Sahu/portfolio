# Public portfolio evidence

The typed content in `src/data/portfolio.ts` is the current source of truth. Preserve each result's evaluation boundary when changing copy. Architecture diagrams are illustrative; they do not show measured telemetry.

| Project | Public evidence | Boundary and source |
| --- | --- | --- |
| Vigil | Published `vigil-drift` package; final attribution study uses 20 seeds, nine ranking methods and 24 conditions | Study scope, not evidence of superior performance. Controlled synthetic and CICIDS2017 development conditions. Training did not consistently outperform simple baselines. [Repository](https://github.com/Venkateswara-Sahu/OWADD), [documentation](https://venkateswara-sahu.github.io/OWADD/), [package](https://pypi.org/project/vigil-drift/) |
| F1InsightAI | 39/40 (97.5%) first-attempt; 39/40 (97.5%) final; independent-label dense MRR@7 0.678 → 0.888; 701,433 records / 14 tables | October 2026 frozen-snapshot evaluation after 20 separate development queries. Forty authored questions with related patterns; not general SQL accuracy. Five separate injected invalid-column probes recovered; no natural retry estimate. [Raw evidence and protocol](https://github.com/Venkateswara-Sahu/AI_Powered_Text-to-SQL_RAG_Chatbot/blob/f627442cacb4ee9c3c0b504b0d5fa1ffebc539b5/docs/evaluation/results.md) |
| P&ID Intelligence | OCR processing approximately 360 seconds → 7 seconds; six validation rules | One recorded project drawing benchmark; hardware and drawing size affect timings. Prototype requiring human review. [Repository](https://github.com/Venkateswara-Sahu/P-ID-Processing-MTO-Extraction-System) |
| CTR Predictor | Documented 10-million-row sample, 39 raw fields and 150 model features; serving code and released assets | Original training/evaluation outputs not recovered. Conflicting hard-coded AUC labels and unsupported ranking-lift figures are omitted. Batch-dependent preprocessing and missing indicators require repair compatible with frozen model assets. [Repository](https://github.com/Venkateswara-Sahu/CTR_Predictor_and_Scorer) |

## Visual assets

- `public/projects/f1insight-results.png` is a historical project-interface capture. Its visible metrics use the old per-query proxy labels and do not establish independent accuracy or semantic faithfulness.
- `public/projects/plant-pid.png` is the sample input drawing from the P&ID repository. It is not a verified extraction or detection result.
- `public/resumes/Venkateswara_Sahu_Applied_AI_Resume.pdf` is the single public master résumé.

## Verification and release

Fresh checks on 5 October 2026 passed: 19 unit/component tests, 13 Edge browser tests, TypeScript, ESLint and the production build used by the browser suite. The updated résumé was compiled, text-checked and visually reviewed as one page; its public PDF matches the canonical master byte for byte. These checks validate this branch, not deployed Core Web Vitals or external model demos.

HTTP reachability of an external demo does not establish that its model backend works. LinkedIn can block automated checks, and third-party demos can sleep or time out. Field Core Web Vitals and the deployed result must be checked separately. Publish only after approval of the actual preview.
