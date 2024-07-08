import SurahItem from "@/components/SurahItem";
import React from "react";

export default function SurahPage({ params }) {
  return (
    <div>
      <SurahItem surahNumber={params?.slug ? params.slug : "1"} />
    </div>
  );
}
