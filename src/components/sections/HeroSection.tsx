"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Download, Eye, MapPin, Sparkles, Terminal } from "lucide-react";
import { Spotlight } from "@/components/ui/Spotlight";
import { WordRotate } from "@/components/ui/WordRotate";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { Particles } from "@/components/ui/Particles";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function HeroSection({ onOpenResumeModal }: { onOpenResumeModal: () => void }) {
  const rotatingRoles = [
    "Generative AI & Agentic Systems",
    "Author of 'vigil-drift' on PyPI",
    "MLOps & Real-time Streaming",
    "Computer Vision & Document AI",
    "LangGraph Self-Correction Pipelines",
  ];

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Interactive Background Particles Canvas */}
      <Particles quantity={45} staticity={40} ease={60} color="#38bdf8" className="opacity-70" />

      {/* Multi-Colored Ambient Spotlights */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#00f0ff" />
      <Spotlight className="top-1/3 -right-20" fill="#a855f7" />
      <Spotlight className="bottom-0 left-10" fill="#3b82f6" />

      {/* Grid Pattern Overlay with Radial Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/30 backdrop-blur-md mb-6 animate-fade-in shadow-[0_0_25px_rgba(6,182,212,0.25)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-cyan-300 tracking-wide">
            {PORTFOLIO_DATA.personal.status}
          </span>
        </div>

        {/* Hero Name Header with Vibrant Multi-Color Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
            Venkateswara Sahu
          </span>
        </h1>

        {/* Dynamic Rotating Title */}
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 h-10 mb-6 flex items-center justify-center gap-2 flex-wrap">
          <span>Engineering</span>
          <WordRotate
            words={rotatingRoles}
            className="text-cyan-400 font-bold border-b-2 border-cyan-500/40 pb-0.5"
          />
        </div>

        {/* Bio Subtitle */}
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          {PORTFOLIO_DATA.personal.tagline}. Specialized in building autonomous multi-agent state graphs,
          unsupervised concept drift detection for live Kafka streams, and high-throughput vision pipelines.
        </p>

        {/* Quick Highlights Multi-Color Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-rose-500/30 text-xs text-slate-200 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            Bengaluru · Hyderabad · Gurugram · Remote
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs text-slate-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            ₹1,00,000 Seed Fund Awardee
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs text-slate-200 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            `pip install vigil-drift` (PyPI)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-indigo-500/30 text-xs text-slate-200 shadow-sm">
            <Bot className="w-3.5 h-3.5 text-indigo-400" />
            B.Tech (Hons.) CS @ LPU (CGPA 8.38)
          </span>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="#projects">
            <ShimmerButton className="shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <span className="text-sm font-semibold flex items-center gap-2">
                Explore Star Projects
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </span>
            </ShimmerButton>
          </Link>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/90 border border-white/20 text-slate-200 text-sm font-semibold hover:bg-slate-800 hover:border-cyan-400 hover:text-white transition-all shadow-lg"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            Role-Tailored Resumes
          </button>

          <Link
            href="https://huggingface.co/spaces/RiverStead/Text-to-SQL_RAG_Chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-sm font-semibold hover:bg-amber-500/25 transition-all shadow-md"
          >
            🤗 Live F1 Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
