import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = `${portfolio.profile.name} — Portfolio Comic`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#F2EBDD",
          padding: 34,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "8px solid #15130F",
            backgroundColor: "#FFFCF5",
            padding: 48,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -110,
              top: -110,
              width: 420,
              height: 420,
              borderRadius: 9999,
              backgroundColor: "#2453F0",
              border: "8px solid #15130F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: 132,
              fontWeight: 900,
            }}
          >
            &lt;/&gt;
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                display: "flex",
                border: "4px solid #15130F",
                backgroundColor: "#15130F",
                color: "#F2EBDD",
                padding: "8px 16px",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              PORTFOLIO EDITION
            </span>
            <span
              style={{
                display: "flex",
                border: "4px solid #15130F",
                padding: "8px 16px",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              ISSUE #001
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 700, color: "#1737AE", letterSpacing: 5 }}>
              A COMIC ABOUT CODE &amp; CURIOSITY
            </span>
            <span
              style={{
                marginTop: 12,
                fontSize: 112,
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: -5,
                color: "#15130F",
                textTransform: "uppercase",
              }}
            >
              {portfolio.profile.name}
            </span>
            <span
              style={{
                marginTop: 20,
                maxWidth: 760,
                fontSize: 26,
                lineHeight: 1.35,
                color: "#585145",
              }}
            >
              {portfolio.profile.tagline}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "4px solid #15130F",
              paddingTop: 20,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#585145",
            }}
          >
            <span>{portfolio.profile.roles.join(" / ").toUpperCase()}</span>
            <span>PORTFOLIO COMIC · 2026</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
