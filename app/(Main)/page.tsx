import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import { GallerySection } from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumPackagesSection from "@/components/PremiumPackagesSection";
import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import { ProjectContentResponse } from "@/lib/responseType";
import RatingSection from "@/components/RatingSection";
import Link from "next/link";
import PreventCopy from "@/components/PreventCopy";

export default async function HomePage() {
  let data;

  try {
    const res = await fetch(
      `${APP_URL}/api/project/${CurrentProjectId}/main-data`,
    );
    data = (await res.json()) as ProjectContentResponse;
  } catch (error) {
    console.error("Failed to fetch project content:", error);

    data = {
      header: { brandName: "قهوجيين الرياض" },
      hero: { headline: "", subheadline: "", whatsApp: "" },
      about: { label: "", title: "", description1: "", image: "" },
      services: { label: "", title: "", description: "", items: [] },
      whyUs: { label: "", title: "", description: "", features: [] },
      gallery: [],
      packages: [],
      rating: { averageRating: 0, totalRatings: 0 },
      footer: {
        brandName: "قهوجيين الرياض",
        phone: "",
        email: "",
        address: "",
      },
    };
  }

  return (
    <main className="min-h-screen overflow-x-hidden container mx-auto border-2 border-black text-white">
      <HeroSection {...data.hero} image={data.gallery[0].url ?? ""} />
      <AboutSection {...data.about} features={data.whyUs.features} />
      <div className="p-20 flex flex-col gap-10 items-center font-bold justify-center text-center bg-main-color text-black text-4xl border-y-2 border-black">
        <p>{data.whyUs.description ?? ""}</p>
        <Link
          href={"/#contact"}
          className="bg-black text-white py-4 text-lg px-8">
          تواصل معنا
        </Link>
      </div>
      <PremiumPackagesSection
        packages={data.packages ?? []}
        whatsapp={data.hero?.whatsApp ?? ""}
      />
      <ServicesSection {...data.services} />
      <RatingSection
        projectId={CurrentProjectId}
        averageRating={data.rating?.averageRating ?? 0}
        totalRatings={data.rating?.totalRatings ?? 0}
      />

      <FAQSection />
      <GallerySection gallery={data.gallery} />
      <PreventCopy />
      <ContactSection {...data.footer} whatsapp={data.hero?.whatsApp ?? ""} />
    </main>
  );
}
