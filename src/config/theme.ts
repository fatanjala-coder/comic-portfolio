/**
 * TEMA TERPUSAT
 * ------------------------------------------------------------
 * Ubah palet, ketebalan garis, sudut, dan bayangan komik di sini.
 * Nilai di bawah otomatis dikirim ke CSS sebagai custom properties,
 * jadi kamu tidak perlu menyentuh banyak file saat ingin rebranding.
 */
export const theme = {
  colors: {
    paper: "#F2EBDD",
    paperDeep: "#E5DAC4",
    surface: "#FFFCF5",
    ink: "#15130F",
    inkSoft: "#585145",
    accent: "#2453F0",
    accentDeep: "#1737AE",
    accentSoft: "#CBD8FF",
    highlight: "#F5C84B",
  },
  borders: {
    width: "3px",
    widthThick: "4px",
  },
  radius: {
    panel: "8px",
    bubble: "26px",
    pill: "999px",
  },
  shadow: {
    offset: "8px",
    offsetSmall: "4px",
    offsetLarge: "12px",
  },
  layout: {
    maxWidth: "1240px",
    headerHeight: "76px",
  },
} as const;

/** Dihasilkan sekali di root layout agar theme.ts menjadi satu-satunya sumber warna. */
export function themeToCss() {
  const { colors, borders, radius, shadow, layout } = theme;

  return `:root{` +
    `--paper:${colors.paper};` +
    `--paper-deep:${colors.paperDeep};` +
    `--surface:${colors.surface};` +
    `--ink:${colors.ink};` +
    `--ink-soft:${colors.inkSoft};` +
    `--accent:${colors.accent};` +
    `--accent-deep:${colors.accentDeep};` +
    `--accent-soft:${colors.accentSoft};` +
    `--highlight:${colors.highlight};` +
    `--stroke:${borders.width};` +
    `--stroke-thick:${borders.widthThick};` +
    `--corner-panel:${radius.panel};` +
    `--corner-bubble:${radius.bubble};` +
    `--corner-pill:${radius.pill};` +
    `--shadow-offset:${shadow.offset};` +
    `--shadow-offset-sm:${shadow.offsetSmall};` +
    `--shadow-offset-lg:${shadow.offsetLarge};` +
    `--page-max:${layout.maxWidth};` +
    `--header-height:${layout.headerHeight};` +
    `}`;
}
