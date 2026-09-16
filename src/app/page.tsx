"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/sections/Hero";
import DayNav from "@/components/sections/DayNav";
import TodaySummary from "@/components/sections/TodaySummary";
import DailyTimeline from "@/components/sections/DailyTimeline";
import Reservation from "@/components/sections/Reservation";
import Shopping from "@/components/sections/Shopping";
import Checklist from "@/components/sections/Checklist";
import Footer from "@/components/sections/Footer";

function SectionDivider({ labelKo }: { labelKo: string }) {
  return (
    <div className="px-4 pt-8 pb-2 flex items-center gap-3">
      <div className="flex-1 h-px bg-gray-200" />
      <span
        className="text-xs font-bold text-gray-500 font-noto tracking-wider"
      >
        {labelKo}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

export default function Home() {
  const [activeDay, setActiveDay] = useState(1);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const dayNavRef = useRef<HTMLDivElement>(null);

  // Auto-detect current day based on date (2026.09.25~27)
  useEffect(() => {
    const now = new Date();
    const d1 = new Date("2026-09-25");
    const d2 = new Date("2026-09-26");
    const d3 = new Date("2026-09-27");
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    if (today.getTime() === d1.getTime()) setActiveDay(1);
    else if (today.getTime() === d2.getTime()) setActiveDay(2);
    else if (today.getTime() === d3.getTime()) setActiveDay(3);
  }, []);

  function handleScrollDown() {
    dayNavRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleDayChange(day: number) {
    setActiveDay(day);
    dayNavRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      ref={mainContentRef}
      className="min-h-screen pb-8 bg-[#F4F7FB]"
    >
      {/* 1. Hero: 간결한 타이틀 & 여행 날짜 */}
      <Hero onScrollDown={handleScrollDown} />

      {/* 2. Sticky Day Nav: 1일차 / 2일차 / 3일차 */}
      <div ref={dayNavRef}>
        <DayNav activeDay={activeDay} onDayChange={handleDayChange} />
      </div>

      {/* 3. Today Summary: 오늘 테마 + 코스 칩 + 구글 지도 전체 보기 버튼 */}
      <TodaySummary activeDay={activeDay} />

      {/* 4. Daily Timeline: 시간별 상세 일정 & 길찾기 버튼 */}
      <SectionDivider labelKo="오늘의 시간별 일정표" />
      <DailyTimeline activeDay={activeDay} />

      {/* 5. Reservation: 놓치지 말아야 할 5대 예약 현황 */}
      <SectionDivider labelKo="주요 예약 및 시간" />
      <Reservation />

      {/* 6. Shopping: 현장 위시리스트 체크 */}
      <SectionDivider labelKo="도쿄 쇼핑 위시리스트" />
      <Shopping />

      {/* 7. Checklist: 출발 전 짐 싸기 체크 */}
      <SectionDivider labelKo="출발 전 준비물 체크" />
      <Checklist />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
