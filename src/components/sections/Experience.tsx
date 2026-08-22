"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto border-t border-white/[0.08]">
      <ScrollReveal>
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
            Verified Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & Milestones
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-12">
        {PORTFOLIO_DATA.milestones.map((item, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-12 border-b border-white/[0.06] last:border-0 group">
              <div className="md:col-span-3">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block group-hover:text-neutral-300 transition-colors">
                  {item.year}
                </span>
                <span className="text-xs text-neutral-400 font-medium mt-1 block">
                  {item.location}
                </span>
              </div>

              <div className="md:col-span-9 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">{item.role}</h3>
                  <span className="text-neutral-500">·</span>
                  <span className="text-sm font-semibold text-neutral-300">{item.company}</span>
                </div>

                <ul className="space-y-1.5">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="text-xs sm:text-sm text-neutral-400 leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-neutral-500 mt-2 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-neutral-900 border border-white/[0.06] text-[11px] font-mono text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
