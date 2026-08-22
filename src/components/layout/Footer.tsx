"use client";
import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="py-12 px-4 max-w-5xl mx-auto border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
      <div>
        © {new Date().getFullYear()} Venkateswara Sahu · Built with Next.js & Tailwind
      </div>

      <div className="flex items-center gap-6">
        <Link href={PORTFOLIO_DATA.personal.github} target="_blank" className="hover:text-white transition-colors">
          GitHub
        </Link>
        <Link href={PORTFOLIO_DATA.personal.linkedin} target="_blank" className="hover:text-white transition-colors">
          LinkedIn
        </Link>
        <Link href={PORTFOLIO_DATA.personal.huggingface} target="_blank" className="hover:text-white transition-colors">
          HuggingFace
        </Link>
        <Link href={PORTFOLIO_DATA.personal.vigilDocs} target="_blank" className="hover:text-white transition-colors">
          Vigil Docs
        </Link>
      </div>
    </footer>
  );
}
