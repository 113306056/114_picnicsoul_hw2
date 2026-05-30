"use client";

import Link from "next/link";
import { usePsyStore } from "@/store/store";

export default function PreparePage() {
  const answers = usePsyStore((state) => state.answers);

  return (
    <section className="min-h-full flex flex-col items-center justify-center px-6 py-10 text-center text-white">
      <div className="white-doodle-border rounded-[32px] p-8">
        <p className="text-sm tracking-[0.25em] opacity-80">RESULT IS READY</p>

        <h1 className="mt-6 text-3xl font-bold leading-tight">
          你的野餐籃
          <br />
          已經準備好了
        </h1>

        <p className="mt-5 text-base leading-8 opacity-90">
          你完成了 {answers.length} 題。現在可以打開結果，看看你是哪一種夏日野餐人格。
        </p>

        <Link
          href="/result"
          className="mt-8 block rounded-full bg-[#F5E38A] px-6 py-4 text-lg font-bold text-[#F15E62] shadow-lg transition active:scale-95"
        >
          查看我的人格結果
        </Link>
      </div>
    </section>
  );
}