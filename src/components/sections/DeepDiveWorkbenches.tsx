"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Bot, CheckCircle2, Cpu, ExternalLink, Eye, Layers, Radio, Sparkles, Terminal, TrendingUp, Zap } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { F1InteractiveSimulator } from "@/components/ui/F1InteractiveSimulator";
import { TerminalCLI } from "@/components/ui/Terminal";
import { PIDVisualizer } from "@/components/ui/PIDVisualizer";
import { CTRScorerSimulator } from "@/components/ui/CTRScorerSimulator";
import { sound } from "@/lib/sound";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function DeepDiveWorkbenches() {
  const [activeTab, setActiveTab] = useState<"f1" | "vigil" | "pid" | "ctr">("f1");

  const handleTabChange = (tab: "f1" | "vigil" | "pid" | "ctr") => {
    sound.playSwitch();
    setActiveTab(tab);
  };

  return (
    <section id="projects" className="relative py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-500/10 via-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Interactive System Workbenches
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Star Engineering Systems
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
          Deep-dive into full-scale production architectures with live interactive sandboxes, verified benchmarks, and telemetry.
        </p>

        {/* Workbench Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-8 w-full max-w-4xl">
          <button
            onClick={() => handleTabChange("f1")}
            className={cn(
              "p-3 rounded-2xl border text-left transition-all font-mono cursor-pointer",
              activeTab === "f1"
                ? "bg-red-950/80 border-red-500 text-white shadow-[0_0_25px_rgba(239,68,68,0.4)] scale-102"
                : "bg-slate-900/80 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20"
            )}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-red-400">
              <Bot className="w-4 h-4" />
              <span>F1InsightAI</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 truncate">9-Node LangGraph Agent</div>
          </button>

          <button
            onClick={() => handleTabChange("vigil")}
            className={cn(
              "p-3 rounded-2xl border text-left transition-all font-mono cursor-pointer",
              activeTab === "vigil"
                ? "bg-cyan-950/80 border-cyan-500 text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] scale-102"
                : "bg-slate-900/80 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20"
            )}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
              <Terminal className="w-4 h-4" />
              <span>Vigil (`vigil-drift`)</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 truncate">Zero-Label PyPI Package</div>
          </button>

          <button
            onClick={() => handleTabChange("pid")}
            className={cn(
              "p-3 rounded-2xl border text-left transition-all font-mono cursor-pointer",
              activeTab === "pid"
                ? "bg-emerald-950/80 border-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] scale-102"
                : "bg-slate-900/80 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20"
            )}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <Eye className="w-4 h-4" />
              <span>P&ID Doc AI</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 truncate">YOLOv8 + CC-OCR (50x)</div>
          </button>

          <button
            onClick={() => handleTabChange("ctr")}
            className={cn(
              "p-3 rounded-2xl border text-left transition-all font-mono cursor-pointer",
              activeTab === "ctr"
                ? "bg-purple-950/80 border-purple-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] scale-102"
                : "bg-slate-900/80 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20"
            )}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-purple-400">
              <TrendingUp className="w-4 h-4" />
              <span>10M+ CTR Scorer</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 truncate">Optuna Boosting Engine</div>
          </button>
        </div>
      </div>

      {/* Dynamic Workbench Container */}
      <div className="relative rounded-3xl p-[1px]">
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={90}
          inactiveZone={0.01}
          variant={activeTab === "f1" ? "red" : activeTab === "vigil" ? "cyan" : activeTab === "pid" ? "emerald" : "purple"}
        />

        <div className="p-6 sm:p-10 rounded-3xl bg-slate-950/95 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* WORKBENCH 1: F1InsightAI */}
            {activeTab === "f1" && (
              <motion.div
                key="f1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4 font-sans">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-mono font-semibold">
                        Flagship Agentic AI
                      </span>
                      <span className="text-xs text-slate-400 font-mono">LangGraph State Machine</span>
                    </div>

                    <h3 className="text-3xl font-extrabold text-white tracking-tight">
                      F1InsightAI — Text-to-SQL RAG System
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Translates complex natural language racing queries into executable SQL over 700,000+ records in TiDB Cloud. Built with an autonomous 9-node LangGraph agent with self-correction reflection loops.
                    </p>

                    {/* Quantitative Benchmarks Grid */}
                    <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-900 border border-white/10 font-mono text-center">
                      <div>
                        <div className="text-lg font-bold text-red-400">5.5x</div>
                        <div className="text-[10px] text-slate-400 uppercase">MRR Lift (0.12 ➔ 0.67)</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-amber-400">83.3%</div>
                        <div className="text-[10px] text-slate-400 uppercase">1st-Pass Accuracy</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-cyan-400">700K+</div>
                        <div className="text-[10px] text-slate-400 uppercase">TiDB Records</div>
                      </div>
                    </div>

                    {/* Highlights List */}
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>9-Node LangGraph state graph with reflection & automatic query repair loop</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>FAISS vector RAG sub-schema retrieval + live telemetry Chart.js generation</span>
                      </li>
                    </ul>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2 flex-wrap">
                      <Link
                        href="https://huggingface.co/spaces/RiverStead/Text-to-SQL_RAG_Chatbot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Launch HuggingFace Space
                      </Link>
                      <Link
                        href="https://github.com/Venkateswara-Sahu/AI_Powered_Text-to-SQL_RAG_Chatbot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub Repo
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <F1InteractiveSimulator />
                  </div>
                </div>
              </motion.div>
            )}

            {/* WORKBENCH 2: Vigil */}
            {activeTab === "vigil" && (
              <motion.div
                key="vigil"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4 font-sans">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                        Published PyPI Package
                      </span>
                      <span className="text-xs text-slate-400 font-mono">`pip install vigil-drift`</span>
                    </div>

                    <h3 className="text-3xl font-extrabold text-white tracking-tight">
                      Vigil (`vigil-drift`) — Streaming Drift Detection
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Zero-label unsupervised concept drift monitoring in live high-velocity streaming data. Features Dual Autoencoders (Adaptive A and Frozen A_KC), replicated T-tests, and novel DriftAttributor for feature-level root cause ranking.
                    </p>

                    {/* Quantitative Benchmarks Grid */}
                    <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-900 border border-white/10 font-mono text-center">
                      <div>
                        <div className="text-lg font-bold text-cyan-400">81%</div>
                        <div className="text-[10px] text-slate-400 uppercase">CI Test Coverage</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-emerald-400">&lt;15ms</div>
                        <div className="text-[10px] text-slate-400 uppercase">Inference Latency</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-400">Feature Δ</div>
                        <div className="text-[10px] text-slate-400 uppercase">Root Cause Attribution</div>
                      </div>
                    </div>

                    {/* Highlights List */}
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Kafka stream-native consumer with chunked micro-batch processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Automated Airflow DAG retraining webhook with strict quality gates</span>
                      </li>
                    </ul>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2 flex-wrap">
                      <Link
                        href="https://pypi.org/project/vigil-drift/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View on PyPI
                      </Link>
                      <Link
                        href="https://venkateswara-sahu.github.io/OWADD/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <Layers className="w-4 h-4" />
                        Documentation
                      </Link>
                      <Link
                        href="https://github.com/Venkateswara-Sahu/OWADD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Repo
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <TerminalCLI />
                  </div>
                </div>
              </motion.div>
            )}

            {/* WORKBENCH 3: P&ID Document AI */}
            {activeTab === "pid" && (
              <motion.div
                key="pid"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4 font-sans">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                        Computer Vision & Graphs
                      </span>
                      <span className="text-xs text-slate-400 font-mono">YOLOv8 + OCR + NetworkX</span>
                    </div>

                    <h3 className="text-3xl font-extrabold text-white tracking-tight">
                      P&ID Document AI & MTO Extraction
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      End-to-end engineering drawing intelligence. Isolates instrument tags, valve symbols, and piping lines, creating spatial relationship graphs in NetworkX and validated by LangGraph.
                    </p>

                    {/* Quantitative Benchmarks Grid */}
                    <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-900 border border-white/10 font-mono text-center">
                      <div>
                        <div className="text-lg font-bold text-emerald-400">50x Fast</div>
                        <div className="text-[10px] text-slate-400 uppercase">~7s vs 360s baseline</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-cyan-400">YOLOv8s</div>
                        <div className="text-[10px] text-slate-400 uppercase">Symbol Model</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-400">ISA-5.1</div>
                        <div className="text-[10px] text-slate-400 uppercase">Standard Parsing</div>
                      </div>
                    </div>

                    {/* Highlights List */}
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Connected-Component guided OCR eliminates pipe graphical noise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>3-node LangGraph validation agent powered by Groq Llama 3.3 70B</span>
                      </li>
                    </ul>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2 flex-wrap">
                      <Link
                        href="https://github.com/Venkateswara-Sahu/P-ID-Processing-MTO-Extraction-System"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4" />
                        View GitHub Repository
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <PIDVisualizer />
                  </div>
                </div>
              </motion.div>
            )}

            {/* WORKBENCH 4: CTR Predictor */}
            {activeTab === "ctr" && (
              <motion.div
                key="ctr"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4 font-sans">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold">
                        Large-Scale Predictive ML
                      </span>
                      <span className="text-xs text-slate-400 font-mono">10M+ Criteo Ads</span>
                    </div>

                    <h3 className="text-3xl font-extrabold text-white tracking-tight">
                      10M+ Display Ad CTR Predictor & Scorer
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      High-throughput ad scoring and click-through rate ranking engine trained on 10,000,000+ Criteo ad interactions with 150 engineered features and Optuna Bayesian optimization.
                    </p>

                    {/* Quantitative Benchmarks Grid */}
                    <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-900 border border-white/10 font-mono text-center">
                      <div>
                        <div className="text-lg font-bold text-purple-400">0.9067</div>
                        <div className="text-[10px] text-slate-400 uppercase">Test Set AUC</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-pink-400">+265.6%</div>
                        <div className="text-[10px] text-slate-400 uppercase">Top Decile Lift</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-cyan-400">&lt;0.5s</div>
                        <div className="text-[10px] text-slate-400 uppercase">REST API Latency</div>
                      </div>
                    </div>

                    {/* Highlights List */}
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>Optuna hyperparameter-tuned XGBoost & LightGBM ensemble models</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>Production Flask REST service with batch scoring and Streamlit UI</span>
                      </li>
                    </ul>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2 flex-wrap">
                      <Link
                        href="https://ctrpredictor.streamlit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Streamlit App
                      </Link>
                      <Link
                        href="https://github.com/Venkateswara-Sahu/CTR_Predictor_and_Scorer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub Repo
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <CTRScorerSimulator />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
