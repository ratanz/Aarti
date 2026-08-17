import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoDevanagari = Noto_Serif_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shri Kaal Bhairav Ji",
  description: "A sacred sanctuary dedicated to Lord Kaal Bhairav — featuring Shri Bhairav Chalisa, Kaal Bhairav Ashtakam, and the 108 Sacred Names (Ashtottara Shatanamavali) with pristine typography and meditative clarity.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${notoDevanagari.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050507] text-[#ededed] font-sans selection:bg-amber-500/20 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
