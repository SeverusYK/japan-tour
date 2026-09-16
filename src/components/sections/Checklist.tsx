"use client";

import { useState, useEffect } from "react";
import { checklistData } from "@/lib/travel-data";
import { CheckSquare, Square } from "lucide-react";

const STORAGE_KEY = "jungga-checklist";

export default function Checklist() {
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

  const totalItems = checklistData.reduce((acc, cat) => acc + cat.items.length, 0);
  const doneItems = checklistData.reduce(
    (acc, cat) => acc + cat.items.filter((item) => checked[item.key]).length,
    0
  );
  const percent = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

  return (
    <section className="px-4 py-2">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2
            className="text-base font-bold"
            style={{ color: "#172033", fontFamily: "var(--font-noto)" }}
          >
            여행 준비물 & 확인 체크리스트
          </h2>
          <p
            className="text-[11px] font-semibold tracking-wider uppercase"
            style={{ color: "#146CFF", fontFamily: "var(--font-inter)" }}
          >
            BEFORE WE GO &middot; 빠짐없이 챙기기
          </p>
        </div>
        <div className="text-right">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: "#EEF3FF", color: "#146CFF", fontFamily: "var(--font-noto)" }}
          >
            준비 완료 {doneItems} / {totalItems} ({percent}%)
          </span>
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-4 font-noto">
        출발 전 챙긴 물건들을 하나씩 터치해서 완료해 보세요.
      </p>

      {/* Progress bar */}
      <div
        className="h-2 rounded-full mb-5 overflow-hidden shadow-inner"
        style={{ background: "#DDE3EF" }}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percent}%`,
            background: "#146CFF",
          }}
        />
      </div>

      <div className="space-y-4">
        {checklistData.map((cat) => {
          const catDone = cat.items.filter((item) => checked[item.key]).length;
          return (
            <div
              key={cat.key}
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{ background: "#FFFFFF", border: "1px solid #DDE3EF" }}
            >
              {/* Category header */}
              <div
                className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100"
              >
                <div>
                  <span
                    className="text-xs font-extrabold text-gray-900 font-noto block"
                  >
                    {cat.titleKo}
                  </span>
                  <span
                    className="text-[10px] text-gray-400 font-inter uppercase tracking-wider block"
                  >
                    {cat.titleEn}
                  </span>
                </div>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded bg-white border border-gray-200 text-gray-600 font-inter"
                >
                  {catDone} / {cat.items.length}
                </span>
              </div>

              {/* Items */}
              <div className="px-4 py-1 divide-y divide-gray-100">
                {cat.items.map((item) => {
                  const done = !!checked[item.key];
                  return (
                    <button
                      key={item.key}
                      onClick={() => toggle(item.key)}
                      className="flex items-center gap-3 w-full text-left py-3 transition-all active:scale-[0.99]"
                    >
                      {done ? (
                        <CheckSquare
                          size={20}
                          className="text-blue-600 flex-shrink-0"
                        />
                      ) : (
                        <Square
                          size={20}
                          className="text-gray-300 flex-shrink-0"
                        />
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
                          {item.labelKo}
                        </span>
                        <span
                          className="text-[10px] block font-inter"
                          style={{
                            color: done ? "#CBD5E1" : "#94A3B8",
                            textDecoration: done ? "line-through" : "none",
                          }}
                        >
                          {item.labelEn}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
