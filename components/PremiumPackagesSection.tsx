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
      <div className="container mx-auto px-4 space-y-16">
        {/* Header */}
        <div className="mx-auto mb-4 max-w-3xl text-center">
          <p className="mx-auto mb-4 inline-flex items-center rounded-full bg-main-color px-4 py-2 text-sm font-semibold text-black">
            باقات مميزة
          </p>
          <h2 className="mb-4 text-3xl md:text-4xl font-extrabold">
            اختر الباقة المناسبة لك
          </h2>
          <p className="text-lg leading-relaxed text-white/80">
            باقات ضيافة مصممة بعناية لتناسب جميع المناسبات، من التجمعات العائلية
            الصغيرة وحتى الاحتفالات الكبيرة.
          </p>
        </div>

        {/* Hint strip */}
        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm text-white/80">
          اختر الباقة الأقرب لاحتياجك، ويمكننا تعديل التفاصيل حسب عدد الضيوف
          وطبيعة المناسبة.
        </div>

        {/* Packages Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => {
            const isFeatured = index === 1;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`group flex flex-col justify-between overflow-hidden rounded-3xl border-2 bg-black/30 text-white shadow-lg transition-all duration-300
                  ${isFeatured ? "border-main-color lg:-translate-y-2 lg:scale-[1.02]" : "border-white/15 hover:border-main-color/60"}`}
              >
                {/* Top */}
                <div>
                  {/* Image */}
                  {pkg.image && (
                    <div className="relative aspect-4/3 overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {isFeatured && (
                        <span className="absolute right-4 top-4 rounded-full bg-main-color px-3 py-1 text-xs font-bold text-black shadow">
                          الأكثر طلباً
                        </span>
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="flex h-14 w-14 items-center justify-center border-2 border-white/80 text-xl font-black transition-colors duration-300 group-hover:border-main-color">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <span className="text-[11px] font-semibold tracking-wide text-white/60">
                        مناسبة لـ{" "}
                        {index === 0
                          ? "التجمعات الصغيرة"
                          : index === 1
                            ? "المناسبات المتوسطة"
                            : "الفعاليات الكبيرة"}
                      </span>
                    </div>

                    <h3 className="mb-4 text-2xl font-extrabold">{pkg.title}</h3>

                    {/* Features */}
                    {pkg.features?.length > 0 && (
                      <ul className="space-y-3 text-sm leading-relaxed text-white/85">
                        {pkg.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-main-color" />
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
                  className="mt-2 flex items-center justify-center gap-2 bg-white px-5 py-4 text-lg font-bold tracking-wide text-black transition-colors duration-200 hover:bg-main-color">
                  <MessageCircle className="h-4 w-4" />
                  اطلب هذه الباقة عبر واتساب
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
