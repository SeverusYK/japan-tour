"use client";

import { useState } from "react";

const CORRECT_CODE = "0925";
const STORAGE_KEY = "jungga-tokyo-auth";

export default function PasscodeScreen({ onAuth }: { onAuth: () => void }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  function handleDigit(d: string) {
    if (code.length >= 4) return;
    const next = code + d;
    setCode(next);
    setError(false);
    if (next.length === 4) {
      setTimeout(() => checkCode(next), 100);
    }
  }

  function checkCode(c: string) {
    if (c === CORRECT_CODE) {
      localStorage.setItem(STORAGE_KEY, "ok");
      onAuth();
    } else {
      setShake(true);
      setError(true);
      setTimeout(() => {
        setCode("");
        setShake(false);
      }, 600);
    }
  }

  function handleDelete() {
    setCode((c) => c.slice(0, -1));
    setError(false);
  }

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "#0A1D37" }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p
          className="text-xs tracking-[0.25em] mb-4"
          style={{ color: "#72A7FF", fontFamily: "var(--font-inter)" }}
        >
          TOKYO 2026
        </p>
        <h1
          className="text-4xl font-bold leading-none mb-1"
          style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}
        >
          TOKYO,
        </h1>
        <h1
          className="text-4xl font-bold leading-none mb-6"
          style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}
        >
          TOGETHER.
        </h1>
        <p
          className="text-sm"
          style={{ color: "#6B7A99", fontFamily: "var(--font-noto)" }}
        >
          정가네 가족 전용
        </p>
      </div>

      {/* Dots */}
      <div
        className="flex gap-4 mb-2"
        style={{
          animation: shake ? "shake 0.4s ease" : undefined,
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full transition-all duration-200"
            style={{
              background:
                i < code.length
                  ? error
                    ? "#E84040"
                    : "#146CFF"
                  : "#1E3A5F",
            }}
          />
        ))}
      </div>

      {/* Error message */}
      <div className="h-8 flex items-center justify-center mb-4">
        {error && (
          <p
            className="text-xs"
            style={{ color: "#E84040", fontFamily: "var(--font-noto)" }}
          >
            잘못된 코드입니다
          </p>
        )}
      </div>

      {/* Keypad */}
      <div className="grid grid-cols-3 gap-3 w-64">
        {keys.map((k, idx) => {
          if (k === "") return <div key={idx} />;
          return (
            <button
              key={idx}
              onClick={() => (k === "del" ? handleDelete() : handleDigit(k))}
              className="flex items-center justify-center rounded-2xl text-lg font-medium transition-all active:scale-95"
              style={{
                height: "64px",
                background: k === "del" ? "transparent" : "#112544",
                color: k === "del" ? "#6B7A99" : "#FFFFFF",
                fontFamily: "var(--font-inter)",
                border: k === "del" ? "none" : "1px solid #1E3A5F",
              }}
            >
              {k === "del" ? "⌫" : k}
            </button>
          );
        })}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}
