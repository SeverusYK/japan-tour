"use client";

export default function Footer() {
  return (
    <footer
      className="px-6 py-14 text-center mt-6"
      style={{ background: "#0A1D37" }}
    >
      <div className="inline-block px-3 py-1 rounded-full mb-4 bg-blue-950/60 border border-blue-800/50">
        <p
          className="text-xs tracking-[0.2em] text-blue-400 font-inter"
        >
          TOKYO 2026
        </p>
      </div>

      <h2
        className="text-2xl font-extrabold tracking-tight mb-1 text-white font-noto"
      >
        도쿄, 함께 걷는 여행
      </h2>
      <h3
        className="text-xl font-extrabold tracking-tight mb-6 text-blue-500 font-inter"
      >
        TOKYO, TOGETHER.
      </h3>

      <div
        className="w-12 mx-auto mb-6"
        style={{ height: "1px", background: "#1E3A5F" }}
      />

      <p
        className="text-sm font-bold mb-1 text-gray-300 font-noto"
      >
        정가네 가족 &middot; 도쿄 2박 3일 나들이
      </p>
      <p
        className="text-xs text-gray-500 font-inter mb-4"
      >
        2026. 09. 25 (금) &mdash; 09. 27 (일)
      </p>

      <p
        className="text-xs text-blue-300 font-noto"
      >
        건강하고 안전하게, 행복한 추억 많이 만들어요! ❤️
      </p>
    </footer>
  );
}
