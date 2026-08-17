import { Metadata } from "next";
import { SACRED_TEXTS } from "@/data/texts";
import ReaderView from "@/components/ReaderView";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "108 Names of Lord Kaal Bhairav (श्री कालभैरवाष्टोत्तर शतनामावली) — Aarti",
  description: "Complete 108 sacred names and mantras of Lord Kaal Bhairav (Ashtottara Shatanamavali) with Sanskrit Devanagari lyrics, transliteration, and English meanings.",
};

export default function Bhairav108NamesPage() {
  const data = SACRED_TEXTS["bhairav-108-names"];

  if (!data) {
    notFound();
  }

  return <ReaderView data={data} />;
}
