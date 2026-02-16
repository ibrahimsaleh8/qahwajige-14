"use client";

import { FooterData } from "@/lib/responseType";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7247.733529263881!2d46.7653!3d24.731454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f013bec0d4b7b%3A0xeb4d9048d7b13647!2z2YLZh9mI2KzZiiDZiNi12KjYp9io2YrZhiDZgtmH2YjYqSDYp9mE2LHZitin2LY!5e0!3m2!1sar!2str!4v1728329118756!5m2!1sar!2str";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  return (
    <section id="contact" className="py-20 relative overflow-hidden text-black">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-background mb-4">
            معلومات التواصل
          </h2>
          <div className="w-24 h-1 bg-main-color mx-auto mb-6" />
          <p className="text-low-color text-lg max-w-2xl mx-auto">
            نحن هنا لخدمتكم والإجابة على جميع استفساراتكم. تواصل معنا عبر أي من
            الوسائل التالية وسيسعد فريقنا بمساعدتك.{" "}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          {/* Contact Information */}
          <div className="space-y-6 flex flex-col items-start gap-5">
            {/* Phone */}
            <div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-main-color flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1">
                  <p className="text-black font-semibold mb-2">الهاتف</p>
                  <a
                    href={`tel:${phone}`}
                    target="_blank"
                    className="text-low-color font-medium hover:text-main-color transition-colors duration-300 text-lg"
                    dir="ltr">
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Whatsapp */}
            <div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-main-color flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-2">واتساب</p>
                  <a
                    href={`https://wa.me/${
                      whatsapp.includes("+")
                        ? whatsapp.split("+").join("")
                        : whatsapp
                    }?text=`}
                    target="_blank"
                    className="text-low-color font-medium hover:text-main-color transition-colors duration-300 text-lg"
                    dir="ltr">
                    {whatsapp}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-main-color flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-2">البريد الإلكتروني</p>
                  <a
                    target="_blank"
                    href={`mailto:${email}`}
                    className="text-low-color hover:text-main-color font-medium transition-colors duration-300 break-all">
                    {email}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-main-color flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-2">العنوان</p>
                  <p className="text-low-color text-sm font-medium leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full aspect-auto min-h-55 bg-slate-800">
            <iframe
              src={mapEmbedSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع قهوجيين الرياض على الخريطة"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
