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
    <section
      id="contact"
      className="relative overflow-hidden py-20 text-black">
      <div className="relative z-10 container mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-card-background">
            معلومات التواصل
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-main-color" />
          <p className="mx-auto max-w-2xl text-lg text-low-color">
            نحن هنا لخدمتكم والإجابة على جميع استفساراتكم. اختر وسيلة التواصل
            الأنسب لك وسيسعد فريقنا بمساعدتك في تنسيق مناسبة مميزة.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          {/* Contact Information */}
          <div className="flex flex-col gap-5 rounded-3xl border border-black/5 bg-white/90 p-6 shadow-sm">
            {/* Phone */}
            <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-main-color/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-main-color transition-transform duration-300">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1">
                <p className="mb-1 font-semibold text-black">الهاتف</p>
                <a
                  href={`tel:${phone}`}
                  target="_blank"
                  className="text-lg font-medium text-low-color transition-colors duration-300 hover:text-main-color"
                  dir="ltr">
                  {phone}
                </a>
                <p className="mt-1 text-xs text-low-color">
                  متاح للتواصل والاستفسارات بشكل مباشر.
                </p>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-main-color/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-main-color transition-transform duration-300">
                <MessageCircle className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1">
                <p className="mb-1 font-semibold">واتساب</p>
                <a
                  href={`https://wa.me/${
                    whatsapp.includes("+")
                      ? whatsapp.split("+").join("")
                      : whatsapp
                  }?text=`}
                  target="_blank"
                  className="text-lg font-medium text-low-color transition-colors duration-300 hover:text-main-color"
                  dir="ltr">
                  {whatsapp}
                </a>
                <p className="mt-1 text-xs text-low-color">
                  للحجوزات السريعة وإرسال تفاصيل المناسبة.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-main-color/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-main-color transition-transform duration-300">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1">
                <p className="mb-1 font-semibold">البريد الإلكتروني</p>
                <a
                  target="_blank"
                  href={`mailto:${email}`}
                  className="break-all font-medium text-low-color transition-colors duration-300 hover:text-main-color">
                  {email}
                </a>
                <p className="mt-1 text-xs text-low-color">
                  مناسب للمراسلات الرسمية وتأكيد التفاصيل المكتوبة.
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-main-color/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-main-color transition-transform duration-300">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1">
                <p className="mb-1 font-semibold">العنوان</p>
                <p className="text-sm font-medium leading-relaxed text-low-color">
                  {address}
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-55 w-full overflow-hidden rounded-3xl border border-black/5 bg-slate-800">
            <iframe
              src={mapEmbedSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع قهوجيين الرياض على الخريطة"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
