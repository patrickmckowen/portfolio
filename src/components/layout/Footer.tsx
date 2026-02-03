"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-6 text-center gradient-bg">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        {/* Signature Emoji */}
        <div className="text-4xl">✍️</div>

        {/* Sign Off Text */}
        <p className="text-[14px] text-[rgba(0,0,0,0.5)] font-mono">
          Thanks for stopping by!
        </p>

        {/* Copyright */}
        <p className="text-[12px] text-[rgba(0,0,0,0.35)] pt-4">
          © {new Date().getFullYear()} Patrick McKowen
        </p>
      </motion.div>
    </footer>
  );
}
