"use client";
import React from "react";
import { Award, Briefcase, Calendar, GraduationCap, MapPin, Package, Sparkles, Trophy } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function ExperienceSection() {
  const getMilestoneIcon = (role: string) => {
    if (role.includes("PyPI") || role.includes("Creator")) return <Package className="w-4 h-4 text-cyan-400" />;
    if (role.includes("Intern")) return <Briefcase className="w-4 h-4 text-indigo-400" />;
    if (role.includes("Seed") || role.includes("Grant")) return <Trophy className="w-4 h-4 text-amber-400" />;
    return <GraduationCap className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <section id="experience" className="relative py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium mb-3 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
          Track Record & Background
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Experience & Milestones
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          Industry internship, open-source package authoring, university startup incubation award, and academic honors.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 space-y-12">
        {PORTFOLIO_DATA.milestones.map((item, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-10 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-[0_0_10px_rgba(6,182,212,0.6)]" />

            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition-all shadow-xl">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.year}
                </span>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold font-mono">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2.5 mb-1">
                <div className="p-2 rounded-xl bg-slate-950 border border-white/10">
                  {getMilestoneIcon(item.role)}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{item.role}</h3>
              </div>

              <div className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2 flex-wrap">
                <span>{item.company}</span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-rose-400" />
                  {item.location}
                </span>
              </div>

              {/* Bullet Descriptions */}
              <ul className="space-y-2 mb-5">
                {item.description.map((desc, dIdx) => (
                  <li key={dIdx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-slate-800 border border-white/5 text-[11px] font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
