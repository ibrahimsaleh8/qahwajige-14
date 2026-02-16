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
    <section id="faq" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-black mb-4">
            <HelpCircle className="w-6 h-6" />
            <span className="font-bold text-lg">الأسئلة الشائعة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            إجابات على استفساراتكم
          </h2>
          <p className="text-low-color max-w-2xl mx-auto">
            لقد جمعنا لكم أكثر الأسئلة شيوعًا حول خدماتنا لمساعدتكم في اتخاذ
            القرار المناسب لمناسبتكم.
          </p>
        </div>

        <div className="mx-auto space-y-4 max-w-6xl">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-transparent shadow-sm border border-black/10 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="group w-full flex items-center justify-between p-5 text-right hover:bg-card-background/90 hover:text-white transition-colors duration-200">
                <h3 className="font-bold text-lg text-black group-hover:text-white">
                  {item.question}
                </h3>
                <span
                  className={`transform transition-transform duration-300 text-black ${
                    openIndex === index ? "rotate-180" : ""
                  }`}>
                  <ChevronDown className="w-6 h-6" />
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <p className="px-5 pb-5 text-black leading-relaxed border-t border-white/10 pt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
