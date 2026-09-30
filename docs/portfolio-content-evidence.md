# Public portfolio evidence

The typed content in `src/data/portfolio.ts` is the current source of truth. Preserve each result's evaluation boundary when changing copy. Architecture diagrams are illustrative; they do not show measured telemetry.

| Project | Public evidence | Boundary and source |
| --- | --- | --- |
| Vigil | Published `vigil-drift` package; final attribution study uses 20 seeds, nine ranking methods and 24 conditions | Study scope, not evidence of superior performance. Controlled synthetic and CICIDS2017 development conditions. Training did not consistently outperform simple baselines. [Repository](https://github.com/Venkateswara-Sahu/OWADD), [documentation](https://venkateswara-sahu.github.io/OWADD/), [package](https://pypi.org/project/vigil-drift/) |
| F1InsightAI | 83.3% first-attempt SQL accuracy; retrieval MRR 0.12 → 0.67; 700,000+ records in 14 tables | 15 of 18 SQL-generating questions in a 20-question benchmark; three documented retrieval iterations. No retry cases occurred in the recorded benchmark. [Repository](https://github.com/Venkateswara-Sahu/AI_Powered_Text-to-SQL_RAG_Chatbot) |
| P&ID Intelligence | OCR processing approximately 360 seconds → 7 seconds; six validation rules | One recorded project drawing benchmark; hardware and drawing size affect timings. Prototype requiring human review. [Repository](https://github.com/Venkateswara-Sahu/P-ID-Processing-MTO-Extraction-System) |
| CTR Predictor | XGBoost test AUC 0.9067; reported top-decile lift 265.6%; 10 million rows | Offline Criteo experiment with a 7M/1M/2M train/validation/test split. Not online business impact. Exact reproduction requires the original split and preprocessing settings. [Repository](https://github.com/Venkateswara-Sahu/CTR_Predictor_and_Scorer) |

## Visual assets

- `public/projects/f1insight-results.png` is an actual project-interface capture. Its visible measurements belong to the individual query, not the overall benchmark.
- `public/projects/plant-pid.png` is the sample input drawing from the P&ID repository. It is not a verified extraction or detection result.
- `public/resumes/Venkateswara_Sahu_Applied_AI_Resume.pdf` is the single public master résumé.

## Verification and release

The current local build passed 19 unit/component tests, eight Edge browser tests, type checking, lint, and the production build. Browser checks cover responsive geometry, keyboard/pointer selection, readable mobile architecture, native disclosures without JavaScript, internal links, and the résumé PDF response.

HTTP reachability of an external demo does not establish that its model backend works. LinkedIn can block automated checks, and third-party demos can sleep or time out. Field Core Web Vitals and the deployed result must be checked separately. Publish only after approval of the actual preview.
