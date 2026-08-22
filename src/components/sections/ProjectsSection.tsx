"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Bot, Cpu, ExternalLink, Eye, Layers, Sparkles, Terminal as TerminalIcon, TrendingUp, Play } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { CardTilt } from "@/components/ui/CardTilt";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { TerminalCLI } from "@/components/ui/Terminal";
import { F1InteractiveSimulator } from "@/components/ui/F1InteractiveSimulator";
import { PIDVisualizer } from "@/components/ui/PIDVisualizer";
import { CTRScorerSimulator } from "@/components/ui/CTRScorerSimulator";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeInteractiveDemo, setActiveInteractiveDemo] = useState<"f1" | "vigil" | "pid" | "ctr">("f1");

  const categories = ["All", "GenAI & Agentic", "MLOps & Systems", "Computer Vision", "Predictive ML"];

  const filteredProjects = activeCategory === "All"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  const projectVariants: Record<string, { variant: "red" | "cyan" | "emerald" | "purple"; badgeBg: string; text: string; glow: string }> = {
    f1insightai: { variant: "red", badgeBg: "bg-red-500/15 border-red-500/30 text-red-300", text: "text-red-400", glow: "rgba(239, 68, 68, 0.25)" },
    vigil: { variant: "cyan", badgeBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300", text: "text-cyan-400", glow: "rgba(6, 182, 212, 0.25)" },
    "pid-mto": { variant: "emerald", badgeBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300", text: "text-emerald-400", glow: "rgba(16, 185, 129, 0.25)" },
    "ctr-predictor": { variant: "purple", badgeBg: "bg-purple-500/15 border-purple-500/30 text-purple-300", text: "text-purple-400", glow: "rgba(168, 85, 247, 0.25)" },
  };

  return (
    <section id="projects" className="relative py-20 px-4 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-500/10 via-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Production Engineering Work
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Star Projects & Systems
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
          Interactive showcase featuring live simulators, quantitative benchmarks, and production-tested architectures.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold transition-all",
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] font-bold scale-105"
                  : "bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid with 21st.dev GlowingEffect on Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {filteredProjects.map((project) => {
          const styling = projectVariants[project.id] || projectVariants.f1insightai;
          return (
            <div key={project.id} className="relative rounded-3xl p-[1px] group">
              <GlowingEffect
                spread={45}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                variant={styling.variant}
              />
              <CardTilt glowColor={styling.glow} className="h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-950/90 border-white/10">
                <div>
                  {/* Header Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full border text-xs font-semibold font-mono ${styling.badgeBg}`}>
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium font-mono">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-1 flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-3 ${styling.text}`}>{project.subtitle}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Benchmark Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-slate-900/90 border border-white/10 mb-6">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className={`text-base sm:text-lg font-bold font-mono ${styling.text}`}>{m.value}</div>
                        <div className="text-[11px] font-medium text-slate-200">{m.label}</div>
                        <div className="text-[9px] text-slate-400 truncate">{m.detail}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                      Core Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${styling.text.replace("text-", "bg-")}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-white/10 text-[11px] font-mono text-slate-300 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10 flex-wrap">
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium border border-white/15 transition-colors shadow-sm"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    GitHub Repo
                  </Link>

                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-semibold border border-cyan-500/40 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </Link>
                  )}

                  {project.links.docs && (
                    <Link
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-medium border border-emerald-500/40 transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      Docs
                    </Link>
                  )}

                  {project.links.pypi && (
                    <Link
                      href={project.links.pypi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-xs font-mono font-medium border border-blue-500/40 transition-colors"
                    >
                      PyPI Package
                    </Link>
                  )}
                </div>
              </CardTilt>
            </div>
          );
        })}
      </div>

      {/* Interactive Multi-Demo Sandbox Hub */}
      <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/70 border border-white/15 backdrop-blur-2xl shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Live Interactive Sandboxes
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Test Systems in Real-Time
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Run real simulations, prompt SQL generation, stream CLI detection, or evaluate ad CTR.
            </p>
          </div>

          {/* Interactive Demo Switcher Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveInteractiveDemo("f1")}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-semibold font-mono transition-all",
                activeInteractiveDemo === "f1"
                  ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] scale-105"
                  : "bg-slate-950 border border-white/10 text-slate-400 hover:text-white"
              )}
            >
              🏎️ F1 Text-to-SQL
            </button>
            <button
              onClick={() => setActiveInteractiveDemo("vigil")}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-semibold font-mono transition-all",
                activeInteractiveDemo === "vigil"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                  : "bg-slate-950 border border-white/10 text-slate-400 hover:text-white"
              )}
            >
              🛡️ Vigil Streaming CLI
            </button>
            <button
              onClick={() => setActiveInteractiveDemo("pid")}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-semibold font-mono transition-all",
                activeInteractiveDemo === "pid"
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105"
                  : "bg-slate-950 border border-white/10 text-slate-400 hover:text-white"
              )}
            >
              🏗️ P&ID CV Tag Extraction
            </button>
            <button
              onClick={() => setActiveInteractiveDemo("ctr")}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-semibold font-mono transition-all",
                activeInteractiveDemo === "ctr"
                  ? "bg-purple-500 text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105"
                  : "bg-slate-950 border border-white/10 text-slate-400 hover:text-white"
              )}
            >
              🎯 10M CTR Ad Scorer
            </button>
          </div>
        </div>

        {/* Dynamic Sandbox Display */}
        {activeInteractiveDemo === "f1" && <F1InteractiveSimulator />}
        {activeInteractiveDemo === "vigil" && <TerminalCLI />}
        {activeInteractiveDemo === "pid" && <PIDVisualizer />}
        {activeInteractiveDemo === "ctr" && <CTRScorerSimulator />}
      </div>
    </section>
  );
}
