"use client";
import React, { useState } from "react";
import { Check, Copy, Download, FileText, Mail, X } from "lucide-react";
import { PORTFOLIO_DATA, ResumeTrack } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTrack, setActiveTrack] = useState<ResumeTrack>(PORTFOLIO_DATA.resumeTracks[0]);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-neutral-950 border border-white/[0.12] p-8 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
            Targeted Applications
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Role-Tailored Resumes
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Choose the engineering track that aligns with your role or Job Description requirements.
          </p>
        </div>

        {/* Track Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {PORTFOLIO_DATA.resumeTracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setActiveTrack(track)}
              className={cn(
                "p-3 rounded-2xl border text-left transition-all cursor-pointer",
                activeTrack.id === track.id
                  ? "bg-white text-black border-white font-semibold shadow-lg scale-102"
                  : "bg-neutral-900/60 border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/20"
              )}
            >
              <div className="text-xs font-semibold line-clamp-2">{track.title}</div>
            </button>
          ))}
        </div>

        {/* Track Details Card */}
        <div className="p-6 rounded-2xl bg-black border border-white/[0.08] space-y-5 mb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
              Track Focus
            </span>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {activeTrack.summary}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1.5">
              Key Alignment Keywords
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeTrack.primaryKeywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2.5 py-0.5 rounded-md bg-neutral-900 border border-white/[0.06] text-xs font-mono text-neutral-300"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1.5">
              Highlighted Star Projects
            </span>
            <ul className="space-y-1">
              {activeTrack.highlightProjects.map((proj, idx) => (
                <li key={idx} className="text-xs text-neutral-400 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-neutral-400" />
                  <span>{proj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <button
            onClick={copyEmail}
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-xs text-neutral-300 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied Email!" : PORTFOLIO_DATA.personal.email}</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Requesting%20${encodeURIComponent(activeTrack.title)}%20Resume&body=Hi%20Venkateswara,%0D%0A%0D%0APlease%20share%20your%20tailored%20resume%20for%20the%20${encodeURIComponent(activeTrack.title)}%20track%20for%20our%20open%20role.`}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs transition-colors shadow-lg cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Request Tailored CV for JD</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
