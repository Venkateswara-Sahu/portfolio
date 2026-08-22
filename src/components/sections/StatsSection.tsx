"use client";
import React from "react";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function StatsSection() {
  const statGlows = [
    { border: "border-red-500/30", text: "text-red-400", from: "#ef4444", to: "#f59e0b" },
    { border: "border-emerald-500/30", text: "text-emerald-400", from: "#10b981", to: "#06b6d4" },
    { border: "border-purple-500/30", text: "text-purple-400", from: "#a855f7", to: "#ec4899" },
    { border: "border-amber-500/30", text: "text-amber-400", from: "#f59e0b", to: "#ef4444" },
    { border: "border-cyan-500/30", text: "text-cyan-400", from: "#06b6d4", to: "#3b82f6" },
  ];

  return (
    <section className="relative py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
          Proven Engineering Benchmarks
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {PORTFOLIO_DATA.metrics.map((metric, idx) => {
          const glow = statGlows[idx % statGlows.length];
          return (
            <div
              key={idx}
              className={`relative p-5 rounded-2xl bg-slate-900/80 ${glow.border} border backdrop-blur-xl flex flex-col items-center text-center overflow-hidden hover:scale-105 transition-all group shadow-xl`}
            >
              <BorderBeam
                size={120}
                duration={10 + idx * 2}
                delay={idx * 2}
                colorFrom={glow.from}
                colorTo={glow.to}
              />
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-baseline gap-0.5 mb-1 group-hover:scale-105 transition-transform">
                {metric.prefix && <span className={glow.text}>{metric.prefix}</span>}
                <NumberTicker value={metric.value} />
                {metric.suffix && <span className={glow.text}>{metric.suffix}</span>}
              </div>
              <div className="text-xs font-semibold text-slate-200 mb-1">{metric.label}</div>
              <div className="text-[11px] text-slate-400">{metric.detail}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
