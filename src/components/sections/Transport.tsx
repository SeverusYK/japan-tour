"use client";

import { ArrowDown } from "lucide-react";

export default function Transport() {
  return (
    <section className="px-4 py-2">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2
            className="text-base font-bold"
            style={{ color: "#172033", fontFamily: "var(--font-noto)" }}
          >
            공항 ↔ 도쿄 특급열차 교통편
          </h2>
          <p
            className="text-[11px] font-semibold tracking-wider uppercase"
            style={{ color: "#146CFF", fontFamily: "var(--font-inter)" }}
          >
            NARITA &harr; TOKYO &middot; N&apos;EX 안내
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-4 font-noto">
        나리타 익스프레스(N&apos;EX)를 타고 편안하고 안전하게 이동합니다.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Arrival */}
        <div
          className="rounded-2xl overflow-hidden shadow-sm"
          style={{ background: "#FFFFFF", border: "1px solid #DDE3EF" }}
        >
          <div
            className="px-4 py-3.5"
            style={{ background: "#0A1D37" }}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded bg-blue-600 text-white font-noto"
              >
                1일차 도쿄 도착
              </span>
              <span
                className="text-xs text-blue-300 font-inter"
              >
                SEP 25 &middot; FRI
              </span>
            </div>
            <h3
              className="text-sm font-extrabold text-white mt-1 font-noto"
            >
              공항에서 고엔지 숙소까지
            </h3>
          </div>

          <div className="p-4 space-y-2.5">
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="text-xs font-black text-blue-600 font-inter block">13:00</span>
              <strong className="text-sm text-gray-900 font-noto block">나리타 국제공항 도착</strong>
              <span className="text-xs text-gray-500 font-noto block">입국 심사 및 수하물 수령</span>
            </div>

            <div className="flex justify-center my-0.5">
              <ArrowDown size={14} className="text-blue-500" />
            </div>

            <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
              <span className="text-[10px] font-bold text-blue-600 uppercase font-inter block">SPECIAL TRAIN</span>
              <strong className="text-sm text-blue-900 font-noto block">나리타 익스프레스 (N&apos;EX) 탑승</strong>
              <span className="text-xs text-blue-700 font-noto block">나리타 공항 → 신주쿠역 직통 (약 80분 소요)</span>
            </div>

            <div className="flex justify-center my-0.5">
              <ArrowDown size={14} className="text-blue-500" />
            </div>

            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="text-xs font-black text-blue-600 font-inter block">17:10</span>
              <strong className="text-sm text-gray-900 font-noto block">고엔지 숙소 도착</strong>
              <span className="text-xs text-gray-500 font-noto block">JR 츄오선 환승 후 숙소 체크인</span>
            </div>
          </div>
        </div>

        {/* Departure */}
        <div
          className="rounded-2xl overflow-hidden shadow-sm"
          style={{ background: "#FFFFFF", border: "1px solid #DDE3EF" }}
        >
          <div
            className="px-4 py-3.5"
            style={{ background: "#0A1D37" }}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded bg-blue-600 text-white font-noto"
              >
                3일차 서울 귀국
              </span>
              <span
                className="text-xs text-blue-300 font-inter"
              >
                SEP 27 &middot; SUN
              </span>
            </div>
            <h3
              className="text-sm font-extrabold text-white mt-1 font-noto"
            >
              숙소에서 공항 및 인천 귀국
            </h3>
          </div>

          <div className="p-4 space-y-2.5">
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="text-xs font-black text-blue-600 font-inter block">13:08 출발</span>
              <strong className="text-sm text-gray-900 font-noto block">신주쿠역 N&apos;EX 29호 탑승</strong>
              <span className="text-xs text-gray-500 font-noto block">신주쿠역에서 지정석 탑승 (정시 출발)</span>
            </div>

            <div className="flex justify-center my-0.5">
              <ArrowDown size={14} className="text-blue-500" />
            </div>

            <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
              <span className="text-xs font-black text-blue-600 font-inter block">14:27 도착</span>
              <strong className="text-sm text-blue-900 font-noto block">나리타 공항 제1터미널 도착</strong>
              <span className="text-xs text-blue-700 font-noto block">수하물 부치기 및 면세점 선물 쇼핑</span>
            </div>

            <div className="flex justify-center my-0.5">
              <ArrowDown size={14} className="text-blue-500" />
            </div>

            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="text-xs font-black text-blue-600 font-inter block">17:30 출발</span>
              <strong className="text-sm text-gray-900 font-noto block">도쿄 출발 &rarr; 인천공항 귀국</strong>
              <span className="text-xs text-gray-500 font-noto block">안전하고 행복하게 여행 마무리!</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 p-3 rounded-xl bg-blue-50 border border-blue-100 text-center">
        <p className="text-xs text-blue-900 font-bold font-noto">
          💡 일요일에는 무리한 관광 없이 라멘 식사 후 곧바로 공항으로 이동합니다.
        </p>
      </div>
    </section>
  );
}
