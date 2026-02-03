"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Patrick helped elevate the work of everyone around him.",
    highlight:
      "His thoughtful approach to design and exceptional communication skills made complex projects feel simple.",
    name: "Jason Culbertson",
    title: "VP of Design",
  },
  {
    quote:
      "Patrick's deep commitment to understanding our customers led to some of our most valuable insights, and",
    highlight: "his collaborative spirit makes him a joy to work with.",
    name: "Prajit Gopal",
    title: "Head of Product",
  },
  {
    quote:
      "Patrick's ability to connect the dots across multiple projects",
    highlight:
      "and deliver thoughtful, impactful results makes him an invaluable asset to any team.",
    name: "Nikki Bodnar",
    title: "VP of Design",
  },
  {
    quote: "I learned so much from Patrick's design process;",
    highlight: "he really made me a better designer.",
    description: "He also gives the best feedback on projects.",
    name: "Colin Zyrek",
    title: "Senior Product Designer",
  },
  {
    quote:
      "Patrick is unnaturally good at asking first-principle questions",
    highlight:
      "to ensure his team are on the right path. He is an incredible designer, a diligent student of product development, and a wonderful human being.",
    name: "Prescott Rynewicz",
    title: "Engineering Manager",
  },
  {
    quote:
      "Patrick is a skilled designer who asks thoughtful questions, leads with grace, and always has valuable critique to offer.",
    highlight:
      "He chases excellence in all that he does and makes everyone around him better.",
    name: "Ali Forrest",
    title: "Content Designer",
  },
];

export default function Praise() {
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
          Praise
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="space-y-6"
            >
              {/* Quote Mark */}
              <div className="text-[64px] leading-none text-[rgba(255,255,255,0.15)] font-serif">
                "
              </div>

              {/* Quote Content */}
              <p className="text-[18px] leading-[1.6] text-[rgba(255,255,255,0.5)]">
                {testimonial.quote}{" "}
                <span className="text-[rgba(255,255,255,0.9)] font-medium">
                  {testimonial.highlight}
                </span>
                {testimonial.description && ` ${testimonial.description}`}
              </p>

              {/* Attribution */}
              <div className="pt-2">
                <p className="text-[16px] text-[rgba(255,255,255,0.9)] font-medium">
                  {testimonial.name}
                </p>
                <p className="text-[14px] text-[rgba(255,255,255,0.45)]">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
