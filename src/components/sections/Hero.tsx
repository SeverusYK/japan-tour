"use client";

import { daySummaries } from "@/lib/travel-data";

interface HeroProps {
  onScrollDown: () => void;
}

export default function Hero({ onScrollDown }: HeroProps) {
  return (
    <section
      className="min-h-screen flex flex-col justify-between px-6 pt-14 pb-10"
      style={{ background: "#0A1D37" }}
    >
      {/* Top label */}
      <div>
        <div className="flex items-center gap-2 mb-10">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-md tracking-wider"
            style={{
              background: "#146CFF25",
              color: "#72A7FF",
              fontFamily: "var(--font-inter)",
            }}
          >
            TOKYO 2026
          </span>
          <span
            className="text-xs font-medium"
            style={{ color: "#9AA5BC", fontFamily: "var(--font-noto)" }}
          >
            정가네 가족 가을 여행
          </span>
        </div>

        {/* Main heading - Korean Primary + English Secondary */}
        <div className="mb-6">
          <h1
            className="text-4xl font-extrabold leading-tight tracking-tight mb-1"
            style={{ color: "#FFFFFF", fontFamily: "var(--font-noto)" }}
          >
            도쿄, 함께하는 여행
          </h1>
          <p
            className="text-2xl font-extrabold tracking-tight"
            style={{ color: "#146CFF", fontFamily: "var(--font-inter)" }}
          >
            TOKYO, TOGETHER.
          </p>
        </div>

        {/* Sub information */}
        <div className="mb-6 p-4 rounded-xl" style={{ background: "#112544", border: "1px solid #1E3A5F" }}>
          <p
            className="text-sm font-bold mb-1"
            style={{ color: "#FFFFFF", fontFamily: "var(--font-noto)" }}
          >
            정가네 가족 2박 3일 도쿄 나들이
          </p>
          <p
            className="text-xs font-medium mb-2"
            style={{ color: "#72A7FF", fontFamily: "var(--font-inter)" }}
          >
            2026. 09. 25 (금) — 09. 27 (일)
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "#9AA5BC", fontFamily: "var(--font-noto)" }}
          >
            맛있는 음식과 멋진 야경, 함께 걷는 소중한 추억.<br />
            부모님을 위해 준비한 도쿄 여행 가이드입니다.
          </p>
        </div>
      </div>

      {/* Day summary cards */}
      <div className="space-y-2.5 mb-8">
        {daySummaries.map((day) => (
          <div
            key={day.day}
            className="flex items-center gap-3 rounded-xl px-4 py-3.5"
            style={{ background: "#112544", border: "1px solid #1E3A5F" }}
          >
            <div className="flex flex-col w-14 flex-shrink-0">
              <span
                className="text-sm font-extrabold"
                style={{ color: "#146CFF", fontFamily: "var(--font-noto)" }}
              >
                {day.day}일차
              </span>
              <span
                className="text-[10px]"
                style={{ color: "#6B7A99", fontFamily: "var(--font-inter)" }}
              >
                {day.shortDateEn}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-bold truncate"
                style={{ color: "#FFFFFF", fontFamily: "var(--font-noto)" }}
              >
                {day.themeKo}
              </p>
              <p
                className="text-[11px] truncate"
                style={{ color: "#72A7FF", fontFamily: "var(--font-inter)" }}
              >
                {day.themeEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={onScrollDown}
        className="w-full rounded-2xl py-4 text-base font-bold tracking-wide transition-all active:scale-98 flex flex-col items-center justify-center shadow-lg"
        style={{
          background: "#146CFF",
          color: "#FFFFFF",
          fontFamily: "var(--font-noto)",
        }}
      >
        <span>여행 일정 보러가기 ↓</span>
        <span className="text-[11px] font-normal opacity-80 font-inter">VIEW TRIP SCHEDULE</span>
      </button>
    </section>
  );
}
