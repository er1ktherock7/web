import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "./globals.css";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://er1ktherock7.github.io/web/";
export const metadata: Metadata = {
  title: {
    default: "Herick — Data, code & a little rhythm.",
    template: "%s — Herick",
  },
  description:
    "Lucas Herick. Data analytics, data engineering, and software development. Analytical thinking meets creative curiosity. Based in Brazil.",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: {
    title: "Herick — Data, code & a little rhythm.",
    description:
      "Analytical thinking. Creative curiosity. Data and software by Lucas Herick.",
    type: "website",
    images: [{ url: "/web/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: siteUrl
    ? { index: true, follow: true }
    : { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
