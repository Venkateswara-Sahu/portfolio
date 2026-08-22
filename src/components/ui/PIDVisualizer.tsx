"use client";
import React, { useState } from "react";
import { Eye, Layers, Search, Cpu, CheckCircle2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const DETECTED_SYMBOLS = [
  { id: "1", tag: "FV-101", type: "Control Valve", conf: "98.4%", bbox: "top-10 left-12", color: "border-emerald-400 bg-emerald-500/20 text-emerald-300" },
  { id: "2", tag: "PT-202", type: "Pressure Transmitter", conf: "97.1%", bbox: "top-28 left-64", color: "border-cyan-400 bg-cyan-500/20 text-cyan-300" },
  { id: "3", tag: "P-1001", type: "Centrifugal Pump", conf: "99.2%", bbox: "top-48 left-36", color: "border-purple-400 bg-purple-500/20 text-purple-300" },
  { id: "4", tag: "6\"-PA-101", type: "Piping Line Spec", conf: "96.5%", bbox: "top-20 left-48", color: "border-amber-400 bg-amber-500/20 text-amber-300" },
];

export function PIDVisualizer() {
  const [activeSymbol, setActiveSymbol] = useState(DETECTED_SYMBOLS[0]);

  return (
    <div className="w-full rounded-2xl bg-[#09111e] border border-emerald-500/30 overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.15)] font-sans">
      {/* Blueprint Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border-b border-emerald-500/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-white uppercase font-mono flex items-center gap-1.5">
            🏗️ P&ID Document Intelligence — Real-time Spatial Graph & Tag Extraction
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono">
            CC-OCR (~7s vs 360s) 50x Fast
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Blueprint Canvas Grid */}
        <div className="relative h-44 rounded-xl bg-slate-950 border border-emerald-500/20 overflow-hidden p-4 bg-[linear-gradient(to_right,#064e3b15_1px,transparent_1px),linear-gradient(to_bottom,#064e3b15_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]">
          {/* Simulated Pipe Lines */}
          <div className="absolute top-16 left-8 right-8 h-1 bg-slate-700/60" />
          <div className="absolute top-36 left-20 right-20 h-1 bg-slate-700/60" />
          <div className="absolute top-16 bottom-16 left-32 w-1 bg-slate-700/60" />
          <div className="absolute top-16 bottom-16 left-72 w-1 bg-slate-700/60" />

          {/* Interactive Bounding Boxes */}
          {DETECTED_SYMBOLS.map((sym) => (
            <button
              key={sym.id}
              onClick={() => setActiveSymbol(sym)}
              className={cn(
                "absolute px-2.5 py-1 rounded-md border text-xs font-mono font-bold transition-all transform hover:scale-105 cursor-pointer shadow-lg",
                sym.bbox,
                sym.color,
                activeSymbol.id === sym.id ? "ring-2 ring-white scale-110" : "opacity-80"
              )}
            >
              {sym.tag}
            </button>
          ))}
        </div>

        {/* Selected Symbol Inspector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs">
          <div>
            <span className="text-[10px] text-slate-500 uppercase">Tag Identifier</span>
            <div className="font-bold text-emerald-300">{activeSymbol.tag}</div>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase">Component Type</span>
            <div className="font-bold text-slate-200">{activeSymbol.type}</div>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase">Detection Model</span>
            <div className="font-bold text-cyan-300">YOLOv8s ({activeSymbol.conf})</div>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase">Graph Node</span>
            <div className="font-bold text-purple-300">NetworkX Spatial</div>
          </div>
        </div>
      </div>
    </div>
  );
}
