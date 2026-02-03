"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Background() {
  return (
    <section className="dark-section py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-[rgba(255,255,255,0.9)] mb-12"
        >
          Background
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          className="space-y-6 text-[18px] leading-[1.65] text-[rgba(255,255,255,0.65)]"
        >
          <p>
            <span className="text-[rgba(255,255,255,0.9)] font-medium">
              I'm a self-taught designer with an insatiable curiosity about
              people and technology.
            </span>{" "}
            I have business acumen, use system thinking to solve ambiguous
            problems, and find joy in the pursuit of craft.
          </p>

          <p>
            Most recently, I led design on a new B2B marketing platform for the
            unicorn startup Cameo. I also led their design system team and
            helped with the creator app.
          </p>

          <p>
            Previously, I established the first design and product management
            teams at JDRF, a fundraising and support organization for Type 1
            Diabetes. I served in a player-coach role, designing their consumer
            products while managing a group of designers and product managers.
          </p>

          <p>
            I'm a life-long learner, currently learning new prototyping tools
            (Origami Studio, Rive), code (SwiftUI, React), and how to be more
            productive with generative AI.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-wrap gap-4 mt-12"
        >
          <a
            href="https://www.read.cv/patrickmckowen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.9)] rounded-full transition-all text-[15px] font-medium border border-[rgba(255,255,255,0.08)]"
          >
            Resume <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/pmckowen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.9)] rounded-full transition-all text-[15px] font-medium border border-[rgba(255,255,255,0.08)]"
          >
            LinkedIn <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
