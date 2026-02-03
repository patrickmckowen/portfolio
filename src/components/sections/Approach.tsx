"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Start together.",
    description:
      "Products are best created collaboratively, with iterative feedback from teammates.",
  },
  {
    number: "02",
    title: "Talk to customers.",
    description:
      "The best way to find product-market-fit is to deeply understand the people you are building for.",
  },
  {
    number: "03",
    title: "Think in systems.",
    description:
      "Understanding the big picture helps to design solutions that address the root problem.",
  },
  {
    number: "04",
    title: "Tackle risks early.",
    description:
      "Discover asap if customers find your idea valuable and usable, if it's feasible to build, and viable to maintain.",
  },
  {
    number: "05",
    title: "Focus on impact.",
    description:
      "It's not about implementing features, it's about solving problems for people and delivering measurable results.",
  },
  {
    number: "06",
    title: "Stay curious.",
    description:
      "Continuous learning, and keeping an open mind, are the foundational elements for growth.",
  },
];

export default function Approach() {
  return (
    <section className="dark-section py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-[rgba(255,255,255,0.9)] mb-16"
        >
          Approach
        </motion.h2>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="space-y-4"
            >
              {/* Number */}
              <div className="text-[14px] text-[rgba(255,255,255,0.35)] font-mono">
                {principle.number}
              </div>

              {/* Title */}
              <h3 className="text-[24px] font-semibold text-[rgba(255,255,255,0.9)] tracking-[-0.01em]">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-[1.6] text-[rgba(255,255,255,0.5)]">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
