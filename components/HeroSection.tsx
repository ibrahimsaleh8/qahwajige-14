import { HeroSectionData } from "@/lib/responseType";
import HeroLinks from "./AnimatedComponents/HeroLinks";
import Image from "next/image";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  image,
}: HeroSectionData & {
  image: string;
}) {
  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-2 lg:mt-0 mt-30 min-h-[90vh] border-b border-[#2b2b2b]">
      {/* Content */}
      <div className="relative flex flex-col items-center text-center xl:py-0 py-8 lg:text-right lg:items-start justify-center px-6 sm:px-12 lg:px-5 xl:px-10 border-r border-[#2b2b2b] bg-[#f7f6f3] text-[#2b2b2b]">
        <p className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 flex items-center gap-1">
          ضيافة{" "}
          <span className="block bg-[#2b2b2b] text-[#f7f6f3] px-4 w-fit py-1">
            فاخرة
          </span>
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-[6rem] font-black leading-[1.22] mb-6">
          <span className="block">{headline}</span>
        </h1>

        <p className="text-lg sm:text-xl font-medium max-w-105 mb-12">
          {subheadline}
        </p>

        {/* CTA */}
        <div>
          <HeroLinks whatsApp={whatsApp} />
        </div>
      </div>

      {/* Visual */}
      <div className="relative flex items-center justify-center lg:h-auto h-200 bg-[#2b2b2b] p-10 overflow-hidden">
        <div className="w-full h-full p-10 flex">
          <Image
            src={image}
            alt="صب القهوة"
            fill
            className="object-cover object-center w-full"
          />
        </div>
      </div>
    </section>
  );
}
