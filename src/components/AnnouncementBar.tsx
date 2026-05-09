"use client";

export default function AnnouncementBar() {
  const text = "👉 100 FREE SAMPLES  •  LIMITED DROP  •  FIRST 100 ONLY  •  NO CREDIT CARD  •  SQUEEZE NOZZLE INNOVATION  •  ";

  return (
    <div
      className="bg-[#1C1712] text-[#F0EAE0] py-2.5 overflow-hidden whitespace-nowrap"
      style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em" }}
    >
      {/* CSS marquee — works on ALL mobile browsers, no JS required */}
      <div
        style={{
          display: "inline-flex",
          animation: "marquee 18s linear infinite",
          willChange: "transform",
        }}
      >
        <span style={{ paddingRight: "2rem" }}>{text}</span>
        <span style={{ paddingRight: "2rem" }}>{text}</span>
        <span style={{ paddingRight: "2rem" }}>{text}</span>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
