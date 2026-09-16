"use client";

interface HeroProps {
  onScrollDown: () => void;
}

export default function Hero({ onScrollDown }: HeroProps) {
  return (
    <section
      className="min-h-[85vh] flex flex-col justify-between px-6 pt-16 pb-12"
      style={{ background: "#0A1D37" }}
    >
      {/* Top Tag */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8" style={{ background: "rgba(20, 108, 255, 0.15)", border: "1px solid rgba(114, 167, 255, 0.3)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span
            className="text-xs font-bold text-blue-300 font-noto tracking-wide"
          >
            정가네 가족 도쿄 여행
          </span>
        </div>

        {/* Main Title */}
        <div className="mb-6">
          <h1
            className="text-4xl font-extrabold leading-tight tracking-tight text-white font-noto mb-2"
          >
            도쿄, 함께하는 여행
          </h1>
          <p
            className="text-2xl font-black tracking-tight text-blue-500 font-inter"
          >
            TOKYO, TOGETHER.
          </p>
        </div>

        {/* Date & Note */}
        <div className="border-l-2 border-blue-500 pl-4 py-1 mb-8">
          <p
            className="text-base font-bold text-white font-inter"
          >
            2026. 09. 25 (금) — 09. 27 (일)
          </p>
          <p
            className="text-xs text-gray-400 mt-1 font-noto"
          >
            2박 3일 동안 맛있는 음식과 예쁜 풍경을 함께 즐겨요!
          </p>
        </div>
      </div>

      {/* Quick CTA */}
      <div>
        <button
          onClick={onScrollDown}
          className="w-full rounded-2xl py-4 text-base font-bold tracking-wide transition-all active:scale-98 flex items-center justify-center gap-2 shadow-lg hover:bg-blue-600"
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
