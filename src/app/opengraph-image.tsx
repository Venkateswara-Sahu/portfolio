import { ImageResponse } from "next/og";

export const alt = "Venkateswara Sahu — AI & MLOps Systems Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "30%",
            width: "600px",
            height: "400px",
            background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(255,255,255,0.03) 50%, transparent 80%)",
            borderRadius: "50%",
          }}
        />

        {/* Top Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#34d399",
            }}
          />
          <span
            style={{
              color: "#a3a3a3",
              fontSize: "20px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Available for AI & MLOps Roles · Bengaluru · Hyderabad · Remote
          </span>
        </div>

        {/* Center Main Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Venkateswara Sahu
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#a3a3a3",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "950px",
            }}
          >
            Engineering Autonomous AI Systems, Zero-Label Drift Monitoring, and High-Scale ML
          </p>
        </div>

        {/* Bottom Key Metric Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 24px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              fontSize: "18px",
              fontFamily: "monospace",
            }}
          >
            pip install vigil-drift (PyPI)
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 24px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#38bdf8",
              fontSize: "18px",
              fontFamily: "monospace",
            }}
          >
            93.3% Drift Precision
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 24px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#34d399",
              fontSize: "18px",
              fontFamily: "monospace",
            }}
          >
            83.3% SQL Acc (TiDB)
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
