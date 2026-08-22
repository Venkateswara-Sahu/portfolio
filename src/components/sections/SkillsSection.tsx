"use client";
import React, { useState } from "react";
import { Bot, Cpu, Database, Eye, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const marqueeTech = [
    "LangGraph", "LangChain", "Groq API", "Llama 3.3", "FAISS", "TiDB Cloud",
    "PyTorch", "Apache Kafka", "Apache Airflow", "MLflow", "Docker", "FastAPI",
    "YOLOv8", "Tesseract OCR", "OpenCV", "NetworkX", "XGBoost", "LightGBM",
    "Optuna", "Flask", "Streamlit", "PostgreSQL", "GitHub Actions", "PyPI"
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot": return <Bot className="w-5 h-5 text-cyan-400" />;
      case "Eye": return <Eye className="w-5 h-5 text-emerald-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "Database": return <Database className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getCategoryVariant = (idx: number): "cyan" | "emerald" | "purple" | "red" => {
    const variants: ("cyan" | "emerald" | "purple" | "red")[] = ["cyan", "emerald", "purple", "red"];
    return variants[idx % variants.length];
  };

  return (
    <section id="skills" className="relative py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Technical Arsenal
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Core Technical Stack & Toolchain
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          End-to-end capabilities spanning LLM agent orchestration, computer vision, streaming infrastructure, and production MLOps.
        </p>
      </div>

      {/* Infinite Marquee Toolchain Slider */}
      <div className="mb-14 rounded-2xl bg-slate-900/40 border border-white/10 py-3.5 overflow-hidden shadow-inner">
        <Marquee pauseOnHover className="[--duration:25s]">
          {marqueeTech.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-xs font-mono font-semibold text-slate-200 shadow-sm hover:border-cyan-400 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              {tech}
            </div>
          ))}
        </Marquee>
      </div>

      {/* 4 Categorized Skill Bento Cards with 21st.dev GlowingEffect */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.skills.map((category, idx) => (
          <div key={idx} className="relative rounded-3xl p-[1px] group">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={70}
              inactiveZone={0.01}
              variant={getCategoryVariant(idx)}
            />
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-md">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
                </div>

                {/* Skill Pills Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 border border-white/5 hover:border-cyan-500/30 transition-all group/pill"
                    >
                      <span className="text-xs font-medium text-slate-300 group-hover/pill:text-white transition-colors truncate">
                        {skill.name}
                      </span>
                      <span
                        className={cn(
                          "text-[10px] font-mono px-2 py-0.5 rounded font-semibold shrink-0",
                          skill.level === "Expert"
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                            : skill.level === "Advanced"
                            ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                            : "bg-slate-800 text-slate-400"
                        )}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Production-Tested</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified in Projects
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
