"use client";
import React from "react";
import Link from "next/link";
import { Bot, Briefcase, Cpu, FileText, Home, Layers, Mail, Sparkles, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function FloatingDock({ onOpenResume }: { onOpenResume: () => void }) {
  const dockItems = [
    { label: "Home", href: "#hero", icon: <Home className="w-5 h-5 text-cyan-400" /> },
    { label: "Star Projects", href: "#projects", icon: <Sparkles className="w-5 h-5 text-amber-400" /> },
    { label: "Pipelines", href: "#architecture", icon: <Cpu className="w-5 h-5 text-indigo-400" /> },
    { label: "Tech Stack", href: "#skills", icon: <Layers className="w-5 h-5 text-emerald-400" /> },
    { label: "Experience", href: "#experience", icon: <Briefcase className="w-5 h-5 text-rose-400" /> },
    { label: "Resumes", action: onOpenResume, icon: <FileText className="w-5 h-5 text-purple-400" /> },
    { label: "GitHub", href: PORTFOLIO_DATA.personal.github, external: true, icon: <GithubIcon className="w-5 h-5 text-white" /> },
    { label: "LinkedIn", href: PORTFOLIO_DATA.personal.linkedin, external: true, icon: <LinkedinIcon className="w-5 h-5 text-blue-400" /> },
    { label: "Contact", href: "#contact", icon: <Mail className="w-5 h-5 text-pink-400" /> },
  ];

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-950/80 border border-white/20 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-cyan-500/40 transition-all">
        {dockItems.map((item, idx) => {
          if (item.action) {
            return (
              <button
                key={idx}
                onClick={item.action}
                className="group relative p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 hover:scale-125 transition-all duration-200"
                title={item.label}
              >
                {item.icon}
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-slate-900 border border-white/10 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                  {item.label}
                </span>
              </button>
            );
          }

          if (item.external) {
            return (
              <Link
                key={idx}
                href={item.href!}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 hover:scale-125 transition-all duration-200"
                title={item.label}
              >
                {item.icon}
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-slate-900 border border-white/10 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <a
              key={idx}
              href={item.href!}
              onClick={(e) => handleScroll(e, item.href!)}
              className="group relative p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 hover:scale-125 transition-all duration-200 cursor-pointer"
              title={item.label}
            >
              {item.icon}
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-slate-900 border border-white/10 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
