"use client";
import React, { useState } from "react";
import { TrendingUp, Zap, Target, Gauge, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdOption {
  name: string;
  category: string;
  device: string;
  hour: string;
  predictedCTR: string;
  lift: string;
  percentile: number;
}

const SAMPLE_ADS: AdOption[] = [
  { name: "High-Engagement FinTech Ad", category: "Finance / Investments", device: "Mobile (iOS)", hour: "20:00 (Peak)", predictedCTR: "14.8%", lift: "+265.6%", percentile: 94 },
  { name: "E-Commerce Flash Sale", category: "Retail / Fashion", device: "Desktop (Chrome)", hour: "14:00 (Mid-Day)", predictedCTR: "9.2%", lift: "+140.2%", percentile: 78 },
  { name: "Generic Banner Ad", category: "General Content", device: "Tablet", hour: "03:00 (Night)", predictedCTR: "2.1%", lift: "+12.4%", percentile: 32 },
];

export function CTRScorerSimulator() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = SAMPLE_ADS[selectedIdx];

  return (
    <div className="w-full rounded-2xl bg-[#120a1f] border border-purple-500/30 overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)] font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-950/80 via-slate-900 to-slate-950 border-b border-purple-500/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs font-bold text-white uppercase font-mono flex items-center gap-1.5">
            🎯 10M+ Criteo Ad Scoring Engine — Low-Latency REST API Simulator
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-[10px] font-mono">
          AUC 0.9067 · Sub-0.5s
        </span>
      </div>

      <div className="p-5 space-y-4">
        {/* Sample Ad Selector */}
        <div>
          <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold mb-2">
            Select Ad Placement Profile to Evaluate:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {SAMPLE_ADS.map((ad, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={cn(
                  "p-3 rounded-xl border text-left transition-all",
                  selectedIdx === idx
                    ? "bg-purple-600 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    : "bg-slate-950/80 border-white/10 text-slate-300 hover:border-purple-500/40"
                )}
              >
                <div className="text-xs font-bold truncate">{ad.name}</div>
                <div className="text-[10px] opacity-80 mt-1">{ad.device} · {ad.category}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Gauges & Model Output */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950 border border-white/10 font-mono">
          <div className="text-center p-3 rounded-lg bg-slate-900/80 border border-purple-500/20">
            <span className="text-[10px] text-slate-400 uppercase">Predicted CTR</span>
            <div className="text-2xl font-bold text-purple-300 mt-0.5">{active.predictedCTR}</div>
            <span className="text-[10px] text-emerald-400 font-semibold">{active.lift} lift</span>
          </div>

          <div className="text-center p-3 rounded-lg bg-slate-900/80 border border-purple-500/20">
            <span className="text-[10px] text-slate-400 uppercase">Top Decile Ranking</span>
            <div className="text-2xl font-bold text-pink-300 mt-0.5">Top {100 - active.percentile}%</div>
            <span className="text-[10px] text-slate-400">150 features parsed</span>
          </div>

          <div className="text-center p-3 rounded-lg bg-slate-900/80 border border-purple-500/20">
            <span className="text-[10px] text-slate-400 uppercase">Inference Speed</span>
            <div className="text-2xl font-bold text-cyan-300 mt-0.5">24ms</div>
            <span className="text-[10px] text-slate-400">Flask REST Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}
