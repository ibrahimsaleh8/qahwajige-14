import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";
import { Award, Clock, Shield, Sparkles, LucideIcon } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Clock,
  Shield,
  Sparkles,
};

export default function AboutSection({
  label,
  title,
  description1,
  image,
  features,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
}) {
  const hasFeatures = features && features.length > 0;

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 space-y-16">
        {/* Top: Story + Image */}
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            {label && (
              <p className="inline-flex items-center rounded-full bg-main-color px-4 py-2 text-sm font-semibold text-card-background">
                {label}
              </p>
            )}

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-snug">
                {title}
              </h2>
              <p className="text-low-color text-lg leading-relaxed">
                {description1}
              </p>
            </div>

            {/* Mini highlights row */}
            {hasFeatures && (
              <div className="grid gap-4 sm:grid-cols-3">
                {features!.slice(0, 3).map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="rounded-xl border border-black/5 bg-card-background px-4 py-3 text-sm text-white shadow-sm">
                    <p className="font-semibold mb-1">{item.title}</p>
                    <p className="text-[13px] text-white/70 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-linear-to-br from-main-color/30 via-white/40 to-card-background/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-black/5 bg-card-background shadow-xl">
              {image ? (
                <div className="relative aspect-4/3">
                  <Image
                    src={image}
                    alt={title || "عن قهوجيين الرياض"}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-4/3 items-center justify-center bg-linear-to-br from-black via-card-background to-main-color/40 text-center text-white">
                  <p className="max-w-xs text-lg font-semibold leading-relaxed">
                    ضيافة عربية متكاملة لمناسبات لا تُنسى في الرياض.
                  </p>
                </div>
              )}

              <div className="grid gap-4 border-t border-white/10 bg-black/90 px-6 py-5 text-xs text-white sm:grid-cols-3">
                <div>
                  <p className="font-bold text-sm">فريق متخصص</p>
                  <p className="text-white/70 mt-1">
                    قهوجيين محترفين مدرّبين على أدق تفاصيل الضيافة.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-sm">تجربة مريحة لكم</p>
                  <p className="text-white/70 mt-1">
                    نهتم بالتفاصيل من أول اتصال حتى نهاية المناسبة.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-sm">مرونة في الخيارات</p>
                  <p className="text-white/70 mt-1">
                    حلول تناسب التجمعات الصغيرة والفعاليات الكبيرة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Benefits Grid */}
        {hasFeatures && (
          <div className="grid gap-0 overflow-hidden rounded-3xl border border-white/10 bg-card-background md:grid-cols-2">
            {features!.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="group flex h-full flex-col gap-6 border-black/5 p-10 transition-colors duration-300 hover:bg-white hover:text-black md:border-l">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center border-2 border-white/80 text-xl font-black transition-colors duration-300 group-hover:border-black">
                      {Icon ? (
                        <Icon className="h-7 w-7" />
                      ) : (
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-extrabold">{item.title}</h3>
                  </div>

                  <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
