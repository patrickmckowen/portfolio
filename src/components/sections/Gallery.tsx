"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    type: "image" as const,
    src: "/images/gallery/Saige.png",
    alt: "Saige app design",
    span: "col-span-1 row-span-2",
  },
  {
    type: "video" as const,
    src: "/images/gallery/Edit Photo.mp4",
    alt: "Edit photo interaction",
    span: "col-span-1 row-span-1",
  },
  {
    type: "image" as const,
    src: "/images/gallery/List Nav.png",
    alt: "List navigation design",
    span: "col-span-1 row-span-1",
  },
  {
    type: "image" as const,
    src: "/images/gallery/Starcards.png",
    alt: "Starcards design",
    span: "col-span-1 row-span-1",
  },
  {
    type: "video" as const,
    src: "/images/gallery/Saige Audio.mp4",
    alt: "Saige audio interaction",
    span: "col-span-1 row-span-1",
  },
  {
    type: "image" as const,
    src: "/images/gallery/Add to list.png",
    alt: "Add to list interaction",
    span: "col-span-1 row-span-1",
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
              whileHover={{ scale: 1.02 }}
              className={`glass-card rounded-2xl overflow-hidden relative ${item.span}`}
            >
              {/* iPhone Frame Container */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full h-full max-w-[180px] md:max-w-[220px]">
                  {/* iPhone Frame */}
                  <Image
                    src="/images/iPhone Sierra Blue.png"
                    alt="iPhone frame"
                    fill
                    className="object-contain z-10 pointer-events-none"
                    sizes="220px"
                  />

                  {/* Content inside frame */}
                  <div className="absolute inset-[3%] rounded-[32px] overflow-hidden">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
