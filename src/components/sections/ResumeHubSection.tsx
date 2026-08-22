"use client";
import React, { useState } from "react";
import { Bot, Check, Copy, Cpu, Download, Eye, FileText, Mail, Sparkles, TrendingUp } from "lucide-react";
import { PORTFOLIO_DATA, ResumeTrack } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ResumeHubSection() {
  const [selectedTrack, setSelectedTrack] = useState<ResumeTrack>(PORTFOLIO_DATA.resumeTracks[0]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getTrackIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot": return <Bot className="w-5 h-5 text-cyan-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-blue-400" />;
      case "Eye": return <Eye className="w-5 h-5 text-emerald-400" />;
      case "TrendingUp": return <TrendingUp className="w-5 h-5 text-purple-400" />;
      default: return <FileText className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="resume-hub" className="relative py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3">
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          Role-Aligned CVs
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Multi-Track Resume Hub
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          Because I tailor my engineering profile for specific Job Descriptions, select the target role track below to view tailored highlights, primary skill alignment, and request or download the matching CV.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Track Selector Tabs */}
        <div className="lg:col-span-5 space-y-3">
          {PORTFOLIO_DATA.resumeTracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track)}
              className={cn(
                "w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4",
                selectedTrack.id === track.id
                  ? "bg-slate-900 border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                  : "bg-slate-950/60 border-white/10 hover:border-white/20 text-slate-400"
              )}
            >
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 mt-0.5">
                {getTrackIcon(track.icon)}
              </div>
              <div className="flex-1">
                <h4 className={cn("text-base font-bold mb-1", selectedTrack.id === track.id ? "text-white" : "text-slate-300")}>
                  {track.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">{track.summary}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Track Detail Card */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                Active Track
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">{selectedTrack.title}</h3>
            </div>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Requesting Tailored Resume - ${encodeURIComponent(selectedTrack.title)}&body=Hi Venkateswara,%0D%0A%0D%0AWe are interested in discussing the ${encodeURIComponent(selectedTrack.title)} role at our company. Please share your latest tailored resume and availability.`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors shadow-lg whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              Request Track Resume
            </a>
          </div>

          <div className="space-y-6">
            {/* Track Summary */}
            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Executive Profile Summary
              </h5>
              <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/70 p-4 rounded-xl border border-white/5">
                {selectedTrack.summary}
              </p>
            </div>

            {/* Target Keywords / Skills */}
            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Primary JD Alignment Keywords
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedTrack.primaryKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 font-medium"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Star Projects for this Track */}
            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Flagship Projects Highlighted in this Track
              </h5>
              <ul className="space-y-2">
                {selectedTrack.highlightProjects.map((proj, pIdx) => (
                  <li key={pIdx} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Email Action */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <span>Have a specific Job Description to align with?</span>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copiedEmail ? "Copied Email!" : PORTFOLIO_DATA.personal.email}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
