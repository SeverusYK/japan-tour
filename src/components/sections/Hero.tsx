"use client";

import Image from "next/image";

interface HeroProps {
  onScrollDown: () => void;
}

export default function Hero({ onScrollDown }: HeroProps) {
  return (
    <section
      className="min-h-screen flex flex-col justify-between px-6 pt-12 pb-10"
      style={{ background: "#0A1D37" }}
    >
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{ background: "rgba(20, 108, 255, 0.15)", border: "1px solid rgba(114, 167, 255, 0.3)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span
            className="text-xs font-bold text-blue-300 font-noto tracking-wide"
          >
            정가네 가족 도쿄 여행
          </span>
        </div>

        {/* Main Title */}
        <div className="mb-4">
          <h1
            className="text-3xl font-extrabold leading-tight tracking-tight text-white font-noto mb-1"
          >
            도쿄, 함께하는 여행
          </h1>
          <p
            className="text-xl font-black tracking-tight text-blue-500 font-inter"
          >
            TOKYO, TOGETHER.
          </p>
        </div>

        {/* Date & Subtitle */}
        <div className="border-l-2 border-blue-500 pl-3.5 py-0.5 mb-5">
          <p
            className="text-sm font-bold text-white font-inter"
          >
            2026. 09. 25 (금) — 09. 27 (일)
          </p>
          <p
            className="text-xs text-gray-400 mt-0.5 font-noto"
          >
            2박 3일 동안 맛있는 음식과 예쁜 풍경을 함께 즐겨요!
          </p>
        </div>

        {/* Family Photo Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-400/20 bg-[#112544] mb-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/family.jpg"
              alt="정가네 가족 사진"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 430px) 100vw, 430px"
            />
            {/* Subtle Gradient Overlay at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
              <span className="text-[11px] font-bold text-white/90 font-noto bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
                정가네 가족 ❤️
              </span>
              <span className="text-[10px] font-semibold text-blue-200/90 font-inter tracking-wider bg-black/40 backdrop-blur-xs px-2 py-1 rounded-full">
                TOKYO 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick CTA Button */}
      <div>
        <button
          onClick={onScrollDown}
          className="w-full rounded-2xl py-3.5 text-base font-bold tracking-wide transition-all active:scale-98 flex items-center justify-center gap-2 shadow-lg hover:bg-blue-600"
          style={{
            background: "#146CFF",
            color: "#FFFFFF",
            fontFamily: "var(--font-noto)",
          }}
        >
          <span>오늘 일정 보기</span>
          <span className="text-lg">↓</span>
        </button>
      </div>
    </section>
  );
}
