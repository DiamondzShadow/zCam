import React from "react"

export default function RainbowStatic() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black select-none">
      {/* Moving rainbow bars */}
      <div className="absolute inset-0 animate-rainbow-static" />

      {/* Optional overlay text prompt */}
      <div className="relative z-10 flex items-center justify-center h-full pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mix-blend-exclusion">
          RAINBOW&nbsp;STATIC
        </h1>
      </div>

      {/* Local styles */}
      <style jsx>{`
        @keyframes rainbowScroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: -2000px 0;
          }
        }

        .animate-rainbow-static {
          background: repeating-linear-gradient(
            to right,
            #ff0033 0%,
            #ff0033 4%,
            #ff8a00 4%,
            #ff8a00 8%,
            #ffe600 8%,
            #ffe600 12%,
            #00ff2a 12%,
            #00ff2a 16%,
            #00cfff 16%,
            #00cfff 20%,
            #6733ff 20%,
            #6733ff 24%,
            #ff33c3 24%,
            #ff33c3 28%,
            #ff0033 28%,
            #ff0033 32%
          );
          background-size: 2000px 100%;
          animation: rainbowScroll 1.2s linear infinite;
          filter: contrast(1.4) saturate(1.6);
        }
      `}</style>
    </div>
  )
}