"use client";

import { ExternalLink, Clock, MapPin } from "lucide-react";
import { placesData } from "@/lib/travel-data";

export default function Places() {
  return (
    <section className="px-4 py-2">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2
            className="text-base font-bold"
            style={{ color: "#172033", fontFamily: "var(--font-noto)" }}
          >
            주요 방문 장소 & 명소 안내
          </h2>
          <p
            className="text-[11px] font-semibold tracking-wider uppercase"
            style={{ color: "#146CFF", fontFamily: "var(--font-inter)" }}
          >
            PLACES GUIDE &middot; 도쿄 랜드마크
          </p>
        </div>
      </div>
      <p
        className="text-xs mb-4 text-gray-500 font-noto"
      >
        출발하기 전 한 번, 도착해서 길 찾을 때 한 번 확인하세요.
      </p>

      <div className="space-y-3">
        {placesData.map((place, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-sm"
            style={{ background: "#FFFFFF", border: "1px solid #DDE3EF" }}
          >
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="text-[11px] font-bold px-2 py-0.5 rounded-md"
                  style={{ background: "#EEF3FF", color: "#146CFF", fontFamily: "var(--font-noto)" }}
                >
                  {place.categoryKo}
                </span>
                <span className="text-[10px] text-gray-400 font-inter">
                  {place.categoryEn}
                </span>
              </div>

              <h3
                className="text-base font-extrabold mb-0.5 text-gray-900"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                {place.nameKo}
              </h3>
              <p
                className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 font-inter"
              >
                {place.nameEn}
              </p>

              <p
                className="text-xs leading-relaxed text-gray-600 font-noto"
              >
                {place.descriptionKo}
              </p>

              {place.hours && (
                <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-gray-100">
                  <Clock size={12} className="text-gray-400 flex-shrink-0" />
                  <span
                    className="text-xs text-gray-500 font-noto"
                  >
                    운영 시간: <strong className="text-gray-700 font-inter">{place.hours}</strong>
                  </span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div
              className="flex border-t"
              style={{ borderColor: "#DDE3EF", background: "#F8FAFD" }}
            >
              {place.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-bold transition-colors hover:bg-blue-50"
                  style={{
                    color: "#146CFF",
                    fontFamily: "var(--font-noto)",
                    borderRight: i < place.links.length - 1 ? "1px solid #DDE3EF" : "none",
                  }}
                >
                  <MapPin size={12} />
                  <span>{link.labelKo}</span>
                  <span className="text-[10px] opacity-70 font-inter">({link.labelEn})</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
