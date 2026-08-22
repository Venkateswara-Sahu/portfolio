"use client";
import React from "react";
import Link from "next/link";
import { Bot, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-4 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            <Bot className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-white">Venkateswara Sahu</span>
          <span className="text-slate-600">|</span>
          <span className="font-mono text-slate-500">&quot;The best way to predict the future is to build it.&quot;</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#hero" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition-colors">Star Projects</Link>
          <Link href="#resume-hub" className="hover:text-cyan-400 transition-colors">Resume Hub</Link>
          <Link href={PORTFOLIO_DATA.personal.github} target="_blank" className="hover:text-white transition-colors">GitHub</Link>
          <Link href={PORTFOLIO_DATA.personal.linkedin} target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
