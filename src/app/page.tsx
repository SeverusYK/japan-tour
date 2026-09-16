"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/sections/Hero";
import DayNav from "@/components/sections/DayNav";
import TodaySummary from "@/components/sections/TodaySummary";
import TodayRoute from "@/components/sections/TodayRoute";
import DailyTimeline from "@/components/sections/DailyTimeline";
import Places from "@/components/sections/Places";
import Food from "@/components/sections/Food";
import Shopping from "@/components/sections/Shopping";
import Reservation from "@/components/sections/Reservation";
import Transport from "@/components/sections/Transport";
import Checklist from "@/components/sections/Checklist";
import Footer from "@/components/sections/Footer";

function SectionDivider({ labelKo, labelEn }: { labelKo: string; labelEn: string }) {
  return (
    <div className="px-4 pt-10 pb-3 flex items-center gap-3">
      <div className="flex-1 h-px" style={{ background: "#DDE3EF" }} />
      <div className="text-center">
        <span
          className="text-xs font-bold block"
          style={{ color: "#146CFF", fontFamily: "var(--font-noto)" }}
        >
          {labelKo}
        </span>
        <span
          className="text-[10px] tracking-widest uppercase block"
          style={{ color: "#9AA5BC", fontFamily: "var(--font-inter)" }}
        >
          {labelEn}
        </span>
      </div>
      <div className="flex-1 h-px" style={{ background: "#DDE3EF" }} />
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
      className="min-h-screen pb-12"
      style={{ background: "#F4F7FB" }}
    >
      {/* Hero */}
      <Hero onScrollDown={handleScrollDown} />

      {/* Sticky Day Nav */}
      <div ref={dayNavRef}>
        <DayNav activeDay={activeDay} onDayChange={handleDayChange} />
      </div>

      {/* Day-specific sections */}
      <TodaySummary activeDay={activeDay} />
      <TodayRoute activeDay={activeDay} />

      <SectionDivider labelKo="상세 일정표" labelEn="DAILY TIMELINE" />
      <DailyTimeline activeDay={activeDay} />

      <SectionDivider labelKo="방문 장소 안내" labelEn="PLACES" />
      <Places />

      <SectionDivider labelKo="도쿄 맛집 리스트" labelEn="WHAT WE'RE EATING" />
      <Food />

      <SectionDivider labelKo="쇼핑 체크리스트" labelEn="SHOPPING LIST" />
      <Shopping />

      <SectionDivider labelKo="예약 및 주요 일정" labelEn="RESERVATIONS" />
      <Reservation />

      <SectionDivider labelKo="공항 및 특급열차 교통편" labelEn="AIRPORT & TRANSPORT" />
      <Transport />

      <SectionDivider labelKo="여행 준비물 체크리스트" labelEn="TRAVEL CHECKLIST" />
      <Checklist />

      <Footer />
    </div>
  );
}
