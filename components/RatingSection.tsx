"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) setSubmitted(value);
      }
    } catch {}
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;
    setSelectedRating(value);
    setIsLoading(true);

    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {}
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="relative inline-block">
          {interactive ? (
            <motion.button
              type="button"
              disabled={isLoading || !mounted}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 rounded-lg transition-all duration-200 hover:scale-125 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-main-color focus-visible:ring-offset-2"
              aria-label={`تقييم ${star} من 5`}
              whileTap={{ scale: 1.2 }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <motion.span
                animate={star <= value ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{
                  duration: star === value && interactive ? 0.4 : 0.2,
                  stiffness: 300,
                  damping: 15,
                }}>
                <Star
                  className={`w-10 h-10 md:w-12 md:h-12 transition-colors duration-200 ${
                    star <= value
                      ? "fill-amber-400 text-amber-400 drop-shadow-sm"
                      : "fill-stone-200 text-stone-200"
                  }`}
                />
              </motion.span>
            </motion.button>
          ) : (
            <Star
              className={`w-10 h-10 md:w-12 md:h-12 transition-colors ${
                star <= value
                  ? "fill-amber-400 text-amber-400 drop-shadow-sm"
                  : "fill-stone-200 text-stone-200"
              }`}
            />
          )}
        </span>
      ))}
    </div>
  );

  return (
    <section id="rating" className="py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="group grid gap-10 rounded-3xl border-2 border-black bg-white p-8 md:p-10 md:grid-cols-2">
          {/* Left: copy + stats */}
          <div className="flex flex-col justify-between gap-6 text-black">
            <div>
              <span className="mb-4 inline-flex items-center rounded-full bg-black px-4 py-1.5 text-sm font-semibold text-main-color">
                آراء العملاء
              </span>
              <h2 className="mb-3 text-3xl md:text-4xl font-extrabold">
                قيّم تجربتك معنا
              </h2>
              <p className="text-lg leading-relaxed text-low-color">
                رأيك يهمنا ويساعدنا على تطوير خدمات الضيافة لتقديم تجربة أفضل في
                كل مناسبة.
              </p>
            </div>

            {(averageRating > 0 || totalRatings > 0) && (
              <div className="space-y-3 rounded-2xl bg-black/5 p-4">
                {averageRating > 0 && (
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-3xl font-bold text-black">
                      {averageRating.toFixed(1)}
                    </span>
                    <span className="text-sm font-medium text-low-color">
                      / 5
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= Math.round(averageRating)
                              ? "fill-amber-400 text-amber-400"
                              : "fill-stone-200 text-stone-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {totalRatings > 0 && (
                  <p className="text-sm text-low-color">
                    <span className="font-semibold text-black">
                      {totalRatings}
                    </span>{" "}
                    {totalRatings === 1 ? "تقييم" : "تقييمات"} من عملاء خدمناهم
                    في مناسبات مختلفة داخل الرياض.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Right: interactive rating */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-card-background/40 p-6 text-center">
            {submitted !== null && mounted ? (
              <>
                {renderStars(submitted, false)}
                <div className="mt-4 space-y-2">
                  <p className="text-lg font-semibold text-black">
                    شكراً لتقييمك!
                  </p>
                  <p className="text-sm text-low-color">
                    تقييمك تم حفظه، ونسعد دائماً بخدمتكم في مناسباتكم القادمة.
                  </p>
                </div>
              </>
            ) : (
              <>
                {renderStars(displayRating || 0, true)}
                <p className="mt-3 text-sm text-low-color">
                  {isLoading
                    ? "جاري إرسال تقييمك..."
                    : mounted
                      ? "انقر على عدد النجوم الذي يعبر عن تجربتك معنا."
                      : ""}
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
