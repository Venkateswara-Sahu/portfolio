"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar({ onOpenResume }: { onOpenResume: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Capabilities", href: "#stack" },
    { name: "Journey", href: "#experience" },
    { name: "Resumes", href: "#resumes" },
    { name: "Contact", href: "#contact" },
  ];

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.pushState("", document.title, window.location.pathname);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3.5 pointer-events-none">
      {/* Unified Luxury Frosted Floating Island */}
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2 rounded-full bg-black/85 border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] pointer-events-auto transition-all">
        {/* Brand Logo with Smooth Scroll to Top */}
        <button
          onClick={handleBrandClick}
          className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-xs tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            Venkateswara Sahu
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-all hover:scale-102 active:scale-98 shadow-md cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <Link
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-white/10 text-neutral-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-sm mx-auto mt-2 p-4 rounded-2xl bg-neutral-950/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-2 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
            <Link href={PORTFOLIO_DATA.personal.github} target="_blank" className="hover:text-white">GitHub ↗</Link>
            <Link href={PORTFOLIO_DATA.personal.linkedin} target="_blank" className="hover:text-white">LinkedIn ↗</Link>
            <Link href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-white">Email ↗</Link>
          </div>
        </div>
      )}
    </header>
  );
}
