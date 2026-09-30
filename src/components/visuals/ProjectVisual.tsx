import { useId } from "react";
import type { ProjectVisual as VisualKind } from "@/data/portfolio";

const mobileSteps: Record<VisualKind, string[]> = {
  vigil: ["Input stream", "Frozen baseline + adaptive model", "Compare reconstruction errors", "Statistical tests → feature ranking"],
  f1: ["Natural-language question", "Retrieve schema → generate SQL", "Validate + execute in TiDB", "Reflect on errors → answer + SQL"],
  pid: ["Drawing → symbols + text", "Detect symbols + targeted OCR", "Associate tags in a spatial graph", "Validate → review MTO records"],
  ctr: ["39 raw numeric + categorical fields", "150 engineered features", "Tune XGBoost + LightGBM", "Compare offline ranking → score"],
};

function Box({ x, y, width = 156, label, detail }: { x: number; y: number; width?: number; label: string; detail: string }) {
  return <g><rect x={x} y={y} width={width} height="66" rx="2" fill="#26251f" stroke="#827b6d" /><text x={x + 16} y={y + 27} fill="#f1eee5" fontSize="17">{label}</text><text x={x + 16} y={y + 49} fill="#bcb6a9" fontSize="12">{detail}</text></g>;
}

export function ProjectVisual({ visual, title }: { visual: VisualKind; title: string }) {
  const gridId = useId();
  return <figure className={`system-visual system-visual--${visual}`}>
    <svg viewBox="0 0 640 290" role="img" aria-label={`${title} system schematic`}>
      <defs><pattern id={gridId} width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#ffffff" strokeOpacity=".045" /></pattern></defs>
      <rect width="640" height="290" fill={`url(#${gridId})`} />
      {visual === "vigil" && <>
        <text x="32" y="35" className="diagram-kicker">TWO VIEWS OF A CHANGING STREAM</text>
        <path d="M32 153H67L79 134L90 171L102 143L116 154H145M145 154V92H210M145 154V216H210M380 92H428V153H454M380 216H428V153" className="diagram-line" />
        <Box x={210} y={59} width={170} label="Frozen baseline" detail="Reference behavior" />
        <Box x={210} y={183} width={170} label="Adaptive model" detail="Current behavior" />
        <Box x={454} y={120} label="Error comparison" detail="Tests → feature ranking" />
        <text x="32" y="190" fill="#bcb6a9" fontSize="14">Input stream</text>
      </>}
      {visual === "f1" && <>
        <text x="32" y="35" className="diagram-kicker">A QUESTION BECOMES A QUERY</text>
        <Box x={32} y={70} label="Question" detail="Natural language" />
        <Box x={242} y={70} label="Schema retrieval" detail="FAISS · focused context" />
        <Box x={452} y={70} label="SQL generation" detail="Read-only validation" />
        <path d="M188 103H242M398 103H452M530 136V195H398M242 228H188M320 195V159H530" className="diagram-line" />
        <Box x={242} y={195} label="Execute & reflect" detail="TiDB · error-guided retry" />
        <Box x={32} y={195} label="Answer + SQL" detail="Inspectable output" />
        <text x="408" y="185" fill="#bcb6a9" fontSize="12">On execution error</text>
      </>}
      {visual === "pid" && <>
        <text x="32" y="35" className="diagram-kicker">FROM DRAWING TO REVIEWABLE RECORDS</text>
        <path d="M35 135H80M120 135H166V204H222M100 115V89H195M260 150H311M461 150H506" className="diagram-line" />
        <circle cx="100" cy="135" r="20" fill="none" stroke="#f1eee5" /><path d="m89 148 23-13-23-13Z" fill="none" stroke="#f1eee5" />
        <rect x="68" y="104" width="64" height="64" fill="none" stroke="#e99270" strokeDasharray="5 4" />
        <text x="70" y="92" fill="#f1eee5" fontSize="13">P-101</text>
        <rect x="149" y="188" width="82" height="33" fill="none" stroke="#e99270" strokeDasharray="5 4" /><text x="160" y="210" fill="#f1eee5" fontSize="13">TAG OCR</text>
        <Box x={311} y={117} width={150} label="Spatial graph" detail="Symbols + tags" />
        <rect x="506" y="91" width="101" height="129" fill="#26251f" stroke="#827b6d" />
        <path d="M506 120H607M506 148H607M506 177H607M548 120V220" stroke="#827b6d" fill="none" />
        <text x="520" y="111" fill="#f1eee5" fontSize="14">MTO</text>
        <text x="33" y="258" fill="#bcb6a9" fontSize="13">Detect + read</text><text x="313" y="258" fill="#bcb6a9" fontSize="13">Associate + validate</text><text x="508" y="258" fill="#bcb6a9" fontSize="13">Review</text>
      </>}
      {visual === "ctr" && <>
        <text x="32" y="35" className="diagram-kicker">ONE FEATURE PIPELINE, TWO MODELS</text>
        <Box x={32} y={111} width={160} label="39 raw fields" detail="Numeric + categorical" />
        <Box x={241} y={53} label="XGBoost" detail="Optuna tuning" /><Box x={241} y={185} label="LightGBM" detail="Comparison baseline" />
        <path d="M192 144H214V86H241M214 144V218H241M397 86H426V144H465M397 218H426V144" className="diagram-line" />
        <Box x={465} y={111} width={145} label="Offline ranking" detail="AUC · log loss · lift" />
      </>}
    </svg>
    <ol className="system-visual__mobile">{mobileSteps[visual].map((step) => <li key={step}>{step}</li>)}</ol>
    <figcaption>Illustrative architecture · not measured telemetry</figcaption>
  </figure>;
}
