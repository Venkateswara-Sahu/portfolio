"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp, Cpu, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LuxurySpotlightCard } from "@/components/ui/LuxurySpotlightCard";
import { cn } from "@/lib/utils";

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const projectDetails: Record<string, { architecture: string[]; snippet: string }> = {
    f1insightai: {
      architecture: [
        "9-Node LangGraph State Graph: Classify ➔ Sub-schema Retrieval ➔ SQL Generation ➔ TiDB Execution ➔ Reflection Error Repair.",
        "FAISS vector store index mapping natural language query tokens to 14 multi-table relational schemas.",
        "Live RAG Telemetry: MRR evaluation (0.12 ➔ 0.67), Recall@K, Context Relevance, and Faithfulness scoring.",
      ],
      snippet: `graph.add_node("classify", classify_intent)
graph.add_node("retrieve_schema", faiss_schema_rag)
graph.add_node("generate_sql", groq_sql_generator)
graph.add_node("execute_sql", tidb_cloud_executor)
graph.add_node("reflect", self_correcting_retry_loop)`,
    },
    vigil: {
      architecture: [
        "Evaluated on NSL-KDD Benchmark: 93.3% precision, 100% novel-class recall, and 1-chunk detection delay (200 samples).",
        "Dual Autoencoder Design (arXiv:2605.29834): Adaptive A trained online vs Frozen Mirror A_KC capturing nominal baseline distributions.",
        "Novel DriftAttributor: computes per-feature reconstruction error delta Δ(A, A_KC) to pinpoint root causes (e.g. root_shell 14.7%, service_telnet 9.3%).",
        "Full-Stack MLOps: Kafka streaming pipeline, FastAPI REST microservice, MLflow experiment tracking, and Airflow auto-retraining DAG.",
      ],
      snippet: `# vigil-drift PyPI core detection & attribution loop
v = Vigil(feature_names=feature_cols, top_k_features=5)
v.fit(baseline_traffic) # Unsupervised 1,000 baseline samples

for chunk in stream:
    result = v.detect(chunk)
    if result.drift_detected:
        # 93.3% Precision | 1-chunk delay | 100% Novelty Recall
        print(f"Drift Severity: {result.drift_severity:.2f}")
        for feat in result.attribution.top_features:
            print(f" → {feat['feature_name']}: {feat['contribution']:.1%}")`,
    },
    "pid-mto": {
      architecture: [
        "Fine-tuned YOLOv8s symbol detection isolating valves, instrument loops, and pumps on large CAD drawings.",
        "Connected-Component OCR pre-filters text regions, accelerating document processing 50x (~7s vs 360s baseline).",
        "Spatial proximity engine builds NetworkX relationship graph for ISA-5.1 tag validation via Groq Llama 3.3 70B.",
      ],
      snippet: `boxes = yolo_symbol_model.predict(blueprint_image)
text_regions = connected_component_filter(blueprint_image)
spatial_graph = build_proximity_graph(boxes, text_regions)
excel_mto = langgraph_validator.generate_mto(spatial_graph)`,
    },
    "ctr-predictor": {
      architecture: [
        "150 engineered interaction features derived from 39 raw sparse variables across 10,000,000+ Criteo ads.",
        "Optuna Bayesian optimization tuning learning rates, tree depth, and L1/L2 regularization for XGBoost & LightGBM.",
        "Production sub-0.5s Flask REST service with batch scoring engine and Streamlit analytics suite.",
      ],
      snippet: `study = optuna.create_study(direction="maximize")
study.optimize(lambda trial: objective(trial, X_train, y_train), n_trials=100)
best_model = LightGBMClassifier(**study.best_params)
best_model.fit(X_train, y_train) # AUC: 0.9067`,
    },
  };

  return (
    <section id="work" className="py-24 px-4 max-w-5xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
              Selected Engineering Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Star Projects & Case Studies
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-sm">
            Production systems engineered with measurable benchmarks, autonomous state graphs, and streaming MLOps pipelines.
          </p>
        </div>
      </ScrollReveal>

      {/* Case Studies List */}
      <div className="space-y-16">
        {/* 01: F1InsightAI */}
        <ScrollReveal delay={0.1}>
          <LuxurySpotlightCard className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">01 / Flagship Agentic AI</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] text-white text-xs font-mono">
                TiDB Cloud · 700K+ Rows
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              F1InsightAI — Autonomous Text-to-SQL RAG System
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl mb-8">
              An enterprise Natural Language to SQL system querying over 700,000 records across 14 tables in TiDB Cloud. Built with a 9-node LangGraph autonomous state graph featuring FAISS vector sub-schema retrieval and self-correction reflection loops.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-black border border-white/[0.06] mb-8 font-mono">
              <div>
                <div className="text-xl font-bold text-white">5.5x Lift</div>
                <div className="text-[11px] text-neutral-500">MRR: 0.12 ➔ 0.67 on schema search</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">83.3%</div>
                <div className="text-[11px] text-neutral-500">First-attempt SQL execution accuracy</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Groq 120B</div>
                <div className="text-[11px] text-neutral-500">Sub-second query reasoning</div>
              </div>
            </div>

            {/* Expandable Architecture Drawer */}
            <AnimatePresence>
              {expandedId === "f1insightai" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 p-6 rounded-2xl bg-black/60 border border-white/[0.08] space-y-4 overflow-hidden"
                >
                  <div className="text-xs font-mono text-neutral-300 font-semibold uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    Architecture & State Graph Breakdown
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {projectDetails.f1insightai.architecture.map((arch, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase block mb-1">Graph Node Definition:</span>
                    <pre className="p-3 rounded-xl bg-neutral-950 border border-white/5 font-mono text-xs text-cyan-300 overflow-x-auto">
                      {projectDetails.f1insightai.snippet}
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Links & Expand Button */}
            <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="https://huggingface.co/spaces/RiverStead/Text-to-SQL_RAG_Chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <span>Live Hugging Face Space</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="https://github.com/Venkateswara-Sahu/AI_Powered_Text-to-SQL_RAG_Chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 border border-white/10 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </Link>
              </div>

              {/* Prominent High-Contrast Architecture Toggle Pill */}
              <button
                onClick={() => toggleExpand("f1insightai")}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-mono transition-all hover:scale-102 active:scale-98 cursor-pointer",
                  expandedId === "f1insightai"
                    ? "bg-white text-black border-white font-semibold shadow-md"
                    : "bg-white/[0.04] hover:bg-white/[0.08] border-white/15 hover:border-white/30 text-neutral-200 hover:text-white"
                )}
              >
                <Cpu className={cn("w-3.5 h-3.5", expandedId === "f1insightai" ? "text-black" : "text-cyan-400")} />
                <span>{expandedId === "f1insightai" ? "Close Architecture" : "View Architecture"}</span>
                {expandedId === "f1insightai" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </LuxurySpotlightCard>
        </ScrollReveal>

        {/* 02: Vigil */}
        <ScrollReveal delay={0.1}>
          <LuxurySpotlightCard className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">02 / Open Source & Research</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] text-white text-xs font-mono">
                `pip install vigil-drift` (PyPI)
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Vigil (`vigil-drift`) — Zero-Label Streaming Concept Drift Detection
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl mb-8">
              An open-source Python library published to PyPI for unsupervised drift detection and root-cause attribution on live streaming data. Evaluated on the NSL-KDD network intrusion benchmark, delivering 93.3% precision, 100% novel attack class detection recall, and a 1-chunk detection delay without ground-truth labels.
            </p>

            {/* Real Benchmark Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-black border border-white/[0.06] mb-8 font-mono">
              <div>
                <div className="text-xl font-bold text-white">93.3%</div>
                <div className="text-[11px] text-neutral-500">Drift detection precision (NSL-KDD)</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-[11px] text-neutral-500">Novel class detection recall</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">1 Chunk</div>
                <div className="text-[11px] text-neutral-500">Detection delay (200 packets)</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">81% CI</div>
                <div className="text-[11px] text-neutral-500">Automated GitHub Actions coverage</div>
              </div>
            </div>

            {/* Expandable Architecture Drawer */}
            <AnimatePresence>
              {expandedId === "vigil" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 p-6 rounded-2xl bg-black/60 border border-white/[0.08] space-y-4 overflow-hidden"
                >
                  <div className="text-xs font-mono text-neutral-300 font-semibold uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    Dual Autoencoder & NSL-KDD Benchmark Suite
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {projectDetails.vigil.architecture.map((arch, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase block mb-1">Core Detection & Attribution Routine:</span>
                    <pre className="p-3 rounded-xl bg-neutral-950 border border-white/5 font-mono text-xs text-cyan-300 overflow-x-auto">
                      {projectDetails.vigil.snippet}
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Links & Expand Button */}
            <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="https://pypi.org/project/vigil-drift/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <span>View on PyPI</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="https://venkateswara-sahu.github.io/OWADD/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 border border-white/10 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <span>Docs Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="https://github.com/Venkateswara-Sahu/OWADD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 border border-white/10 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repo</span>
                </Link>
              </div>

              {/* Prominent High-Contrast Architecture Toggle Pill */}
              <button
                onClick={() => toggleExpand("vigil")}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-mono transition-all hover:scale-102 active:scale-98 cursor-pointer",
                  expandedId === "vigil"
                    ? "bg-white text-black border-white font-semibold shadow-md"
                    : "bg-white/[0.04] hover:bg-white/[0.08] border-white/15 hover:border-white/30 text-neutral-200 hover:text-white"
                )}
              >
                <Cpu className={cn("w-3.5 h-3.5", expandedId === "vigil" ? "text-black" : "text-cyan-400")} />
                <span>{expandedId === "vigil" ? "Close Architecture" : "View Architecture"}</span>
                {expandedId === "vigil" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </LuxurySpotlightCard>
        </ScrollReveal>

        {/* 03: P&ID Document AI */}
        <ScrollReveal delay={0.1}>
          <LuxurySpotlightCard className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">03 / Vision & Graph Intelligence</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] text-white text-xs font-mono">
                YOLOv8 + OCR + NetworkX
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              P&ID Document AI & Automated Material Take-Off Extraction
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl mb-8">
              An end-to-end computer vision and spatial graph extraction pipeline for engineering drawings. Combines custom YOLOv8 symbol detection with Connected-Component guided OCR (achieving a 50x speedup), spatial proximity graph construction in NetworkX, and LangGraph LLM validation to generate verified Excel MTO deliverables.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-black border border-white/[0.06] mb-8 font-mono">
              <div>
                <div className="text-xl font-bold text-white">50x Speedup</div>
                <div className="text-[11px] text-neutral-500">~7s vs 360s baseline runtime</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">ISA-5.1</div>
                <div className="text-[11px] text-neutral-500">Automated tag parsing standard</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">LangGraph</div>
                <div className="text-[11px] text-neutral-500">Groq Llama 3.3 70B validation</div>
              </div>
            </div>

            {/* Expandable Architecture Drawer */}
            <AnimatePresence>
              {expandedId === "pid" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 p-6 rounded-2xl bg-black/60 border border-white/[0.08] space-y-4 overflow-hidden"
                >
                  <div className="text-xs font-mono text-neutral-300 font-semibold uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    Spatial Graph & OCR Pipeline
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {projectDetails["pid-mto"].architecture.map((arch, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase block mb-1">Spatial Graph Execution:</span>
                    <pre className="p-3 rounded-xl bg-neutral-950 border border-white/5 font-mono text-xs text-cyan-300 overflow-x-auto">
                      {projectDetails["pid-mto"].snippet}
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Links & Expand Button */}
            <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="https://github.com/Venkateswara-Sahu/P-ID-Processing-MTO-Extraction-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Prominent High-Contrast Architecture Toggle Pill */}
              <button
                onClick={() => toggleExpand("pid")}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-mono transition-all hover:scale-102 active:scale-98 cursor-pointer",
                  expandedId === "pid"
                    ? "bg-white text-black border-white font-semibold shadow-md"
                    : "bg-white/[0.04] hover:bg-white/[0.08] border-white/15 hover:border-white/30 text-neutral-200 hover:text-white"
                )}
              >
                <Cpu className={cn("w-3.5 h-3.5", expandedId === "pid" ? "text-black" : "text-cyan-400")} />
                <span>{expandedId === "pid" ? "Close Architecture" : "View Architecture"}</span>
                {expandedId === "pid" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </LuxurySpotlightCard>
        </ScrollReveal>

        {/* 04: CTR Predictor */}
        <ScrollReveal delay={0.1}>
          <LuxurySpotlightCard className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">04 / Predictive ML & Analytics</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] text-white text-xs font-mono">
                10M+ Criteo Ads · AUC 0.9067
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              10M+ Display Ad Click-Through Rate Predictor & Ranking Engine
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl mb-8">
              A high-throughput ad scoring and CTR forecasting system trained on 10,000,000+ Criteo ad interactions. Employs 150 engineered interaction features, Optuna Bayesian hyperparameter optimization across XGBoost and LightGBM ensembles, and a sub-0.5s Flask REST API for single-ad and batch ad bidding.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-black border border-white/[0.06] mb-8 font-mono">
              <div>
                <div className="text-xl font-bold text-white">0.9067 AUC</div>
                <div className="text-[11px] text-neutral-500">Log loss: 0.3105 on test set</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">+265.6%</div>
                <div className="text-[11px] text-neutral-500">CTR lift in top decile placements</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">&lt;0.5s</div>
                <div className="text-[11px] text-neutral-500">Flask REST API scoring latency</div>
              </div>
            </div>

            {/* Expandable Architecture Drawer */}
            <AnimatePresence>
              {expandedId === "ctr" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 p-6 rounded-2xl bg-black/60 border border-white/[0.08] space-y-4 overflow-hidden"
                >
                  <div className="text-xs font-mono text-neutral-300 font-semibold uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    Bayesian Optimization & Pipeline
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {projectDetails["ctr-predictor"].architecture.map((arch, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase block mb-1">Optuna Training Loop:</span>
                    <pre className="p-3 rounded-xl bg-neutral-950 border border-white/5 font-mono text-xs text-cyan-300 overflow-x-auto">
                      {projectDetails["ctr-predictor"].snippet}
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Links & Expand Button */}
            <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="https://ctrpredictor.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <span>Live Streamlit App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="https://github.com/Venkateswara-Sahu/CTR_Predictor_and_Scorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 border border-white/10 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </Link>
              </div>

              {/* Prominent High-Contrast Architecture Toggle Pill */}
              <button
                onClick={() => toggleExpand("ctr")}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-mono transition-all hover:scale-102 active:scale-98 cursor-pointer",
                  expandedId === "ctr"
                    ? "bg-white text-black border-white font-semibold shadow-md"
                    : "bg-white/[0.04] hover:bg-white/[0.08] border-white/15 hover:border-white/30 text-neutral-200 hover:text-white"
                )}
              >
                <Cpu className={cn("w-3.5 h-3.5", expandedId === "ctr" ? "text-black" : "text-cyan-400")} />
                <span>{expandedId === "ctr" ? "Close Architecture" : "View Architecture"}</span>
                {expandedId === "ctr" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </LuxurySpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
