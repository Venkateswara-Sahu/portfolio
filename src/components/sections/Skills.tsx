"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LuxurySpotlightCard } from "@/components/ui/LuxurySpotlightCard";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="stack" className="py-24 px-4 max-w-5xl mx-auto border-t border-white/[0.08]">
      <ScrollReveal>
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Capabilities & Toolchain
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.skills.map((category, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <LuxurySpotlightCard className="p-8 h-full">
              <h3 className="text-lg font-bold text-white mb-6 tracking-tight">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/[0.06] text-xs font-mono text-neutral-300 hover:border-white/20 hover:text-white transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </LuxurySpotlightCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
