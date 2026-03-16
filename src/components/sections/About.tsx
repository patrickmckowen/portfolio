"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "My better half and I", value: "My wife Alena", emoji: "👫" },
  { label: "Hometown", value: "Palo Alto, CA", emoji: "🌳" },
  { label: "Current town", value: "Oakland, CA", emoji: "🌴" },
  { label: "Favorite town", value: "New York City", emoji: "🗽" },
  { label: "Favorite musician", value: "Frank Ocean", emoji: "🎵" },
  { label: "Favorite show", value: "Parts Unknown", emoji: "🎬" },
  { label: "Favorite filmmaker", value: "Stanley Kubrick", emoji: "🎥" },
  { label: "Favorite cuisine", value: "Southeast Asian", emoji: "🍜" },
];

export default function About() {
  return (
    <section id="about" className="dark-section py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="mb-16"
        >
          <h2 className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-[rgba(255,255,255,0.9)] mb-6">
            About
          </h2>
          <p className="text-[20px] leading-[1.5] text-[rgba(255,255,255,0.65)] max-w-[720px]">
            <span className="text-[rgba(255,255,255,0.9)] font-medium">
              Hey, I'm Patrick.
            </span>{" "}
            A digital product designer based in Oakland, CA with 10 years of
            experience.
          </p>
        </motion.div>

        {/* Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="group space-y-2"
            >
              {/* Emoji Card */}
              <div className="aspect-square bg-[rgba(255,255,255,0.05)] rounded-2xl flex items-center justify-center text-5xl border border-[rgba(255,255,255,0.08)]">
                {fact.emoji}
              </div>

              {/* Caption with hover transition */}
              <div className="h-[20px] overflow-hidden relative">
                <p className="absolute inset-x-0 h-[20px] text-[14px] leading-[20px] text-[rgba(255,255,255,0.45)] font-mono transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-[20px]">
                  {fact.label}
                </p>
                <p className="absolute inset-x-0 h-[20px] text-[14px] leading-[20px] text-[rgba(255,255,255,0.45)] font-mono transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] -translate-y-[20px] group-hover:translate-y-0">
                  {fact.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
