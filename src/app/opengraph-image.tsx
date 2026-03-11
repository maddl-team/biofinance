import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background:
            "linear-gradient(135deg, rgba(8,46,58,1) 0%, rgba(17,106,124,1) 100%)",
          color: "#ffffff",
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -1,
            marginBottom: 16,
          }}
        >
          Biofinance
        </div>
        <div style={{ fontSize: 36, fontWeight: 500, opacity: 0.92 }}>
          Cessione del Quinto e Prestiti Personali
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
