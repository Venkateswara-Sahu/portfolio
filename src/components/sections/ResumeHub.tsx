"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Copy, Mail, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LuxurySpotlightCard } from "@/components/ui/LuxurySpotlightCard";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ResumeHub({ onOpenResume }: { onOpenResume: () => void }) {
  const [activeTrack, setActiveTrack] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const track = PORTFOLIO_DATA.resumeTracks[activeTrack];

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resumes" className="py-24 px-4 max-w-5xl mx-auto border-t border-white/[0.08]">
      <ScrollReveal>
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
            Tailored Applications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Multi-Track Resume Hub
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            I customize every resume for specific Job Descriptions to highlight relevant architectures across Generative AI, MLOps, Computer Vision, and Predictive ML.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Track Selector Tabs */}
          <div className="md:col-span-4 space-y-2">
            {PORTFOLIO_DATA.resumeTracks.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveTrack(idx)}
                className={cn(
                  "w-full text-left p-4 rounded-2xl border transition-all cursor-pointer",
                  activeTrack === idx
                    ? "bg-white text-black border-white font-semibold shadow-lg scale-102"
                    : "bg-neutral-950 border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/20"
                )}
              >
                <div className="text-xs font-bold">{t.title}</div>
              </button>
            ))}
          </div>

          {/* Active Track Details */}
          <div className="md:col-span-8">
            <LuxurySpotlightCard className="p-8 flex flex-col justify-between space-y-6 h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-neutral-500 uppercase">Track Focus</span>
                  <span className="text-xs font-semibold text-white">{track.title}</span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {track.summary}
                </p>

                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase block mb-2">Target Keywords</span>
                  <div className="flex flex-wrap gap-1.5">
                    {track.primaryKeywords.map((kw) => (
                      <span
                        key={kw}
                        className="px-2.5 py-0.5 rounded-md bg-neutral-900 border border-white/[0.06] text-xs font-mono text-neutral-300"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clean Action Strip */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3 flex-wrap">
                  <Link
                    href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Resume%20/%20JD%20Inquiry%20-%20${encodeURIComponent(track.title)}&body=Hi%20Venkateswara,%0D%0A%0D%0AWe%20reviewed%20your%20portfolio%20and%20would%20like%20to%20request%20your%20tailored%20resume%20for%20the%20${encodeURIComponent(track.title)}%20role.`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-all hover:scale-102 active:scale-98 shadow-md"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Request Tailored CV for JD</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-neutral-900 border border-white/10 text-white text-xs font-mono hover:bg-neutral-800 transition-all cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
                    <span>{copied ? "Email Copied!" : "Copy Email"}</span>
                  </button>
                </div>

                <span className="text-[11px] font-mono text-neutral-500">
                  Customized per JD
                </span>
              </div>
            </LuxurySpotlightCard>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
