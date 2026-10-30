import type { Metadata, Viewport } from "next";
import { Archivo_Black, Permanent_Marker, Space_Grotesk } from "next/font/google";
import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { portfolio } from "@/data/portfolio";
import { siteUrl } from "@/config/site";
import { theme, themeToCss } from "@/config/theme";
import "./globals.css";

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker-face",
  display: "swap",
});

const siteTitle = `${portfolio.profile.name} — Portfolio Comic`;
const siteDescription =
  "Portofolio komik interaktif seorang pelajar SMK jurusan PPLG: frontend development, desain UI/UX, dan game development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s — ${portfolio.profile.name}`,
  },
  description: siteDescription,
  applicationName: "Portfolio Comic",
  authors: [{ name: portfolio.profile.name }],
  keywords: [
    "portofolio",
    "frontend developer",
    "game developer",
    "UI UX",
    "pelajar SMK",
    "PPLG",
    "Next.js",
  ],
  creator: portfolio.profile.name,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "id_ID",
    siteName: "Portfolio Comic",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: theme.colors.paper,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${archivo.variable} ${grotesk.variable} ${marker.variable}`}
    >
      <head>
        <style id="comic-theme" dangerouslySetInnerHTML={{ __html: themeToCss() }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Lewati ke konten
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
