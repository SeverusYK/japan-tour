"use client";

import { UtensilsCrossed } from "lucide-react";
import { foodData } from "@/lib/travel-data";

const FOOD_MEALS: Record<number, string> = {
  1: "1일차 저녁",
  2: "2일차 점심 / 저녁",
  3: "3일차 점심",
};

export default function Food() {
  return (
    <section className="px-4 py-2">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2
            className="text-base font-bold"
            style={{ color: "#172033", fontFamily: "var(--font-noto)" }}
          >
            이번 여행의 도쿄 맛집 리스트
          </h2>
          <p
            className="text-[11px] font-semibold tracking-wider uppercase"
            style={{ color: "#146CFF", fontFamily: "var(--font-inter)" }}
          >
            WHAT WE&apos;RE EATING &middot; 엄선된 4대 미식
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-4 font-noto">
        부모님 입맛을 고려해 정갈하고 맛있는 대표 메뉴들로 엄선했습니다.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {foodData.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-4 shadow-sm"
            style={{ background: "#FFFFFF", border: "1px solid #DDE3EF" }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-md"
                    style={{ background: "#EEF3FF", color: "#146CFF", fontFamily: "var(--font-noto)" }}
                  >
                    {item.categoryKo}
                  </span>
                  <span className="text-[10px] block text-gray-400 font-inter mt-0.5">
                    {item.categoryEn}
                  </span>
                </div>
              </div>
              <span
                className="text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-600 font-noto"
              >
                {item.day}일차
              </span>
            </div>

            <h3
              className="text-base font-extrabold text-gray-900 mb-0.5"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              {item.restaurantKo}
            </h3>
            <p
              className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2 font-inter"
            >
              {item.restaurantEn}
            </p>

            <p
              className="text-xs text-gray-600 leading-relaxed font-noto bg-gray-50 p-2.5 rounded-xl border border-gray-100"
            >
              {item.descriptionKo}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
