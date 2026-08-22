"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bot, Check, Copy, Mail, MapPin, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 max-w-4xl mx-auto">
      {/* Background Radiant Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-indigo-500/5 to-transparent rounded-3xl blur-3xl pointer-events-none" />

      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          <Mail className="w-6 h-6 text-white" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Let&apos;s Build Something Extraordinary
        </h2>
        <p className="max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          I am actively interviewing for full-time roles in{" "}
          <span className="text-cyan-400 font-semibold">Generative AI Engineering</span>,{" "}
          <span className="text-cyan-400 font-semibold">Agentic Systems</span>, and{" "}
          <span className="text-cyan-400 font-semibold">MLOps</span> in Bengaluru, Hyderabad, Gurugram, and Remote.
        </p>

        {/* Email Copy Card */}
        <div className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-slate-950/80 border border-white/10 mb-8 max-w-md w-full">
          <div className="flex-1 px-4 py-2 text-xs sm:text-sm font-mono text-cyan-300 truncate text-center sm:text-left">
            {PORTFOLIO_DATA.personal.email}
          </div>
          <button
            onClick={copyEmail}
            className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors w-full sm:w-auto"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Copied!" : "Copy Email"}</span>
          </button>
        </div>

        {/* Social Connect Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Opportunity Discussion with Venkateswara Sahu`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all shadow-lg"
          >
            <Send className="w-4 h-4" />
            Send Email
          </a>

          <Link
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-white/10 text-white font-semibold text-xs transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            Connect on LinkedIn
          </Link>

          <Link
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-white/10 text-white font-semibold text-xs transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub Profile
          </Link>
        </div>
      </div>
    </section>
  );
}
