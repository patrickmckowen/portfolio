"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[720px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="space-y-8"
        >
          {/* Quote Mark */}
          <div className="text-[80px] leading-none text-[rgba(0,0,0,0.15)] font-serif">
            "
          </div>

          {/* Quote Text */}
          <p className="font-serif text-[40px] md:text-[48px] leading-[1.15] tracking-[-0.02em] text-[rgba(0,0,0,0.9)]">
            Patrick helped elevate the work of everyone around him.
          </p>

          {/* Attribution */}
          <p className="text-[18px] text-[rgba(0,0,0,0.5)]">
            VP of Design, Cameo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
