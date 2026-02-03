"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-32 relative gradient-bg"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="relative max-w-[560px] mx-auto text-center"
      >
        <div className="glass-card rounded-3xl p-12 md:p-16">
          {/* Section Header */}
          <h2 className="font-serif text-[48px] md:text-[56px] leading-[1.1] tracking-[-0.02em] text-[rgba(0,0,0,0.9)] mb-6">
            Contact
          </h2>

          {/* Description */}
          <p className="text-[18px] leading-[1.5] text-[rgba(0,0,0,0.65)] mb-10">
            Interested in working together? Send me an email at{" "}
            <a
              href="mailto:patrick.mckowen@gmail.com"
              className="text-[#0099ff] hover:underline font-medium"
            >
              patrick.mckowen@gmail.com
            </a>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="mailto:patrick.mckowen@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-[rgba(0,0,0,0.9)] rounded-full transition-all text-[15px] font-medium shadow-sm border border-[rgba(0,0,0,0.08)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pmckowen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-[rgba(0,0,0,0.9)] rounded-full transition-all text-[15px] font-medium shadow-sm border border-[rgba(0,0,0,0.08)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
