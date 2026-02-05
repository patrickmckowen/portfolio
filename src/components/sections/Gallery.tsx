"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  // Row 1-2, Col 1: Saige Audio video (tall, spans 2 rows) - needs iPhone frame
  {
    type: "video" as const,
    src: "/images/gallery/Saige Audio.mp4",
    alt: "Saige audio interaction",
    span: "col-span-1 row-span-2",
    needsFrame: true,
  },
  // Row 1, Col 2: Saige TODO app - image with frame baked in
  {
    type: "image" as const,
    src: "/images/gallery/Saige.png",
    alt: "Saige app design",
    span: "col-span-1 row-span-1",
    needsFrame: false,
  },
  // Row 1, Col 3: List Nav (dark Cameo) - image with frame baked in
  {
    type: "image" as const,
    src: "/images/gallery/List Nav.png",
    alt: "List navigation design",
    span: "col-span-1 row-span-1",
    needsFrame: false,
  },
  // Row 2, Col 2: Starcards - no device frame needed, fills card edge to edge
  {
    type: "image" as const,
    src: "/images/gallery/Starcards.png",
    alt: "Starcards design",
    span: "col-span-1 row-span-1",
    needsFrame: false,
    fillCard: true,
  },
  // Row 2-3, Col 3: Edit Photo video (tall, spans 2 rows) - needs iPhone frame
  {
    type: "video" as const,
    src: "/images/gallery/Edit Photo.mp4",
    alt: "Edit photo interaction",
    span: "col-span-1 row-span-2",
    needsFrame: true,
  },
  // Row 3, Col 1: Add to list (Japan Spring 2023) - image with frame baked in
  {
    type: "image" as const,
    src: "/images/gallery/Add to list.png",
    alt: "Add to list interaction",
    span: "col-span-1 row-span-1",
    needsFrame: false,
  },
  // Row 3, Col 2: Training - image with frame baked in
  {
    type: "image" as const,
    src: "/images/gallery/Training.png",
    alt: "Training app design",
    span: "col-span-1 row-span-1",
    needsFrame: false,
  },
];

export default function Gallery() {
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
          Gallery of recent work
        </motion.h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[280px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              className={`glass-card-static rounded-2xl overflow-hidden relative ${item.span}`}
            >
              {item.needsFrame ? (
                /* Video with iPhone frame overlay */
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative h-full aspect-[375/812]">
                    {/* iPhone Frame */}
                    <Image
                      src="/images/iPhone Sierra Blue.png"
                      alt="iPhone frame"
                      fill
                      className="object-contain z-10 pointer-events-none"
                      sizes="300px"
                    />
                    {/* Video inside frame */}
                    <div className="absolute inset-[2.5%] rounded-[38px] overflow-hidden">
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : item.type === "video" ? (
                /* Video without frame (shouldn't happen with current data) */
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                /* Image - already has device frame baked in */
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={item.fillCard ? "object-cover" : "object-contain"}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
