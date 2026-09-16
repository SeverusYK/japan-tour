"use client";

import { useState, useEffect } from "react";
import { shoppingData } from "@/lib/travel-data";
import { CheckSquare, Square, ShoppingBag } from "lucide-react";

const STORAGE_KEY = "jungga-shopping";

export default function Shopping() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {
      /* ignore */
    }
  }, []);

  function toggle(key: string) {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  const totalItems = shoppingData.reduce((acc, b) => acc + b.items.length, 0);
  const doneItems = shoppingData.reduce(
    (acc, b) =>
      acc +
      b.items.filter((_, i) =>
        checked[`${b.checkKey}-${i}`]
      ).length,
    0
  );

  return (
    <section className="px-4 py-2">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2
            className="text-base font-bold"
            style={{ color: "#172033", fontFamily: "var(--font-noto)" }}
          >
            꼭 사야 할 쇼핑 목록
          </h2>
          <p
            className="text-[11px] font-semibold tracking-wider uppercase"
            style={{ color: "#146CFF", fontFamily: "var(--font-inter)" }}
          >
            TO BUY &middot; 브랜드별 위시리스트
          </p>
        </div>
        <div className="text-right">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full"
            style={{ background: "#EEF3FF", color: "#146CFF", fontFamily: "var(--font-inter)" }}
          >
            구매 완료 {doneItems} / {totalItems}개
          </span>
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-4 font-noto">
        2일차 쇼핑 코스에서 사이즈와 색상을 확인하고 구매 후 체크해 보세요.
      </p>

      <div className="space-y-3">
        {shoppingData.map((brand) => (
          <div
            key={brand.brandKo}
            className="rounded-2xl overflow-hidden shadow-sm"
            style={{ background: "#FFFFFF", border: "1px solid #DDE3EF" }}
          >
            {/* Brand header */}
            <div
              className="flex items-center gap-3 px-4 py-3.5 bg-gray-50 border-b border-gray-100"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-100"
              >
                <ShoppingBag size={16} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <h3
                    className="text-sm font-extrabold text-gray-900 font-noto"
                  >
                    {brand.brandKo}
                  </h3>
                  <span className="text-xs text-gray-400 font-inter">
                    ({brand.brandEn})
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 font-noto">
                  매장: <strong className="text-gray-700">{brand.storeKo}</strong> ({brand.storeLocationKo})
                </p>
              </div>
            </div>

            {/* Items list */}
            <div className="px-4 py-2 divide-y divide-gray-100">
              {brand.items.map((item, i) => {
                const key = `${brand.checkKey}-${i}`;
                const done = !!checked[key];
                return (
                  <button
                    key={key}
                    onClick={() => toggle(key)}
                    className="flex items-center gap-3 w-full text-left py-3 transition-all active:scale-[0.98]"
                  >
                    {done ? (
                      <CheckSquare size={20} className="text-blue-600 flex-shrink-0" />
                    ) : (
                      <Square size={20} className="text-gray-300 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <span
                        className="text-sm font-bold block"
                        style={{
                          color: done ? "#9AA5BC" : "#172033",
                          textDecoration: done ? "line-through" : "none",
                          fontFamily: "var(--font-noto)",
                        }}
                      >
                        {item.ko}
                      </span>
                      <span
                        className="text-[10px] block font-inter"
                        style={{
                          color: done ? "#CBD5E1" : "#94A3B8",
                          textDecoration: done ? "line-through" : "none",
                        }}
                      >
                        {item.en}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
