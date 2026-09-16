"use client";

import { reservationData } from "@/lib/travel-data";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function Reservation() {
  return (
    <section className="px-4 py-2">
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
          <h2 className="text-sm font-extrabold text-gray-900 font-noto">
            주요 예약 및 시간표
          </h2>
          <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-inter">
            TOTAL 5
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {reservationData.map((res, idx) => {
            const isReserved = res.status === "reserved";
            const isCheck = res.status === "check";

            return (
              <div key={idx} className="py-2.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs font-black text-gray-800 font-inter w-12 flex-shrink-0">
                    {res.time}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-900 truncate font-noto">
                      {res.nameKo}
                    </p>
                    <p className="text-[10px] text-gray-400 truncate font-noto">
                      {res.dayLabelKo} &middot; {res.subtitleKo}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {isReserved ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg font-noto">
                      <CheckCircle2 size={12} />
                      <span>{res.statusLabelKo}</span>
                    </span>
                  ) : isCheck ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-lg font-noto">
                      <AlertCircle size={12} />
                      <span>{res.statusLabelKo}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-lg font-noto">
                      <AlertCircle size={12} />
                      <span>{res.statusLabelKo}</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
