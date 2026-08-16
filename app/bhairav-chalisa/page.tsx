import { Metadata } from "next";
import { SACRED_TEXTS } from "@/data/texts";
import ReaderView from "@/components/ReaderView";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Shri Bhairav Chalisa (श्री भैरव चालीसा) — Aarti",
  description: "Complete text of Shri Bhairav Chalisa with Hindi Devanagari lyrics, English transliteration, and spiritual meaning.",
};

export default function BhairavChalisaPage() {
  const data = SACRED_TEXTS["bhairav-chalisa"];

  if (!data) {
    notFound();
  }

  return <ReaderView data={data} />;
}
