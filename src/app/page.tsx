"use client";
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { ResumeHub } from "@/components/sections/ResumeHub";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function HomePage() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Smooth scroll progress tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen bg-black text-slate-100 selection:bg-white selection:text-black">
      {/* Top Hairline Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neutral-500 via-white to-neutral-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Minimalist Floating Header */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Grand Display Hero */}
      <Hero onOpenResume={() => setResumeModalOpen(true)} />

      {/* Quantitative Benchmarks Strip */}
      <Metrics />

      {/* Full-Width Cinematic Case Studies with Interactive Architecture Drawers */}
      <Projects />

      {/* Core Technical Arsenal */}
      <Skills />

      {/* Verified Journey & Milestones */}
      <Experience />

      {/* Role-Aligned Resume Hub */}
      <ResumeHub onOpenResume={() => setResumeModalOpen(true)} />

      {/* Direct Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Luxury Obsidian Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Floating Jump to Top Pill */}
      <ScrollToTop />
    </main>
  );
}
