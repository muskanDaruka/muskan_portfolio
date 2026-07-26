import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const dynamic = "force-static";
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f0c29, #302b63, #06b6d4)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 90,
            height: 90,
            borderRadius: 24,
            background: "rgba(255,255,255,0.12)",
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          MD
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.15 }}>
          {portfolio.hero.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 16, color: "#c7d2fe" }}>
          {portfolio.hero.title}
        </div>
        <div style={{ display: "flex", fontSize: 24, marginTop: 28, color: "#94a3b8", maxWidth: 900 }}>
          React.js &middot; Next.js &middot; TypeScript &middot; Redux &middot; Node.js
        </div>
      </div>
    ),
    { ...size }
  );
}
