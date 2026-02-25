"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "ما هي المدن والمناطق التي تشملها خدماتكم؟",
    answer:
      "نقدم خدماتنا داخل مدينة الرياض والمناطق المجاورة لها، كما يمكننا ترتيب الخدمة خارج الرياض حسب الاتفاق المسبق وتوفر الفريق.",
  },
  {
    question: "هل توفرون جميع مستلزمات تقديم القهوة؟",
    answer:
      "نعم، نهتم بأدق التفاصيل ونوفر كافة أدوات الضيافة مثل الدلال، الفناجيل، التمور، والصواني لتقديم القهوة العربية بأسلوب راقٍ وفاخر.",
  },
  {
    question: "كيف أحدد عدد القهوجيين المناسب لمناسبتي؟",
    answer:
      "يعتمد ذلك على عدد الضيوف وطبيعة المناسبة، وعادةً نوصي بقهوجي واحد لكل 30 إلى 50 ضيف لضمان سرعة الخدمة وجودتها.",
  },
  {
    question: "هل تقدمون خدمات للمناسبات الخاصة والرسمية؟",
    answer:
      "نعم، نخدم جميع أنواع المناسبات مثل الأعراس، الاجتماعات الرسمية، المناسبات الخاصة، والفعاليات الكبيرة مع الالتزام بأعلى معايير الاحتراف.",
  },
  {
    question: "هل يمكن تخصيص الزي أو طريقة التقديم؟",
    answer:
      "بالتأكيد، نوفر خيارات متعددة للزي وطريقة التقديم بما يتناسب مع طبيعة المناسبة وذوق العميل.",
  },
  {
    question: "كم مدة تقديم الخدمة خلال المناسبة؟",
    answer:
      "مدة الخدمة تعتمد على حجم المناسبة وعدد الضيوف، ويتم الاتفاق عليها مسبقًا لضمان تغطية الحدث بالكامل دون استعجال.",
  },
  {
    question: "ما هي طريقة الحجز والتأكيد؟",
    answer:
      "يمكنك الحجز بسهولة عبر الاتصال المباشر أو من خلال الواتساب باستخدام الأزرار الموجودة في الموقع، ويفضل الحجز المبكر لضمان توفر الخدمة في الموعد المطلوب.",
  },
  {
    question: "هل يمكن إلغاء أو تعديل الحجز؟",
    answer:
      "نعم، يمكن تعديل أو إلغاء الحجز حسب سياسة الإلغاء لدينا، ويفضل التواصل معنا في أقرب وقت ممكن لإجراء التعديلات.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-card-background/10">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          {/* Left: intro and context */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-main-color/20 px-4 py-2 text-sm font-semibold text-black">
              <HelpCircle className="h-5 w-5" />
              <span>الأسئلة الشائعة</span>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                إجابات على استفساراتكم
              </h2>
              <p className="text-low-color text-[15px] leading-relaxed max-w-xl">
                هنا تجد أهم الأسئلة التي نستقبلها من عملائنا حول خدمات الضيافة
                والقهوجيين. إذا لم تجد إجابتك هنا، يسعدنا التواصل معك مباشرة.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/80 px-5 py-4 text-sm text-black shadow-sm">
              <p className="font-semibold">
                لا يزال لديك سؤال؟
              </p>
              <p className="mt-1 text-low-color">
                يمكنك مراسلتنا عبر نموذج التواصل أو واتساب وسنرد عليك في أقرب وقت
                ممكن.
              </p>
            </div>
          </div>

          {/* Right: accordion list */}
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white/60 shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="group flex w-full items-center justify-between gap-4 p-5 text-right transition-colors duration-200 hover:bg-card-background/90">
                  <h3 className="text-right text-base md:text-lg font-bold text-black group-hover:text-white">
                    {item.question}
                  </h3>
                  <span
                    className={`text-black transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}>
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}>
                      <p className="border-t border-black/5 px-5 pb-5 pt-4 text-sm leading-relaxed text-black">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
