"use client";

import { daySummaries } from "@/lib/travel-data";

interface TodaySummaryProps {
  activeDay: number;
}

export default function TodaySummary({ activeDay }: TodaySummaryProps) {
  const day = daySummaries.find((d) => d.day === activeDay)!;

  return (
    <section className="px-4 pt-6 pb-2">
      {/* Section label */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2
            className="text-base font-bold"
            style={{ color: "#172033", fontFamily: "var(--font-noto)" }}
          >
            오늘의 일정 요약
          </h2>
          <p
            className="text-[11px] font-semibold tracking-wider uppercase"
            style={{ color: "#146CFF", fontFamily: "var(--font-inter)" }}
          >
            TODAY SUMMARY &middot; {day.day}일차
          </p>
        </div>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ background: "#EEF3FF", color: "#146CFF", fontFamily: "var(--font-inter)" }}
        >
          {day.dateKo}
        </span>
      </div>

      {/* Day card */}
      <div
        className="rounded-2xl overflow-hidden shadow-sm"
        style={{ border: "1px solid #DDE3EF" }}
      >
        {/* Card header */}
        <div className="px-5 pt-5 pb-4" style={{ background: "#0A1D37" }}>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-md"
              style={{
                background: "#146CFF",
                color: "#FFFFFF",
                fontFamily: "var(--font-noto)",
              }}
            >
              {day.day}일차 테마
            </span>
            <span
              className="text-xs font-medium"
              style={{ color: "#72A7FF", fontFamily: "var(--font-inter)" }}
            >
              {day.dateEn}
            </span>
          </div>
          <h3
            className="text-xl font-extrabold tracking-tight mb-0.5 text-white"
            style={{ fontFamily: "var(--font-noto)" }}
          >
            {day.themeKo}
          </h3>
          <p
            className="text-xs font-bold mb-3"
            style={{ color: "#72A7FF", fontFamily: "var(--font-inter)" }}
          >
            {day.themeEn}
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "#DDE3EF", fontFamily: "var(--font-noto)" }}
          >
            {day.description}
          </p>
        </div>

        {/* Route */}
        <div
          className="px-5 py-3.5"
          style={{ background: "#F4F7FB", borderTop: "1px solid #DDE3EF" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-xs font-bold"
              style={{ color: "#172033", fontFamily: "var(--font-noto)" }}
            >
              주요 이동 경로
            </span>
            <span
              className="text-[10px] tracking-wider"
              style={{ color: "#9AA5BC", fontFamily: "var(--font-inter)" }}
            >
              TODAY&apos;S ROUTE
            </span>
          </div>
          <div className="flex items-center flex-wrap gap-1.5">
            {day.routeKo.map((stop, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span
                  className="text-xs font-bold px-2 py-1 rounded-md bg-white border"
                  style={{
                    color: "#172033",
                    borderColor: "#DDE3EF",
                    fontFamily: "var(--font-noto)",
                  }}
                >
                  {stop}
                </span>
                {i < day.routeKo.length - 1 && (
                  <span style={{ color: "#146CFF", fontSize: "11px", fontWeight: "bold" }}>&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div
          className="px-5 py-3.5"
          style={{ background: "#FFFFFF", borderTop: "1px solid #DDE3EF" }}
        >
          <p className="text-[11px] font-bold text-gray-500 mb-2 font-noto">오늘의 핵심 포인트</p>
          <div className="flex flex-wrap gap-2">
            {day.keywords.map((kw, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: "#EEF3FF",
                  color: "#146CFF",
                  fontFamily: "var(--font-noto)",
                }}
              >
                <span>{kw.ko}</span>
                <span className="text-[10px] opacity-70 font-inter">({kw.en})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
