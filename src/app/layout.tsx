import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://venkateswara-sahu.vercel.app"),
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
    description: "Engineering autonomous AI systems, zero-label drift monitoring, and high-scale ML. Creator of 'vigil-drift' on PyPI.",
    url: "https://venkateswara-sahu.vercel.app",
    siteName: "Venkateswara Sahu Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Venkateswara Sahu — AI & MLOps Systems Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkateswara Sahu | AI & MLOps Systems Engineer",
    description: "Engineering autonomous AI systems, zero-label drift monitoring, and high-scale ML. Creator of 'vigil-drift' on PyPI.",
    images: ["/opengraph-image"],
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
