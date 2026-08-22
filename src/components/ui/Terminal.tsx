"use client";
import React, { useState } from "react";
import { Terminal as TerminalIcon, Copy, Check, Play, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandStep {
  cmd: string;
  output: string[];
  durationMs?: number;
}

const COMMAND_STEPS: CommandStep[] = [
  {
    cmd: "pip install vigil-drift",
    output: [
      "Collecting vigil-drift",
      "  Downloading vigil_drift-0.1.0-py3-none-any.whl (42 kB)",
      "Installing collected packages: torch, kafka-python, airflow-client, vigil-drift",
      "Successfully installed vigil-drift-0.1.0 (Test Coverage: 81%)",
    ],
  },
  {
    cmd: "python -c 'import vigil_drift; detector = vigil_drift.VigilDetector()'",
    output: [
      "[INFO] Initializing Dual Autoencoders: Adaptive A & Frozen A_KC",
      "[INFO] Replicated T-Test configured (r=15, alpha=0.05)",
      "[INFO] Novelty Kernel Density Estimator calibrated on latent space",
      "[READY] Listening for streaming chunks on Kafka topic: 'network-telemetry'",
    ],
  },
  {
    cmd: "vigil detect --stream kafka://localhost:9092/traffic",
    output: [
      "Chunk #104 | Rows: 200 | Drift: NO  | Novelty: 1.2% | Latency: 14ms",
      "Chunk #105 | Rows: 200 | Drift: NO  | Novelty: 2.0% | Latency: 12ms",
      "⚠️ [ALERT] Chunk #106 | Drift: YES | p-value: 0.0018 (Drift Confirmed)",
      "🔍 [DriftAttributor] Top drifting features:",
      "    1. service_eco_i   (delta: +15.3%)",
      "    2. dst_host_rate   (delta: +12.3%)",
      "    3. serror_rate     (delta: +8.7%)",
      "🚀 Triggered Airflow Auto-Retrain DAG via webhook (Run ID: run_20260822_14)",
    ],
  },
];

export function TerminalCLI() {
  const [activeStep, setActiveStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(COMMAND_STEPS[activeStep].cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl border border-cyan-500/20 bg-[#0c121e]/95 backdrop-blur-2xl shadow-2xl overflow-hidden font-mono text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-400 font-sans flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            vigil-drift Interactive CLI Sandbox
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveStep((prev) => (prev + 1) % COMMAND_STEPS.length)}
            className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Next Step"
          >
            <Play className="w-3 h-3 text-cyan-400 fill-cyan-400" />
            Next Command
          </button>
          <button
            onClick={copyCommand}
            className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Copy Command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 space-y-3 min-h-[220px]">
        {/* Step Selector Tabs */}
        <div className="flex gap-2 pb-2 border-b border-white/5 overflow-x-auto text-xs">
          {COMMAND_STEPS.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "px-2.5 py-1 rounded-md transition-all font-sans font-medium whitespace-nowrap",
                activeStep === idx
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                  : "text-slate-400 hover:text-slate-200 bg-slate-900/40"
              )}
            >
              Step {idx + 1}: {step.cmd.split(" ")[0]} {step.cmd.split(" ")[1] || ""}
            </button>
          ))}
        </div>

        {/* Active Command */}
        <div className="flex items-center gap-2 text-cyan-400 font-semibold pt-1">
          <span className="text-slate-500 select-none">$</span>
          <span>{COMMAND_STEPS[activeStep].cmd}</span>
          <span className="w-2 h-4 bg-cyan-400/80 animate-pulse" />
        </div>

        {/* Output */}
        <div className="space-y-1 text-slate-300 text-xs pl-4 border-l-2 border-slate-700/60 pt-1">
          {COMMAND_STEPS[activeStep].output.map((line, lIdx) => (
            <div
              key={lIdx}
              className={cn(
                line.includes("⚠️") || line.includes("ALERT")
                  ? "text-amber-300 font-semibold"
                  : line.includes("Successfully") || line.includes("READY")
                  ? "text-emerald-400"
                  : line.includes("DriftAttributor") || line.includes("Triggered")
                  ? "text-cyan-300 font-semibold"
                  : "text-slate-300"
              )}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
