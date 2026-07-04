import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import { EventJsonLd } from "@/components/seo/event-jsonld";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jamrock Fashion Week — Kingston",
    template: "%s — Jamrock Fashion Week",
  },
  description:
    "An archive of the runway in Kingston. Five evenings of Caribbean design, presented across the city. 11–15 November 2026.",
  openGraph: {
    title: "Jamrock Fashion Week — Kingston",
    description:
      "Five evenings of Caribbean design, presented across Kingston. 11–15 November 2026.",
    type: "website",
    locale: "en_JM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} h-full`}>
      <body className="min-h-full">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <EventJsonLd />
      </body>
    </html>
  );
}
