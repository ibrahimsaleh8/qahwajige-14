"use client";
import { GalleryImageData } from "@/lib/responseType";
import Image from "next/image";
import { motion } from "motion/react";

export function GallerySection({ gallery }: { gallery: GalleryImageData[] }) {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-second-bg py-24">
      <div className="relative container mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="mx-auto mb-4 w-fit rounded-full bg-main-color px-4 py-2 text-sm font-semibold text-black">
            معرض الأعمال
          </p>
          <h2 className="mb-3 text-4xl font-bold lg:text-5xl">
            من ذكريات مناسباتنا
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            لقطات حية من فعاليات ومناسبات قمنا بخدمتها في الرياض، تعكس أجواء
            الضيافة العربية واهتمامنا بالتفاصيل.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:gap-5">
          {gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-second-bg shadow-soft">
              <div className="aspect-square">
                <Image
                  src={image.url}
                  alt={image.alt ?? `صورة-${index + 1}`}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 flex items-end justify-start bg-linear-to-t from-black/70 via-black/0 to-black/0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="line-clamp-2 text-sm font-semibold text-[hsl(var(--cream))]">
                  {image.alt ?? `صورة-${index + 1}`}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
