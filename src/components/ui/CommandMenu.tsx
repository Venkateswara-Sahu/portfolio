"use client";
import React, { useState } from "react";
import { Bot, Briefcase, Cpu, Download, Eye, FileText, Layers, Mail, Search, Sparkles, Terminal, X, Volume2, VolumeX } from "lucide-react";
import { sound } from "@/lib/sound";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export function CommandMenu({ isOpen, onClose, onOpenResume }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);

  if (!isOpen) return null;

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.enabled = next;
    if (next) sound.playSuccess();
  };

  const navItems = [
    { label: "Launch F1InsightAI (9-Node Text-to-SQL)", href: "#projects", icon: <Bot className="w-4 h-4 text-red-400" /> },
    { label: "Launch Vigil (`vigil-drift` on PyPI)", href: "#projects", icon: <Terminal className="w-4 h-4 text-cyan-400" /> },
    { label: "Launch P&ID Document AI System", href: "#projects", icon: <Eye className="w-4 h-4 text-emerald-400" /> },
    { label: "Launch 10M+ Display Ad CTR Scorer", href: "#projects", icon: <Sparkles className="w-4 h-4 text-purple-400" /> },
    { label: "View Streaming & Agentic Pipelines", href: "#architecture", icon: <Cpu className="w-4 h-4 text-indigo-400" /> },
    { label: "View Technical Arsenal & Toolchain", href: "#skills", icon: <Layers className="w-4 h-4 text-emerald-400" /> },
    { label: "View Experience & Academic Milestones", href: "#experience", icon: <Briefcase className="w-4 h-4 text-rose-400" /> },
    { label: "Open Role-Tailored Resume Hub", action: onOpenResume, icon: <FileText className="w-4 h-4 text-cyan-300" /> },
  ];

  const filtered = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: any) => {
    sound.playClick();
    onClose();
    if (item.action) {
      item.action();
    } else if (item.href) {
      const el = document.querySelector(item.href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-slate-950/80">
          <Search className="w-5 h-5 text-cyan-400" />
          <input
            type="text"
            placeholder="Type to search projects, architectures, resume tracks..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
          />
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title={soundEnabled ? "Sound enabled" : "Sound muted"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-slate-500">
              No matching commands or projects found.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 text-left transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-white/10 group-hover:border-cyan-500/40">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-slate-200 group-hover:text-white font-mono">
                    {item.label}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400">
                  Select ↵
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-950/90 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate: <strong>↑ ↓</strong></span>
          <span>Open: <strong>↵ Enter</strong></span>
          <span>Close: <strong>ESC / Click Outside</strong></span>
        </div>
      </div>
    </div>
  );
}
