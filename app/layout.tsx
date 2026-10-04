import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Keenan Oliver — Practice",
  description:
    "Keenan Oliver is a designer and creative director from Lentegeur, Mitchells Plain, and founder of Artefacts Office.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={plexMono.variable}>{children}</body>
    </html>
  );
}
