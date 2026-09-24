import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Manrope } from "next/font/google";

import { ContactFooter } from "@/components/editorial/ContactFooter";
import { EditorialNav } from "@/components/editorial/EditorialNav";

import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
});

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
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body id="top">
        <EditorialNav />
        {children}
        <ContactFooter />
      </body>
    </html>
  );
}
