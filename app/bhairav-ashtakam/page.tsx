import { Metadata } from "next";
import { SACRED_TEXTS } from "@/data/texts";
import ReaderView from "@/components/ReaderView";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Shri Kaal Bhairav Ashtakam (श्री कालभैरवाष्टकम्) — Aarti",
  description: "Complete verses of Shri Kalabhairava Ashtakam composed by Adi Shankaracharya with Sanskrit Devanagari text, transliteration, and English meanings.",
};

export default function BhairavAshtakamPage() {
  const data = SACRED_TEXTS["bhairav-ashtakam"];

  if (!data) {
    notFound();
  }

  return <ReaderView data={data} />;
}
