"use client";

import { ExternalLink } from "lucide-react";
import { timelineData } from "@/lib/travel-data";

interface DailyTimelineProps {
  activeDay: number;
}

export default function DailyTimeline({ activeDay }: DailyTimelineProps) {
  const items = timelineData[activeDay] ?? [];

  return (
    <section className="px-4 py-2">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2
            className="text-base font-bold"
            style={{ color: "#172033", fontFamily: "var(--font-noto)" }}
          >
            {activeDay}일차 시간별 상세 일정
          </h2>
          <p
            className="text-[11px] font-semibold tracking-wider uppercase"
            style={{ color: "#146CFF", fontFamily: "var(--font-inter)" }}
          >
            DAILY TIMELINE &middot; DAY {activeDay}
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[54px] top-2 bottom-2 w-0.5"
          style={{ background: "#DDE3EF" }}
        />

        <div className="space-y-3">
          {items.map((item, idx) => {
            // Transit step
            if (item.isTransit) {
              return (
                <div key={idx} className="flex items-center gap-3 py-1">
                  <div className="w-[46px] flex-shrink-0 text-right">
                    <span className="text-[11px] text-gray-400 font-semibold">이동</span>
                  </div>
                  <div className="w-4 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <div
                    className="flex-1 rounded-lg px-3 py-1.5 text-xs font-semibold"
                    style={{ background: "#EEF3FF", border: "1px dashed #B8D3FF" }}
                  >
                    <span className="text-blue-900 font-noto block">{item.transitLabelKo}</span>
                    {item.transitLabelEn && (
                      <span className="text-[10px] text-blue-500 font-inter block">{item.transitLabelEn}</span>
                    )}
                  </div>
                </div>
              );
            }

            if (!item.time && !item.titleKo) return null;

            return (
              <div key={idx} className="flex gap-2.5 items-start">
                {/* Time column */}
                <div className="w-[46px] flex-shrink-0 text-right pt-2.5">
                  <span
                    className="text-xs font-black block"
                    style={{ color: "#146CFF", fontFamily: "var(--font-inter)" }}
                  >
                    {item.time}
                  </span>
                  {item.timeEnd && (
                    <span
                      className="text-[10px] block text-gray-400 font-inter"
                    >
                      ~{item.timeEnd}
                    </span>
                  )}
                </div>

                {/* Dot */}
                <div className="pt-3.5 flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 z-10"
                    style={{
                      background: "#146CFF",
                      border: "2px solid #FFFFFF",
                      boxShadow: "0 0 0 2px #B8D3FF",
                    }}
                  />
                </div>

                {/* Content Card */}
                <div
                  className="flex-1 rounded-2xl p-4 shadow-sm"
                  style={{ background: "#FFFFFF", border: "1px solid #DDE3EF" }}
                >
                  {/* Category badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-md"
                      style={{
                        background: "#EEF3FF",
                        color: "#146CFF",
                        fontFamily: "var(--font-noto)",
                      }}
                    >
                      {item.categoryKo}
                    </span>
                    <span className="text-[10px] font-medium text-gray-400 font-inter">
                      {item.categoryEn}
                    </span>
                  </div>

                  {/* Main Korean Title */}
                  <h3
                    className="text-sm font-extrabold leading-snug mb-0.5"
                    style={{ color: "#172033", fontFamily: "var(--font-noto)" }}
                  >
                    {item.titleKo}
                  </h3>

                  {/* English Secondary Title */}
                  <p
                    className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2 font-inter"
                  >
                    {item.titleEn}
                  </p>

                  {/* Subtitle / Key feature */}
                  {item.subtitleKo && (
                    <p
                      className="text-xs font-semibold mb-1.5"
                      style={{ color: "#146CFF", fontFamily: "var(--font-noto)" }}
                    >
                      {item.subtitleKo}
                    </p>
                  )}

                  {/* Description in Korean */}
                  {item.descriptionKo && (
                    <p
                      className="text-xs leading-relaxed mb-3 whitespace-pre-line text-gray-600 font-noto"
                    >
                      {item.descriptionKo}
                    </p>
                  )}

                  {/* Note */}
                  {item.noteKo && (
                    <div
                      className="p-2 rounded-lg text-xs font-medium mb-3"
                      style={{ background: "#FFF9E6", color: "#8A6D05", border: "1px solid #FFEBAA" }}
                    >
                      💡 {item.noteKo}
                    </div>
                  )}

                  {/* Action Link Buttons */}
                  {item.links && item.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl transition-all active:scale-95 shadow-sm"
                          style={{
                            background: "#146CFF",
                            color: "#FFFFFF",
                            fontFamily: "var(--font-noto)",
                          }}
                        >
                          <span>{link.labelKo}</span>
                          <span className="text-[10px] opacity-80 font-inter">({link.labelEn})</span>
                          <ExternalLink size={11} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
