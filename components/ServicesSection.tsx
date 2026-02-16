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
  return (
    <section id="services" className="py-24 text-black">
      <div className="container mx-auto">
        {/* Header – same language as About */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {label && (
            <p className="text-black mx-auto w-fit text-lg font-bold mb-4 p-3 bg-main-color">
              {label}
            </p>
          )}

          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{title}</h2>

          <p className="text-low-color text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-card-background text-white ">
          {items?.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] || Coffee;

            return (
              <div
                key={card.title}
                className="group flex flex-col justify-between h-80
                           p-12 border border-white/10
                           transition-colors duration-300
                           hover:bg-white hover:text-black hover:border-black">
                {/* Top */}
                <div>
                  {/* Icon Box – same as About */}
                  <div
                    className="w-15 h-15
                               border-2 border-white/80
                               flex items-center justify-center mb-6
                               transition-colors duration-300
                               group-hover:border-black">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-extrabold mb-3">{card.title}</h3>

                  <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                    {card.description}
                  </p>
                </div>

                {/* Footer line (subtle, optional) */}
                <span className="mt-8 text-xs font-medium tracking-wide opacity-80">
                  خدمة ضيافة بمعايير عالية
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
