"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show when scrolled down more than 400px
      if (currentScrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900/90 hover:bg-white text-neutral-300 hover:text-black border border-white/10 hover:border-white text-xs font-mono font-medium backdrop-blur-xl shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer group"
          title="Jump to Top"
        >
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          <span>Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
