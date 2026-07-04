import { ImageResponse } from "next/og";
import { EVENT } from "@/lib/content";

export const alt = "Jamrock Fashion Week — Kingston, Jamaica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0b",
          color: "#f2efe9",
          padding: 72,
          position: "relative",
        }}
      >
        {/* hairline frame */}
        <div
          style={{
            position: "absolute",
            top: 28,
            right: 28,
            bottom: 28,
            left: 28,
            border: "1px solid rgba(242,239,233,0.22)",
          }}
        />

        {/* top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "rgba(242,239,233,0.6)",
          }}
        >
          <div style={{ display: "flex" }}>Jamrock Fashion Week</div>
          <div style={{ display: "flex" }}>{EVENT.edition}</div>
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 104,
            lineHeight: 1.02,
            letterSpacing: -2,
          }}
        >
          <div style={{ display: "flex" }}>An archive</div>
          <div style={{ display: "flex", fontStyle: "italic" }}>
            of the runway
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(242,239,233,0.75)",
          }}
        >
          <div style={{ display: "flex" }}>{EVENT.city}</div>
          <div style={{ display: "flex" }}>{EVENT.dates}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
