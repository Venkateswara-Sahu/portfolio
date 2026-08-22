"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Check, Copy, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LuxurySpotlightCard } from "@/components/ui/LuxurySpotlightCard";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto border-t border-white/[0.08]">
      <ScrollReveal>
        <LuxurySpotlightCard className="p-8 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              Direct Channel
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Let&apos;s build something exceptional.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              I am actively interviewing for full-time engineering roles in Bengaluru, Hyderabad, Gurugram, and Remote. Reach out directly or grab my resume.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all hover:scale-102 active:scale-98 shadow-lg cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Email Copied!" : "Copy Email"}</span>
            </button>

            <Link
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all hover:scale-102 active:scale-98"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span>Send Email Directly</span>
            </Link>
          </div>
        </LuxurySpotlightCard>
      </ScrollReveal>
    </section>
  );
}
