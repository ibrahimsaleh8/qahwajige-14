import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";
import { Award, Clock, Shield, Sparkles, LucideIcon } from "lucide-react";

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
  features,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
}) {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3 items-center justify-center mb-16">
          {label && (
            <p className="text-card-background p-3 bg-main-color text-lg font-bold mb-4">
              {label}
            </p>
          )}

          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
            {title}
          </h2>

          <p className="text-low-color text-lg leading-relaxed mb-3">
            {description1}
          </p>
        </div>

        {/* Benefits Grid */}
        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 bg-card-background">
            {features.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <div
                  key={item.title}
                  className="group bg-card-background flex flex-col gap-10 h-75 p-12 border border-white/10 hover:border-black
                             transition-colors duration-300 hover:bg-white hover:text-black
                             ">
                  {/* Icon Box */}
                  <div
                    className="w-15 h-15 border-2 border-white/80
                                  flex items-center justify-center
                                  text-xl font-black
                                  transition-colors duration-300
                                  group-hover:border-black">
                    {Icon ? (
                      <Icon className="w-7 h-7" />
                    ) : (
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-extrabold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
