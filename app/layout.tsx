import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const measurementId = "G-24JZK400JT";

export const metadata: Metadata = {
  title: "Keenan Oliver — Practice",
  description:
    "Keenan Oliver is a designer and creative director from Lentegeur, Mitchells Plain, and founder of Artefacts Office.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `}
        </Script>
      </head>
      <body className={plexMono.variable}>{children}</body>
    </html>
  );
}
