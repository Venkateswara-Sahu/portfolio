"use client";
import React, { useState } from "react";
import { Bot, Check, Play, RefreshCw, Sparkles, Database, Code, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SampleQuery {
  prompt: string;
  sql: string;
  mrrScore: string;
  latency: string;
  chartData: { label: string; value: number }[];
}

const SAMPLE_QUERIES: SampleQuery[] = [
  {
    prompt: "Who had the most pole positions in the 2023 season?",
    sql: `SELECT d.forename, d.surname, COUNT(*) as pole_positions
FROM qualifying q
JOIN drivers d ON q.driverId = d.driverId
JOIN races r ON q.raceId = r.raceId
WHERE r.year = 2023 AND q.position = 1
GROUP BY d.driverId
ORDER BY pole_positions DESC
LIMIT 5;`,
    mrrScore: "0.89",
    latency: "340ms",
    chartData: [
      { label: "Verstappen", value: 12 },
      { label: "Leclerc", value: 5 },
      { label: "Sainz", value: 2 },
      { label: "Perez", value: 2 },
      { label: "Hamilton", value: 1 },
    ],
  },
  {
    prompt: "Top 4 fastest pitstops recorded in Monza history?",
    sql: `SELECT d.surname, c.name as constructor, p.duration, r.year
FROM pit_stops p
JOIN races r ON p.raceId = r.raceId
JOIN drivers d ON p.driverId = d.driverId
JOIN results res ON (res.raceId = r.raceId AND res.driverId = d.driverId)
JOIN constructors c ON res.constructorId = c.constructorId
WHERE r.name LIKE '%Italian Grand Prix%'
ORDER BY CAST(p.duration AS DECIMAL(5,2)) ASC
LIMIT 4;`,
    mrrScore: "0.94",
    latency: "280ms",
    chartData: [
      { label: "McLaren (1.80s)", value: 1.8 },
      { label: "Red Bull (1.92s)", value: 1.92 },
      { label: "Ferrari (2.05s)", value: 2.05 },
      { label: "Mercedes (2.12s)", value: 2.12 },
    ],
  },
];

export function F1InteractiveSimulator() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [executing, setExecuting] = useState(false);

  const handleSelect = (idx: number) => {
    setExecuting(true);
    setSelectedIdx(idx);
    setTimeout(() => setExecuting(false), 300);
  };

  const active = SAMPLE_QUERIES[selectedIdx];

  return (
    <div className="w-full rounded-2xl bg-[#0b0f19] border border-red-500/30 overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.15)] font-sans">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-red-950/80 via-slate-900 to-slate-950 border-b border-red-500/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-bold text-white tracking-wide uppercase font-mono flex items-center gap-1.5">
            🏎️ F1InsightAI — Live 9-Node LangGraph Execution Simulator
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-[10px] font-mono">
            TiDB Cloud (700K+ rows)
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Sample Prompt Selector Pills */}
        <div>
          <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold mb-2">
            Click a Natural Language Question to Test:
          </div>
          <div className="flex flex-wrap gap-2">
            {SAMPLE_QUERIES.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-medium transition-all text-left flex items-center gap-2",
                  selectedIdx === idx
                    ? "bg-red-500 text-white font-semibold shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                    : "bg-slate-900 border border-white/10 text-slate-300 hover:border-red-500/40"
                )}
              >
                <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
                <span>&quot;{q.prompt}&quot;</span>
              </button>
            ))}
          </div>
        </div>

        {/* Live LangGraph State & Generated SQL */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          {/* SQL Code Box */}
          <div className="md:col-span-7 rounded-xl bg-slate-950 p-4 border border-white/10 font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Code className="w-3.5 h-3.5" /> Generated SQL (Groq 120B)
              </span>
              <span className="text-emerald-400 font-semibold">✓ Reflection Passed (0 errors)</span>
            </div>
            <pre className="text-cyan-300 overflow-x-auto p-2 rounded bg-slate-900/60 leading-relaxed">
              {active.sql}
            </pre>
            <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 font-mono">
              <span>Schema MRR Score: <strong className="text-amber-400">{active.mrrScore}</strong></span>
              <span>Execution Time: <strong className="text-cyan-400">{active.latency}</strong></span>
            </div>
          </div>

          {/* Real-time Telemetry Visualization */}
          <div className="md:col-span-5 rounded-xl bg-slate-950 p-4 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400 mb-3">
              <span className="flex items-center gap-1.5 text-red-400 font-bold">
                <BarChart3 className="w-3.5 h-3.5" /> Auto-Generated Telemetry Chart
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Chart.js</span>
            </div>

            <div className="space-y-2.5">
              {active.chartData.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-200">
                    <span>{item.label}</span>
                    <span className="font-mono text-cyan-300">{item.value}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 transition-all duration-500"
                      style={{
                        width: `${(item.value / Math.max(...active.chartData.map((d) => d.value))) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
