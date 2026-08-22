"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-center pt-36 pb-20 px-4 max-w-5xl mx-auto">
      {/* Ambient Atmospheric Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-white/[0.04] via-cyan-500/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Staggered Content Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        {/* Availability Strip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-400 text-xs font-mono w-fit hover:border-white/20 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for full-time roles in Bengaluru, Hyderabad, Gurugram & Remote</span>
        </div>

        {/* Grand Display Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
          Engineering autonomous AI systems, zero-label drift monitoring, and high-scale ML.
        </h1>

        {/* Clear Subtitle with Exact Degree Specialization */}
        <p className="text-base sm:text-xl text-neutral-400 leading-relaxed max-w-3xl font-normal">
          I&apos;m <strong className="text-white font-medium">Venkateswara Sahu</strong> — B.Tech (Hons.) in CSE (Data Science & Data Engineering) at Lovely Professional University (CGPA 8.38). Creator of <span className="text-white font-mono font-medium">`vigil-drift`</span> on PyPI, author of 9-node LangGraph self-correcting RAG architectures, and recipient of ₹1,00,000 university seed funding.
        </p>

        {/* Action Strip */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all hover:scale-102 active:scale-98 shadow-lg cursor-pointer"
          >
            <span>View Selected Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-white/15 text-neutral-200 font-semibold text-xs uppercase tracking-wider hover:bg-neutral-800 hover:text-white transition-all hover:scale-102 active:scale-98 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-400" />
            <span>Role Resumes</span>
          </button>

          <Link
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-neutral-400 hover:text-white text-xs font-medium transition-colors hover:translate-x-0.5"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
