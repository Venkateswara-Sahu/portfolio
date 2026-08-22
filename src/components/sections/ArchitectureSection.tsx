"use client";
import React, { useRef } from "react";
import { Activity, ArrowRight, Bot, Cpu, Database, GitBranch, Radio, RefreshCw, Sparkles, Zap } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/AnimatedBeam";

export function ArchitectureSection() {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const nodeKafka = useRef<HTMLDivElement>(null);
  const nodeAE = useRef<HTMLDivElement>(null);
  const nodeTTest = useRef<HTMLDivElement>(null);
  const nodeAttr = useRef<HTMLDivElement>(null);
  const nodeAirflow = useRef<HTMLDivElement>(null);

  const containerRef2 = useRef<HTMLDivElement>(null);
  const nodeUser = useRef<HTMLDivElement>(null);
  const nodeRAG = useRef<HTMLDivElement>(null);
  const nodeAgent = useRef<HTMLDivElement>(null);
  const nodeTiDB = useRef<HTMLDivElement>(null);
  const nodeReflect = useRef<HTMLDivElement>(null);

  return (
    <section id="architecture" className="relative py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Live Animated Data Flows
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Streaming & Agentic Architectures
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          Dynamic visual pipelines demonstrating zero-label concept drift monitoring and self-correcting schema RAG orchestration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pipeline 1: Vigil Streaming Concept Drift Flow */}
        <div
          ref={containerRef1}
          className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-hidden"
        >
          <div className="mb-6">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                🛡️ Vigil (`vigil-drift`)
              </span>
              <span className="text-xs text-slate-400 font-mono">Stream Processing Pipeline</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Zero-Label Streaming Drift & Auto-Retraining
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Live Kafka network packets pass through dual autoencoders (Adaptive A and Frozen A_KC), undergo replicated T-tests, and trigger feature attribution deltas to fire Airflow DAG retraining.
            </p>
          </div>

          {/* Animated Pipeline Nodes */}
          <div className="relative py-12 flex items-center justify-between gap-2 sm:gap-4 my-auto">
            {/* Kafka Stream Node */}
            <div
              ref={nodeKafka}
              className="z-10 flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-950 border border-cyan-500/40 text-center shadow-lg group hover:scale-110 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
                <Radio className="w-5 h-5 animate-pulse" />
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-200">Kafka Stream</span>
            </div>

            {/* Dual AE Node */}
            <div
              ref={nodeAE}
              className="z-10 flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-950 border border-blue-500/40 text-center shadow-lg group hover:scale-110 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-300">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-200">Dual AE (A/A_kc)</span>
            </div>

            {/* T-Test & Attributor Node */}
            <div
              ref={nodeAttr}
              className="z-10 flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-950 border border-purple-500/40 text-center shadow-lg group hover:scale-110 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400 flex items-center justify-center text-purple-300">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-200">Drift Attributor</span>
            </div>

            {/* Airflow Retrain Node */}
            <div
              ref={nodeAirflow}
              className="z-10 flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center shadow-lg group hover:scale-110 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300">
                <RefreshCw className="w-5 h-5 animate-spin" style={{ animationDuration: "8s" }} />
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-200">Airflow DAG</span>
            </div>

            {/* Animated Traveling Beams */}
            <AnimatedBeam
              containerRef={containerRef1}
              fromRef={nodeKafka}
              toRef={nodeAE}
              curvature={-20}
              gradientStartColor="#00f0ff"
              gradientStopColor="#3b82f6"
              duration={2.5}
            />
            <AnimatedBeam
              containerRef={containerRef1}
              fromRef={nodeAE}
              toRef={nodeAttr}
              curvature={20}
              gradientStartColor="#3b82f6"
              gradientStopColor="#a855f7"
              duration={2.5}
              delay={0.6}
            />
            <AnimatedBeam
              containerRef={containerRef1}
              fromRef={nodeAttr}
              toRef={nodeAirflow}
              curvature={-20}
              gradientStartColor="#a855f7"
              gradientStopColor="#10b981"
              duration={2.5}
              delay={1.2}
            />
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Latency: &lt;15ms / packet</span>
            <span className="text-cyan-400 font-semibold">Zero-Label Unsupervised</span>
          </div>
        </div>

        {/* Pipeline 2: F1InsightAI Self-Correcting Agent Flow */}
        <div
          ref={containerRef2}
          className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-red-500/30 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-hidden"
        >
          <div className="mb-6">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-mono font-semibold">
                🏎️ F1InsightAI
              </span>
              <span className="text-xs text-slate-400 font-mono">LangGraph State Machine</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Autonomous Schema RAG with Reflection & Retry
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Translates user natural language queries into executable SQL over 700k+ records, automatically catching syntax/schema exceptions and self-repairing queries.
            </p>
          </div>

          {/* Animated Pipeline Nodes */}
          <div className="relative py-12 flex items-center justify-between gap-2 sm:gap-4 my-auto">
            {/* User Query Node */}
            <div
              ref={nodeUser}
              className="z-10 flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-950 border border-red-500/40 text-center shadow-lg group hover:scale-110 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-400 flex items-center justify-center text-red-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-200">User Query</span>
            </div>

            {/* FAISS Schema RAG Node */}
            <div
              ref={nodeRAG}
              className="z-10 flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-950 border border-amber-500/40 text-center shadow-lg group hover:scale-110 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-200">FAISS Schema</span>
            </div>

            {/* LangGraph 9-Node Agent */}
            <div
              ref={nodeAgent}
              className="z-10 flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-950 border border-indigo-500/40 text-center shadow-lg group hover:scale-110 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400 flex items-center justify-center text-indigo-300">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-200">LangGraph (Groq)</span>
            </div>

            {/* TiDB Cloud Exec & Reflection Node */}
            <div
              ref={nodeTiDB}
              className="z-10 flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center shadow-lg group hover:scale-110 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-200">TiDB Cloud Exec</span>
            </div>

            {/* Animated Traveling Beams */}
            <AnimatedBeam
              containerRef={containerRef2}
              fromRef={nodeUser}
              toRef={nodeRAG}
              curvature={-20}
              gradientStartColor="#ef4444"
              gradientStopColor="#f59e0b"
              duration={2.5}
            />
            <AnimatedBeam
              containerRef={containerRef2}
              fromRef={nodeRAG}
              toRef={nodeAgent}
              curvature={20}
              gradientStartColor="#f59e0b"
              gradientStopColor="#6366f1"
              duration={2.5}
              delay={0.6}
            />
            <AnimatedBeam
              containerRef={containerRef2}
              fromRef={nodeAgent}
              toRef={nodeTiDB}
              curvature={-20}
              gradientStartColor="#6366f1"
              gradientStopColor="#10b981"
              duration={2.5}
              delay={1.2}
            />
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>MRR Lift: 5.5x (0.12 ➔ 0.67)</span>
            <span className="text-emerald-400 font-semibold">83.3% 1st-Pass Accuracy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
