"use client";
import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { NumberCounter } from "@/components/ui/NumberCounter";

export function Metrics() {
  const stats = [
    { target: 700000, suffix: "+", decimals: 0, label: "Records Indexed", detail: "Multi-table Formula 1 DB on TiDB Cloud" },
    { target: 93.3, suffix: "%", decimals: 1, label: "Drift Precision", detail: "NSL-KDD zero-label benchmark (vigil-drift)" },
    { target: 50, suffix: "x", decimals: 0, label: "OCR Speedup", detail: "~7s vs 360s baseline via CC-OCR" },
    { target: 10, suffix: "M+", decimals: 0, label: "Criteo Ad Interactions", detail: "Trained XGBoost/LightGBM AUC 0.9067" },
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto border-t border-white/[0.08]">
      <ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((item, idx) => (
            <div key={idx} className="space-y-1 group">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono group-hover:text-cyan-300 transition-colors">
                <NumberCounter target={item.target} suffix={item.suffix} decimals={item.decimals} />
              </div>
              <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                {item.label}
              </div>
              <div className="text-xs text-neutral-500">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
