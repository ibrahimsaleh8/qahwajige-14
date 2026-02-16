"use client";

import { PackageData } from "@/lib/responseType";
import { Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.includes("+")
    ? whatsapp.replace("+", "")
    : whatsapp;

  const waLink = `https://wa.me/${whatsappNumber}?text=`;

  if (!packages?.length) return null;

  return (
    <section id="packages" className="py-24 bg-card-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-black mx-auto w-fit text-lg font-bold mb-4 p-3 bg-main-color">
            باقات مميزة
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            اختر الباقة المناسبة لك
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            باقات ضيافة مصممة بعناية لتناسب جميع المناسبات
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group flex flex-col justify-between
                        border-2 border-white/20
                         transition-colors duration-300
                         hover:bg-white hover:text-black
                         ">
              {/* Top */}
              <div>
                {/* Image */}
                {pkg.image && (
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-700
                                 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Number Box */}
                <div className="p-4">
                  <div
                    className="w-15 h-15 border-2 border-white/80
                             flex items-center justify-center mb-6
                             text-xl font-black
                             transition-colors duration-300
                             group-hover:border-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-2xl font-extrabold mb-4">{pkg.title}</h3>

                  {/* Features */}
                  {pkg.features?.length > 0 && (
                    <ul className="space-y-3 opacity-80 group-hover:opacity-100">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm leading-relaxed">
                          <Check className="w-4 h-4 mt-1 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* CTA */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex group-hover:bg-black group-hover:text-white text-lg p-4 bg-white text-black justify-center w-full items-center gap-2
                           font-bold tracking-wide
                           transition-opacity hover:opacity-70">
                <MessageCircle className="w-4 h-4" />
                اطلب الخدمة
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
