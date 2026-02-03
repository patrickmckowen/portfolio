"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        className="max-w-[1040px] mx-auto pt-11"
      >
        <h1 className="font-serif text-[56px] md:text-[72px] lg:text-[88px] leading-[1.05] tracking-[-0.02em] text-balance">
          <span className="text-[rgba(0,0,0,0.9)]">Hi there, I'm Patrick</span>
          <span className="text-[rgba(0,0,0,0.9)]">—</span>
          <span className="text-[rgba(0,0,0,0.5)]">a product designer working to uplift people with humane technology.</span>
        </h1>
      </motion.div>
    </section>
  );
}
