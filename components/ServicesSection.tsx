import { ServicesSectionData } from "@/lib/responseType";
import { Coffee, Users, Heart, Building2, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users,
  Heart,
  Building2,
};

export default function ServicesSection({
  description,
  items,
  label,
  title,
}: ServicesSectionData) {
  if (!items || items.length === 0) return null;

  return (
    <section id="services" className="py-24 text-black">
      <div className="container mx-auto px-4 space-y-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          {label && (
            <p className="mx-auto mb-4 inline-flex items-center rounded-full bg-main-color px-4 py-2 text-sm font-semibold text-black">
              {label}
            </p>
          )}

          <h2 className="mb-4 text-3xl md:text-4xl font-extrabold">{title}</h2>

          <p className="text-lg leading-relaxed text-low-color">
            {description}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 rounded-3xl border border-black/5 bg-card-background text-white p-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] || Coffee;

            return (
              <article
                key={card.id}
                className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-black/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-main-color hover:bg-white hover:text-black">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white/70 bg-black/10 transition-colors duration-300 group-hover:border-black group-hover:bg-main-color/10">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold">{card.title}</h3>

                  <p className="text-sm leading-relaxed text-white/80 group-hover:text-black/80">
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Simple process strip */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-black/5 bg-white/80 px-6 py-5 text-sm text-black shadow-sm backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold">
              خطوات بسيطة لحجز خدمة الضيافة لمناسبتك:
            </p>
            <ol className="flex flex-wrap items-center gap-3 text-xs sm:text-[13px]">
              <li className="rounded-full bg-main-color px-3 py-1 font-medium">
                1. اختر نوع الخدمة المناسبة
              </li>
              <li className="rounded-full bg-main-color/80 px-3 py-1 font-medium">
                2. تواصل معنا لتأكيد التفاصيل
              </li>
              <li className="rounded-full bg-main-color/80 px-3 py-1 font-medium">
                3. استمتع بضيافة ترضي ضيوفك
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
