import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "الرئيسية", href: "/#home" },
      { name: "عن الشركة", href: "/#about" },
      { name: "خدماتنا", href: "/#services" },
      { name: "الأسئلة الشائعة", href: "/#faq" },
      { name: "اتصل بنا", href: "/#contact" },
    ],
    services: [
      {
        name: "صبابين قهوة الرياض",
        href: "/#services",
      },
      {
        name: "مباشرين قهوة",
        href: "/#services",
      },
      {
        name: "قهوجيين وصبابين",
        href: "/#services",
      },
      {
        name: "مضيف قهوة",
        href: "/#services",
      },
      {
        name: "تجهيز بوفيهات وتمور",
        href: "/#services",
      },
    ],
  };

  return (
    <footer className="border-t border-black/5 relative z-10 overflow-hidden bg-second-bg text-white">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="text-white flex items-center gap-2 mb-6 text-xl font-bold hover:text-main-color transition-colors">
                {brandName}
              </Link>
              <p className="mb-6 leading-relaxed">{description}</p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-bold text-lg mb-6">روابط سريعة</p>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-main-color transition-colors inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <p className="font-bold text-lg mb-6">خدماتنا فى قهوجيين</p>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-main-color transition-colors inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-white font-bold text-lg mb-6">تواصل معنا</p>
              <ul className="space-y-4 text-white/80">
                {address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1" />
                    <span>{address}</span>
                  </li>
                )}
                {email && (
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1" />
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-main-color transition-colors">
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1" />
                    <a
                      href={`tel:${phone}`}
                      className="hover:text-main-color transition-colors">
                      {phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between flex-wrap gap-5">
            <p className="text-white/60 text-sm">
              © {currentYear} {brandName}. جميع الحقوق محفوظة
            </p>
            <div className="flex items-center gap-6 text-xs text-white/80">
              <Link href={"/privacy"}>سياسة الخصوصية</Link>
              <Link href={"/terms"}>الشروط والأحكام</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
