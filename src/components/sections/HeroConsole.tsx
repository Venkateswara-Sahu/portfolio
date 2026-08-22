"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Download, Eye, FileText, Layers, Play, Radio, RefreshCw, Sparkles, Terminal as TerminalIcon, Zap, CheckCircle2 } from "lucide-react";
import { Particles } from "@/components/ui/Particles";
import { Spotlight } from "@/components/ui/Spotlight";
import { WordRotate } from "@/components/ui/WordRotate";
import { sound } from "@/lib/sound";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function HeroConsole({
  onOpenResumeModal,
  onOpenCommandMenu,
}: {
  onOpenResumeModal: () => void;
  onOpenCommandMenu: () => void;
}) {
  const [activeKernelMode, setActiveKernelMode] = useState<"genai" | "vigil" | "cv" | "ml">("genai");

  const rotatingWords = [
    "Generative AI & Agentic Systems",
    "Author of 'vigil-drift' on PyPI",
    "MLOps & Real-Time Kafka Streaming",
    "Computer Vision & Document AI (50x Fast)",
  ];

  const handleModeSwitch = (mode: "genai" | "vigil" | "cv" | "ml") => {
    sound.playSwitch();
    setActiveKernelMode(mode);
  };

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 px-4 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden">
      {/* Background Interactive Particles Canvas */}
      <Particles quantity={40} staticity={35} ease={50} color="#00f0ff" className="opacity-60" />

      {/* Radiant Spotlights */}
      <Spotlight className="-top-40 left-10 md:left-40" fill="#00f0ff" />
      <Spotlight className="top-1/3 -right-20" fill="#a855f7" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Split-Screen HUD */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Engineer Profile & Quick Actions */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Status Ping & Command Bar Hint */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>AVAILABLE · BENGALURU / HYD / GURUGRAM</span>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onOpenCommandMenu();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-white/15 text-slate-300 text-xs font-mono hover:border-cyan-400 hover:text-white transition-all shadow-sm cursor-pointer"
            >
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-cyan-300">⌘K</kbd>
              <span>Command Palette</span>
            </button>
          </div>

          {/* Name & Dynamic Focus */}
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Venkateswara{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                Sahu
              </span>
            </h1>
            <div className="mt-2 text-lg sm:text-2xl font-semibold text-slate-300 flex items-center gap-2 flex-wrap">
              <span>Engineering</span>
              <WordRotate words={rotatingWords} className="text-cyan-400 font-bold border-b border-cyan-500/40 pb-0.5 font-mono" />
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
            B.Tech (Hons.) CS @ LPU (CGPA 8.38). Creator of <strong className="text-cyan-300 font-mono">vigil-drift</strong> on PyPI, author of 9-node LangGraph self-correcting RAG agents over 700k+ rows, and winner of ₹1,00,000 startup incubation grant.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#projects"
              onClick={() => sound.playClick()}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] cursor-pointer"
            >
              <span>Launch Star Workbenches</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => {
                sound.playSuccess();
                onOpenResumeModal();
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-white/20 hover:border-cyan-400 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Tailored Resumes</span>
            </button>
          </div>

          {/* Core Technical Highlights Pill Strip */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-300">
              <Bot className="w-3.5 h-3.5 text-red-400" /> LangGraph 9-Node RAG
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" /> PyPI Package (vigil-drift)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <Eye className="w-3.5 h-3.5 text-emerald-400" /> YOLOv8 + CC-OCR (50x)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
              <Zap className="w-3.5 h-3.5 text-purple-400" /> 10M+ Ad CTR (AUC 0.9067)
            </span>
          </div>
        </div>

        {/* Right Column: Live Model & Agent Kernel Console */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl bg-[#090d16] border border-cyan-500/30 p-5 sm:p-6 shadow-[0_0_50px_rgba(6,182,212,0.15)] font-mono space-y-4">
            {/* Console Header Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-bold text-white tracking-widest uppercase">
                  AI Systems Kernel Console
                </span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                ACTIVE
              </span>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-slate-950 border border-white/10 text-[11px]">
              <button
                onClick={() => handleModeSwitch("genai")}
                className={cn(
                  "py-1.5 rounded-lg font-semibold transition-all text-center cursor-pointer",
                  activeKernelMode === "genai" ? "bg-red-500/20 text-red-300 border border-red-500/40" : "text-slate-400 hover:text-white"
                )}
              >
                🏎️ GenAI
              </button>
              <button
                onClick={() => handleModeSwitch("vigil")}
                className={cn(
                  "py-1.5 rounded-lg font-semibold transition-all text-center cursor-pointer",
                  activeKernelMode === "vigil" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-white"
                )}
              >
                🛡️ Drift
              </button>
              <button
                onClick={() => handleModeSwitch("cv")}
                className={cn(
                  "py-1.5 rounded-lg font-semibold transition-all text-center cursor-pointer",
                  activeKernelMode === "cv" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "text-slate-400 hover:text-white"
                )}
              >
                🏗️ Vision
              </button>
              <button
                onClick={() => handleModeSwitch("ml")}
                className={cn(
                  "py-1.5 rounded-lg font-semibold transition-all text-center cursor-pointer",
                  activeKernelMode === "ml" ? "bg-purple-500/20 text-purple-300 border border-purple-500/40" : "text-slate-400 hover:text-white"
                )}
              >
                🎯 10M ML
              </button>
            </div>

            {/* Dynamic Console Body */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-white/5 text-xs text-slate-300 space-y-3 min-h-[220px] flex flex-col justify-between">
              {activeKernelMode === "genai" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-red-400 font-bold">F1InsightAI Kernel (9-Node LangGraph)</span>
                    <span className="text-cyan-300">Groq GPT OSS 120B</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/90 border border-white/10 text-cyan-300 font-mono text-[11px]">
                    &gt; User Query: &quot;Top 3 drivers by podium finishes in Silverstone history?&quot;
                  </div>
                  <div className="text-slate-300 text-[11px] space-y-1 font-mono">
                    <p className="text-emerald-400">✓ Schema Vector RAG: isolated tables `drivers`, `results`, `races`</p>
                    <p className="text-cyan-400">✓ SQL Generated: <code>SELECT surname, count(*) FROM results...</code></p>
                    <p className="text-amber-400">✓ TiDB Exec: 284ms | MRR Score: 0.92 | First-Pass SQL: 100%</p>
                  </div>
                </div>
              )}

              {activeKernelMode === "vigil" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-cyan-400 font-bold">vigil-drift Streaming Monitor (PyPI)</span>
                    <span className="text-emerald-300">Kafka ➔ Airflow</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/90 border border-white/10 text-cyan-300 font-mono text-[11px]">
                    &gt; Ingesting: 1,200 packet vectors/sec from topic `network_telemetry`
                  </div>
                  <div className="text-slate-300 text-[11px] space-y-1 font-mono">
                    <p className="text-emerald-400">✓ Dual Autoencoder: Adaptive A (0.042) vs Frozen A_KC (0.098)</p>
                    <p className="text-amber-400">⚡ Replicated T-Test: P-Value 0.0004 &lt; 0.01 (Concept Drift Confirmed)</p>
                    <p className="text-cyan-400">✓ DriftAttributor: Top Root-Cause Feature #14 (`flow_duration` Δ +240%)</p>
                  </div>
                </div>
              )}

              {activeKernelMode === "cv" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-emerald-400 font-bold">P&ID Document AI Engine</span>
                    <span className="text-cyan-300">YOLOv8 + CC-OCR</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/90 border border-white/10 text-emerald-300 font-mono text-[11px]">
                    &gt; Processing CAD Drawing: `P-104_Distillation_Loop.pdf`
                  </div>
                  <div className="text-slate-300 text-[11px] space-y-1 font-mono">
                    <p className="text-emerald-400">✓ Connected-Component OCR: 7.2s total (50x speedup vs 360s baseline)</p>
                    <p className="text-cyan-400">✓ Detected: 14 Valves (FV-101..114), 6 Pumps, 8 ISA-5.1 Instrument Loops</p>
                    <p className="text-purple-400">✓ NetworkX Spatial Proximity: Multi-Table Excel MTO Exported</p>
                  </div>
                </div>
              )}

              {activeKernelMode === "ml" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-purple-400 font-bold">10M+ Criteo CTR Predictor Engine</span>
                    <span className="text-pink-300">XGBoost · LightGBM</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/90 border border-white/10 text-purple-300 font-mono text-[11px]">
                    &gt; Scoring Batch: 50,000 ad placement vectors
                  </div>
                  <div className="text-slate-300 text-[11px] space-y-1 font-mono">
                    <p className="text-emerald-400">✓ Feature Pipeline: 150 Interaction variables extracted</p>
                    <p className="text-cyan-400">✓ AUC Metric: 0.9067 | Log Loss: 0.3105</p>
                    <p className="text-amber-400">✓ Top Decile Lift: +265.6% CTR | Sub-0.5s Flask API</p>
                  </div>
                </div>
              )}

              {/* Console Telemetry Footer */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
                <span>Kernel: v2.4-Production</span>
                <span className="text-cyan-400">Memory: 42MB · Latency: 18ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
