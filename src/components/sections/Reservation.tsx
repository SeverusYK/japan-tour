"use client";

import { reservationData } from "@/lib/travel-data";
import { CheckCircle, AlertCircle, Circle } from "lucide-react";

const STATUS_CONFIG = {
  reserved: {
    icon: CheckCircle,
    color: "#146CFF",
    bg: "#EEF3FF",
    labelKo: "예약 완료",
    labelEn: "RESERVED",
  },
  check: {
    icon: AlertCircle,
    color: "#E84040",
    bg: "#FFF0F0",
    labelKo: "티켓 확인",
    labelEn: "CHECK TICKET",
  },
  needed: {
    icon: Circle,
    color: "#6B7A99",
    bg: "#F4F7FB",
    labelKo: "예약 확인 필요",
    labelEn: "RESERVATION",
  },
};

export default function Reservation() {
  return (
    <section className="px-4 py-2">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2
            className="text-base font-bold"
            style={{ color: "#172033", fontFamily: "var(--font-noto)" }}
          >
            예약 및 시간 확인 일정
          </h2>
          <p
            className="text-[11px] font-semibold tracking-wider uppercase"
            style={{ color: "#146CFF", fontFamily: "var(--font-inter)" }}
          >
            DON&apos;T MISS &middot; 중요 사전 예약
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-4 font-noto">
        정해진 시간에 늦지 않도록 미리 체크해야 하는 핵심 일정 모음입니다.
      </p>

      <div
        className="rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100"
        style={{ background: "#FFFFFF", border: "1px solid #DDE3EF" }}
      >
        {reservationData.map((res, idx) => {
          const cfg = STATUS_CONFIG[res.status];
          const Icon = cfg.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 p-4"
            >
              {/* Day + Time */}
              <div className="w-16 flex-shrink-0 text-center py-1 rounded-xl bg-gray-50 border border-gray-100">
                <p
                  className="text-[11px] font-bold text-blue-600 font-noto"
                >
                  {res.dayLabelKo}
                </p>
                <p
                  className="text-xs font-black text-gray-800 font-inter mt-0.5"
                >
                  {res.time}
                </p>
              </div>

              {/* Name + Subtitle */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-sm font-extrabold text-gray-900 truncate font-noto"
                >
                  {res.nameKo}
                </h3>
                <p
                  className="text-[10px] text-gray-400 truncate uppercase font-inter"
                >
                  {res.nameEn}
                </p>
                <p
                  className="text-xs text-gray-600 truncate mt-0.5 font-noto"
                >
                  {res.subtitleKo}
                </p>
              </div>

              {/* Status Badge */}
              <div
                className="flex flex-col items-end gap-0.5 px-2.5 py-1.5 rounded-xl flex-shrink-0"
                style={{ background: cfg.bg }}
              >
                <div className="flex items-center gap-1">
                  <Icon size={12} style={{ color: cfg.color }} />
                  <span
                    className="text-xs font-bold"
                    style={{ color: cfg.color, fontFamily: "var(--font-noto)" }}
                  >
                    {cfg.labelKo}
                  </span>
                </div>
                <span
                  className="text-[9px] font-semibold opacity-75 font-inter"
                  style={{ color: cfg.color }}
                >
                  {cfg.labelEn}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
