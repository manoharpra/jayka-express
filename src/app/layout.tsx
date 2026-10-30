import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari, Tiro_Devanagari_Hindi } from "next/font/google";
import { BRAND, PHONES, SITE_URL } from "@/lib/constants";
import { Providers } from "@/components/effects/Providers";
import "./globals.css";

const body = Noto_Sans_Devanagari({ subsets: ["devanagari", "latin"], variable: "--font-body", display: "swap" });
const heading = Tiro_Devanagari_Hindi({ subsets: ["devanagari", "latin"], weight: "400", variable: "--font-heading", display: "swap" });

const description = `${BRAND.hi} — ${BRAND.subtitle}। समोसा, चाउमीन, मोमो, बिरयानी, थाली और बहुत कुछ। सीधे कॉल करें।`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BRAND.hi} | ${BRAND.subtitle}`,
  description,
  openGraph: { title: `${BRAND.hi} (${BRAND.en})`, description, type: "website", locale: "hi_IN", siteName: BRAND.en },
};

export const viewport: Viewport = { themeColor: "#A91520", width: "device-width", initialScale: 1 };

// Only verified facts: name, description, phone numbers. No address/hours/ratings invented.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: `${BRAND.hi} (${BRAND.en})`,
  description: BRAND.subtitle,
  telephone: PHONES.map((p) => p.href.replace("tel:", "")),
  url: SITE_URL,
  inLanguage: "hi-IN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className={`${body.variable} ${heading.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

