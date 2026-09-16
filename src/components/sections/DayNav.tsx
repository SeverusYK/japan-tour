"use client";

import { useEffect, useRef } from "react";
import { daySummaries } from "@/lib/travel-data";

interface DayNavProps {
  activeDay: number;
  onDayChange: (day: number) => void;
}

export default function DayNav({ activeDay, onDayChange }: DayNavProps) {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = navRef.current?.querySelector(`[data-day="${activeDay}"]`) as HTMLElement;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeDay]);

  return (
    <nav
      className="sticky top-0 z-50 flex items-center border-b shadow-md"
      style={{
        background: "#0A1D37",
        borderColor: "#1E3A5F",
      }}
      ref={navRef}
    >
      {daySummaries.map((day) => {
        const active = day.day === activeDay;
        return (
          <button
            key={day.day}
            data-day={day.day}
            onClick={() => onDayChange(day.day)}
            className="flex-1 flex flex-col items-center py-2.5 transition-all"
            style={{
              borderBottom: active ? "3px solid #146CFF" : "3px solid transparent",
              background: active ? "rgba(20, 108, 255, 0.1)" : "transparent",
            }}
          >
            <span
              className="text-sm font-extrabold"
              style={{
                color: active ? "#FFFFFF" : "#9AA5BC",
                fontFamily: "var(--font-noto)",
              }}
            >
              {day.day}일차
            </span>
            <span
              className="text-[11px] font-semibold mt-0.5"
              style={{
                color: active ? "#72A7FF" : "#6B7A99",
                fontFamily: "var(--font-inter)",
              }}
            >
              {day.shortDateKo}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
