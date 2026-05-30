"use client";

import Link from "next/link";
import { usePsyStore } from "@/store/store";

export default function Home() {
  const resetAnswers = usePsyStore((state) => state.resetAnswers);

  function startTest() {
    resetAnswers();
  }

  return (
    <section className="relative h-full min-h-0 overflow-hidden">
      <img
        src="/cover.png"
        alt="Summer Picnic Soul 封面"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />

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
