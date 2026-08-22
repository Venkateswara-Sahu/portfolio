import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venkateswara Sahu | AI & MLOps Systems Engineer",
  description: "Engineering autonomous AI systems, zero-label drift monitoring, and high-scale ML. B.Tech (Hons.) in CSE (Data Science & Data Engineering) @ LPU (CGPA 8.38). Creator of 'vigil-drift' on PyPI.",
  keywords: [
    "Venkateswara Sahu",
    "Generative AI Engineer",
    "MLOps Engineer",
    "LangGraph",
    "RAG",
    "vigil-drift",
    "PyPI",
    "Computer Vision",
    "YOLOv8",
    "Kafka",
    "Airflow",
    "TiDB Cloud"
  ],
  authors: [{ name: "Venkateswara Sahu", url: "https://github.com/Venkateswara-Sahu" }],
  openGraph: {
    title: "Venkateswara Sahu | AI & MLOps Systems Engineer",
    description: "Engineering autonomous AI systems, zero-label drift monitoring, and high-scale ML.",
    url: "https://github.com/Venkateswara-Sahu",
    siteName: "Venkateswara Sahu Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-slate-100 min-h-screen selection:bg-white selection:text-black antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
