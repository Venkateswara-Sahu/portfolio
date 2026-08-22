"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar({ onOpenResume }: { onOpenResume: () => void }) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If user is at or near the top, nothing glows (clean default state)
      if (window.scrollY < 300) {
        setActiveSection("");
        return;
      }

      const sections = ["work", "stack", "experience", "resumes", "contact"];
      const scrollPos = window.scrollY + 220; // 220px offset for natural viewing trigger

      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = id;
            break;
          }
        }
      }

      // If scrolled to bottom of document, activate contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work", id: "work" },
    { name: "Capabilities", href: "#stack", id: "stack" },
    { name: "Journey", href: "#experience", id: "experience" },
    { name: "Resumes", href: "#resumes", id: "resumes" },
    { name: "Contact", href: "#contact", id: "contact" },
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

        {/* Desktop Nav with Real-Time Active Section Glow */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-3.5 py-1 text-xs transition-all rounded-full cursor-pointer select-none",
                  isActive
                    ? "text-white font-semibold bg-white/12 border border-white/20 shadow-[0_0_16px_rgba(255,255,255,0.15)] scale-102"
                    : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
                )}
              >
                {link.name}
              </a>
            );
          })}
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-2 p-4 rounded-3xl bg-neutral-950/95 border border-white/10 backdrop-blur-2xl pointer-events-auto space-y-2 max-w-sm mx-auto shadow-2xl"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-2.5 rounded-2xl text-xs transition-colors",
                  isActive
                    ? "bg-white/15 text-white font-semibold border border-white/20"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </a>
            );
          })}
        </motion.div>
      )}
    </header>
  );
}
