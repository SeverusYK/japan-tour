"use client";

import { daySummaries, routeData } from "@/lib/travel-data";
import { ExternalLink, Navigation } from "lucide-react";

interface TodaySummaryProps {
  activeDay: number;
}

export default function TodaySummary({ activeDay }: TodaySummaryProps) {
  const day = daySummaries.find((d) => d.day === activeDay)!;
  const route = routeData[activeDay];

  return (
    <section className="px-4 pt-5 pb-1">
      <div
        className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white"
      >
        {/* Header */}
        <div className="px-5 pt-4 pb-3.5" style={{ background: "#0A1D37" }}>
          <div className="flex items-center justify-between mb-1.5">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded bg-blue-600 text-white font-noto"
            >
              {day.day}일차 ({day.dateKo})
            </span>
            <span
              className="text-[11px] font-semibold text-blue-300 font-inter"
            >
              {day.themeEn}
            </span>
          </div>
          <h2
            className="text-lg font-extrabold text-white font-noto"
          >
            {day.themeKo}
          </h2>
        </div>

        {/* Route chips */}
        <div className="p-4 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center gap-1.5 mb-2 text-xs font-bold text-gray-700 font-noto">
            <Navigation size={13} className="text-blue-600" />
            <span>오늘의 이동 코스</span>
          </div>
          <div className="flex items-center flex-wrap gap-1.5">
            {day.routeKo.map((stop, i) => (
              <div key={i} className="flex items-center gap-1">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-800 font-noto shadow-2xs"
                >
                  {stop}
                </span>
                {i < day.routeKo.length - 1 && (
                  <span className="text-blue-500 font-bold text-xs">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action: Open Map */}
        <a
          href={route.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 text-xs font-extrabold text-blue-600 hover:bg-blue-50 transition-colors font-noto"
        >
          <ExternalLink size={14} />
          <span>오늘 전체 이동 경로 구글 지도에서 열기 (MAP)</span>
        </a>
      </div>
    </section>
  );
}
