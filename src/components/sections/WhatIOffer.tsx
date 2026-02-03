"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Palette,
  MousePointer,
  Map,
  Beaker,
  MessageSquare,
  Users,
  BookOpen,
} from "lucide-react";

const offerings = [
  { icon: Compass, label: "Strategy" },
  { icon: Palette, label: "Visual Design" },
  { icon: MousePointer, label: "Prototyping" },
  { icon: Map, label: "UX Design" },
  { icon: Beaker, label: "0-to-1 Projects" },
  { icon: MessageSquare, label: "User Research" },
  { icon: Users, label: "Mentoring" },
  { icon: BookOpen, label: "Design Systems" },
];

export default function WhatIOffer() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-center mb-16 text-[rgba(0,0,0,0.9)]"
        >
          What I offer
        </motion.h2>

        {/* Offering Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {offerings.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="glass-card rounded-lg p-4 flex flex-col gap-8"
            >
              <item.icon
                className="w-6 h-6 text-[rgba(0,0,0,0.75)]"
                strokeWidth={1.5}
              />
              <p className="text-[20px] tracking-[-0.01em] text-[rgba(0,0,0,0.9)]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
