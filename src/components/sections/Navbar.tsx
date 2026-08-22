"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bot, FileText, Menu, Search, Terminal, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { sound } from "@/lib/sound";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar({
  onOpenResumeModal,
  onOpenCommandMenu,
}: {
  onOpenResumeModal: () => void;
  onOpenCommandMenu: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Console", href: "#hero" },
    { name: "Workbenches", href: "#projects" },
    { name: "Pipelines", href: "#architecture" },
    { name: "Arsenal", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Resume Hub", href: "#resume-hub" },
    { name: "Connect", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sound.playClick();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 py-3.5",
        scrolled ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-white tracking-tight flex items-center gap-1.5 font-mono">
              Venkateswara Sahu
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Kernel Active" />
            </span>
            <span className="text-[10px] text-cyan-400 font-mono">AI Systems Lab | v2.4</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-1 text-xs font-mono font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Cmd+K Quick Launcher Button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenCommandMenu();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-white/15 text-slate-300 text-xs font-mono hover:border-cyan-400 hover:text-white transition-colors cursor-pointer"
            title="Press Ctrl+K or Cmd+K to launch"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-cyan-300">Ctrl+K</kbd>
          </button>

          <button
            onClick={() => {
              sound.playSuccess();
              onOpenResumeModal();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume Tracks
          </button>

          <Link
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </Link>

          <Link
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 rounded-2xl bg-slate-950/95 border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 rounded-lg cursor-pointer font-mono"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs"
            >
              <FileText className="w-4 h-4" />
              Role Resumes
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
