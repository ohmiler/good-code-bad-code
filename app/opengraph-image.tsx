import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = siteConfig.ogImageAlt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.22), transparent 34%), radial-gradient(circle at 80% 18%, rgba(248,113,113,0.2), transparent 32%), #070b12",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            border: "1px solid rgba(148,163,184,0.28)",
            borderRadius: "28px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            padding: "56px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#94a3b8",
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              marginBottom: 34,
              textTransform: "uppercase",
            }}
          >
            Code Review Example Library
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 108,
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            <span
              style={{
                color: "#4ade80",
                textShadow: "0 0 28px rgba(74,222,128,0.62)",
              }}
            >
              Good
            </span>
            <span style={{ color: "#f8fafc", margin: "0 28px" }}>Code</span>
            <span
              style={{
                color: "#fb7185",
                textShadow: "0 0 28px rgba(251,113,133,0.62)",
              }}
            >
              Bad
            </span>
            <span style={{ color: "#f8fafc", marginLeft: 28 }}>Code</span>
          </div>
          <div
            style={{
              color: "#cbd5e1",
              display: "flex",
              fontSize: 34,
              lineHeight: 1.35,
              marginTop: 38,
              textAlign: "center",
              width: "780px",
            }}
          >
            Learn code review patterns through side-by-side examples across
            languages, frameworks, and tools.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
