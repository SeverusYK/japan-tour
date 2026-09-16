"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { timelineData } from "@/lib/travel-data";

interface DailyTimelineProps {
  activeDay: number;
}

export default function DailyTimeline({ activeDay }: DailyTimelineProps) {
  const items = timelineData[activeDay] ?? [];

  return (
    <section className="px-4 py-3">
      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-[50px] top-3 bottom-3 w-0.5 bg-gray-200"
        />

        <div className="space-y-3">
          {items.map((item, idx) => {
            // Transit step
            if (item.isTransit) {
              return (
                <div key={idx} className="flex items-center gap-3 py-1">
                  <div className="w-[42px] flex-shrink-0 text-right">
                    <span className="text-[11px] font-semibold text-gray-400">이동</span>
                  </div>
                  <div className="w-4 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                  <div
                    className="flex-1 rounded-xl px-3 py-1.5 text-xs font-semibold bg-blue-50/70 border border-blue-100 text-blue-800 font-noto"
                  >
                    <span>{item.transitLabelKo}</span>
                  </div>
                </div>
              );
            }

            if (!item.time && !item.titleKo) return null;

            return (
              <div key={idx} className="flex gap-2.5 items-start">
                {/* Time column */}
                <div className="w-[42px] flex-shrink-0 text-right pt-2">
                  <span
                    className="text-xs font-black text-blue-600 font-inter block leading-tight"
                  >
                    {item.time}
                  </span>
                  {item.timeEnd && (
                    <span
                      className="text-[10px] text-gray-400 font-inter block"
                    >
                      ~{item.timeEnd}
                    </span>
                  )}
                </div>

                {/* Dot */}
                <div className="pt-2.5 flex flex-col items-center">
                  <div
                    className="w-3.5 h-3.5 rounded-full flex-shrink-0 z-10 bg-blue-600 border-2 border-white shadow-xs"
                  />
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl p-3.5 shadow-xs bg-white border border-gray-200"
                >
                  {/* Category & Title */}
                  <div className="flex items-center gap-1.5 mb-1">
                    <span
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-noto"
                    >
                      {item.categoryKo}
                    </span>
                    <span className="text-[10px] text-gray-400 font-inter">
                      {item.titleEn}
                    </span>
                  </div>

                  <h3
                    className="text-sm font-extrabold text-gray-900 leading-snug mb-1 font-noto"
                  >
                    {item.titleKo}
                  </h3>

                  {/* Subtitle / Key description */}
                  {item.subtitleKo && (
                    <p
                      className="text-xs font-medium text-gray-600 mb-2 font-noto leading-relaxed"
                    >
                      {item.subtitleKo}
                    </p>
                  )}

                  {/* Note if exists */}
                  {item.noteKo && (
                    <div
                      className="p-2 rounded-lg text-[11px] font-medium mb-2 bg-amber-50 text-amber-800 border border-amber-200 font-noto"
                    >
                      💡 {item.noteKo}
                    </div>
                  )}

                  {/* Map / Ticket Link Button */}
                  {item.links && item.links.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-lg transition-all active:scale-95 bg-blue-600 text-white font-noto shadow-2xs hover:bg-blue-700"
                        >
                          <MapPin size={11} />
                          <span>{link.labelKo}</span>
                          <ExternalLink size={10} className="opacity-80" />
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
