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
  title: "Venkateswara Sahu | Applied AI & Machine Learning Engineer",
  description: "Evaluated AI systems, from concept-drift monitoring to Text-to-SQL agents and document intelligence. Explore project evidence, code, and a master resume.",
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
    title: "Venkateswara Sahu | Applied AI & Machine Learning Engineer",
    description: "Evaluated AI systems with evidence you can inspect. Concept drift, Text-to-SQL, document intelligence, and machine learning.",
    url: "https://venkateswara-sahu.vercel.app",
    siteName: "Venkateswara Sahu Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Venkateswara Sahu — Applied AI & Machine Learning Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkateswara Sahu | Applied AI & Machine Learning Engineer",
    description: "Evaluated AI systems with evidence you can inspect. Concept drift, Text-to-SQL, document intelligence, and machine learning.",
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
        <a className="skip-link" href="#main-content">Skip to content</a>
        <EditorialNav />
        {children}
        <ContactFooter />
      </body>
    </html>
  );
}
