# Public portfolio evidence

The typed content in `src/data/portfolio.ts` is the current source of truth. Preserve each result's evaluation boundary when changing copy. Architecture diagrams are illustrative; they do not show measured telemetry.

| Project | Public evidence | Boundary and source |
| --- | --- | --- |
| Vigil | Published `vigil-drift` package; final attribution study uses 20 seeds, nine ranking methods and 24 conditions | Study scope, not evidence of superior performance. Controlled synthetic and CICIDS2017 development conditions. Training did not consistently outperform simple baselines. [Repository](https://github.com/Venkateswara-Sahu/OWADD), [documentation](https://venkateswara-sahu.github.io/OWADD/), [package](https://pypi.org/project/vigil-drift/) |
| F1InsightAI | 39/40 (97.5%) first-attempt; 39/40 (97.5%) final; independent-label dense MRR@7 0.678 → 0.888; 701,433 records / 14 tables | October 2026 frozen-snapshot evaluation after 20 separate development queries. Forty authored questions with related patterns; not general SQL accuracy. Five separate injected invalid-column probes recovered; no natural retry estimate. [Raw evidence and protocol](https://github.com/Venkateswara-Sahu/AI_Powered_Text-to-SQL_RAG_Chatbot/blob/f627442cacb4ee9c3c0b504b0d5fa1ffebc539b5/docs/evaluation/results.md) |
| P&ID Intelligence | OCR processing approximately 360 seconds → 7 seconds; six validation rules | One recorded project drawing benchmark; hardware and drawing size affect timings. Prototype requiring human review. [Repository](https://github.com/Venkateswara-Sahu/P-ID-Processing-MTO-Extraction-System) |
| CTR Predictor | Recovered academic notebooks/summary record 10,000,001 rows, 39 raw fields and 150 model features; released feature-name list independently checked | Historical validation AUC 0.9067 and final-test AUC 0.8984 are distinguished by the recovered outputs, but target encoding precedes the split and leaks click-label information. Serving also has batch-dependent transforms, process-dependent hashes and missing indicators computed after imputation. Numerical performance remains omitted pending a clean evaluation and compatible preprocessing/model rebuild. [Repository](https://github.com/Venkateswara-Sahu/CTR_Predictor_and_Scorer) |

## Visual assets

- `public/projects/f1insight-results.png` is a historical project-interface capture. Its visible metrics use the old per-query proxy labels and do not establish independent accuracy or semantic faithfulness.
- `public/projects/plant-pid.png` is the sample input drawing from the P&ID repository. It is not a verified extraction or detection result.
- `public/resumes/Venkateswara_Sahu_Applied_AI_Resume.pdf` is the single public master résumé.

## Verification and release

Fresh checks on 5 October 2026 passed: 19 unit/component tests, 13 Edge browser tests, TypeScript, ESLint and the production build used by the browser suite. The updated résumé was compiled, text-checked and visually reviewed as one page; its public PDF matches the canonical master byte for byte. These checks validate this branch, not deployed Core Web Vitals or external model demos.

HTTP reachability of an external demo does not establish that its model backend works. LinkedIn can block automated checks, and third-party demos can sleep or time out. Field Core Web Vitals and the deployed result must be checked separately. Publish only after approval of the actual preview.

## Follow-up claim audit - 5 October 2026

The live public PDF matched the canonical master SHA-256 `7f05769f59af46a514e2c77476f6cdbb4f07c21225678eda7a7a19e78c90df7b`, and was visually reviewed as one page. F1's merged evidence is visible on the production site. Vigil 0.1.4 is published, and its measured-results PR is merged with results visible in the live documentation.

Original CTR notebooks and saved outputs were found in the user's academic project folder. The output labels are now resolved, but a four-row counterexample reproduced target leakage in the original encoding method. A separate feature-level reproduction using the released 150-name feature list found batch dependence, lost null indicators and process-dependent hash features. No models were retrained, and no new AUC was measured.

The standalone university seed-funding background entry is removed in this follow-up copy. The canonical claim ledger records it as a curricular allocation to student groups, not a competitive startup award.

P&ID's 360-to-7-second timing remains a README-reported historical observation without a recovered repeat log, exact baseline revision or hardware manifest. Its public notebook contains saved symbol-detector results; the trained weights are not present in the public tree. The graph uses spatial inference rather than extracted pipe topology. Do not turn those artifacts into end-to-end extraction accuracy or industrial-validation claims.

These follow-up copy changes are prepared locally. Their publication status must be checked independently; the public site snapshot taken for this audit still contains the older CTR explanation and funding entry.


## CTR v2 repair — 5 October 2026

Supersedes the preceding needs-rerun status: corrected 123-feature training/serving contract, training-only statistics, five-fold label-excluded target encoding and deterministic hashes. Retained train/validation/test counts: 599,971 / 149,994 / 249,987. Validation-selected LightGBM test ROC AUC 0.7605216220 (95% row-bootstrap interval 0.7587374440–0.7624396988), log loss 0.4857297640. Local warmed single-row median 183.78025 ms, 30 repeats, excludes loading/network/concurrency. These are a bounded sample result, not restored historical scores. Source: CTR repair branch `codex/ctr-evidence-repair`, `evidence/benchmark.json`, manifest and raw predictions. Public demo deployment requires the repair PR to merge.
