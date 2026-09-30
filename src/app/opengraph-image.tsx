import { ImageResponse } from "next/og";

export const alt = "Venkateswara Sahu — Applied AI & Machine Learning Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ background: "#f1eee5", color: "#181713", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "65px 72px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, borderBottom: "1px solid #aaa396", paddingBottom: 24 }}>
        <span>VENKATESWARA SAHU</span><span style={{ color: "#b9401b" }}>SELECTED WORK</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 82, letterSpacing: "-4px" }}>Make it measurable.</div>
        <div style={{ fontSize: 30 }}>Applied AI & Machine Learning Engineer</div>
        <div style={{ fontSize: 22, color: "#666158" }}>Evaluated systems. Inspectable evidence.</div>
      </div>
      <div style={{ display: "flex", fontSize: 20, borderTop: "1px solid #aaa396", paddingTop: 24 }}>Vigil / F1InsightAI / P&ID Intelligence / CTR Predictor</div>
    </div>, size,
  );
}
