"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Connecting brands and star creators with Cameo for Business.",
    link: "/cameo-licensing",
    image: "/images/projects/C4B Home thumb 4x3.png",
    icon: "/images/projects/Cameo App Icon.png",
  },
  {
    title: "Fundraising tools to change the world with JDRF International.",
    link: "/jdrf-fundraising",
    image: "/images/projects/Edit Story Thumb.png",
    icon: "/images/projects/JDRF App Icon.png",
  },
];

export default function ProjectCards() {
  return (
    <section id="work" className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.33, 1, 0.68, 1],
            }}
            whileHover={{ y: -4 }}
            className="group block"
          >
            <div className="glass-card rounded-3xl overflow-hidden transition-all duration-300">
              {/* Image Container */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Info Section */}
              <div className="p-10 bg-[rgb(242,242,243)] border-t border-[rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-5 mb-5">
                  {/* App Icon */}
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={project.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] font-medium leading-[1.35] tracking-[-0.02em] text-[rgba(0,0,0,0.9)] max-w-[450px]">
                    {project.title}
                  </h3>
                </div>

                {/* View Story Link */}
                <div className="flex items-center gap-2 text-[rgba(0,0,0,0.75)] group-hover:gap-3 transition-all">
                  <span className="text-[16px]">View story</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
