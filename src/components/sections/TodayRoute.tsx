"use client";

import { MapPin, ExternalLink } from "lucide-react";
import { routeData } from "@/lib/travel-data";

interface TodayRouteProps {
  activeDay: number;
}

export default function TodayRoute({ activeDay }: TodayRouteProps) {
  const route = routeData[activeDay];

  return (
    <section className="px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2
            className="text-base font-bold"
            style={{ color: "#172033", fontFamily: "var(--font-noto)" }}
          >
            오늘의 이동 동선
          </h2>
          <p
            className="text-[11px] font-semibold tracking-wider uppercase"
            style={{ color: "#146CFF", fontFamily: "var(--font-inter)" }}
          >
            TODAY&apos;S ROUTE &middot; {activeDay}일차
          </p>
        </div>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded"
          style={{ background: "#F4F7FB", color: "#6B7A99", border: "1px solid #DDE3EF" }}
        >
          총 {route.stopsKo.length}개 스팟
        </span>
      </div>

      <div
        className="rounded-2xl overflow-hidden shadow-sm"
        style={{ background: "#FFFFFF", border: "1px solid #DDE3EF" }}
      >
        <div className="px-5 py-4">
          <div className="space-y-0">
            {route.stopsKo.map((stopKo, i) => {
              const stopEn = route.stopsEn[i];
              const isFirstOrLast = i === 0 || i === route.stopsKo.length - 1;

              return (
                <div key={i}>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: isFirstOrLast ? "#146CFF" : "#FFFFFF",
                          border: isFirstOrLast ? "none" : "2px solid #9AA5BC",
                        }}
                      >
                        {isFirstOrLast && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between flex-1 py-1">
                      <div>
                        <span
                          className="text-sm font-bold block"
                          style={{
                            color: isFirstOrLast ? "#146CFF" : "#172033",
                            fontFamily: "var(--font-noto)",
                          }}
                        >
                          {stopKo}
                        </span>
                        <span
                          className="text-[11px] block text-gray-400 font-inter"
                        >
                          {stopEn}
                        </span>
                      </div>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(stopEn + " Tokyo")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md transition-colors"
                        style={{
                          background: "#F4F7FB",
                          color: "#146CFF",
                          border: "1px solid #DDE3EF",
                        }}
                      >
                        <MapPin size={12} />
                        <span>위치</span>
                      </a>
                    </div>
                  </div>

                  {i < route.stopsKo.length - 1 && (
                    <div className="flex items-stretch gap-3 py-1">
                      <div className="flex flex-col items-center w-3.5">
                        <div className="w-0.5 h-4" style={{ background: "#DDE3EF" }} />
                      </div>
                      <div />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Open full route in Google Maps */}
        <div style={{ borderTop: "1px solid #DDE3EF", background: "#F8FAFD" }}>
          <a
            href={route.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold tracking-wide transition-colors hover:bg-blue-50"
            style={{ color: "#146CFF", fontFamily: "var(--font-noto)" }}
          >
            <ExternalLink size={15} />
            <span>오늘 전체 동선 구글 지도에서 보기</span>
            <span className="text-[11px] font-normal opacity-70 font-inter">(MAP ↗)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
