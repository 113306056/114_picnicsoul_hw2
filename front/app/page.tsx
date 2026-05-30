"use client";

import Link from "next/link";
import { usePsyStore } from "@/store/store";

export default function Home() {
  const resetAnswers = usePsyStore((state) => state.resetAnswers);

  function startTest() {
    resetAnswers();
  }

  return (
    <section className="relative min-h-[calc(100vh-48px)] overflow-hidden bg-[#7fb6e6] text-white">
      <img
        src="/cover.png"
        alt="Summer Picnic Soul 封面"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/0" />

      <Link
        href="/question"
        onClick={startTest}
        aria-label="開始測驗"
        className="absolute bottom-[8%] left-1/2 h-[72px] w-[74%] -translate-x-1/2 rounded-full"
      >
        <span className="sr-only">開始測驗</span>
      </Link>
    </section>
  );
}