"use client";

import Link from "next/link";
import {
  personalityResults,
  usePsyStore,
  PersonalityKey,
} from "@/store/store";

const typeLabels: Record<PersonalityKey, string> = {
  strawberryCake: "草莓奶油蛋糕型",
  sandwich: "三明治型",
  lemonSoda: "檸檬氣泡水型",
  picnicMat: "野餐墊型",
  polaroid: "拍立得型",
  cilantroTart: "香菜蛋塔型",
};

export default function ResultPage() {
  const answers = usePsyStore((state) => state.answers);
  const resetAnswers = usePsyStore((state) => state.resetAnswers);
  const getScores = usePsyStore((state) => state.getScores);
  const getFinalResult = usePsyStore((state) => state.getFinalResult);

  const scores = getScores();
  const finalResult = getFinalResult();

  if (answers.length < 8) {
    return (
      <section className="min-h-full flex flex-col items-center justify-center px-6 py-10 text-center text-white">
        <h1 className="text-3xl font-bold">還沒有完成測驗</h1>

        <p className="mt-4 leading-7 opacity-90">
          請先完成 8 題問題，再查看你的野餐人格結果。
        </p>

        <Link
          href="/question"
          className="mt-8 rounded-full bg-[#F5E38A] px-6 py-4 font-bold text-[#F15E62]"
        >
          回到測驗
        </Link>
      </section>
    );
  }

  const isMixedResult = Array.isArray(finalResult);
  const mainResultKey = isMixedResult ? finalResult[0] : finalResult;
  const result = personalityResults[mainResultKey];

  function playAgain() {
    resetAnswers();
  }

  return (
    <section className="min-h-full px-5 py-6 text-white sm:px-6 sm:py-7">
      {/* 上方結果主卡 */}
      <div className="rounded-[28px] bg-[#2F6F9F]/28 p-5 text-center shadow-sm ring-1 ring-white/45 backdrop-blur-md">
        <p className="text-xs tracking-[0.35em] text-white/85">
          YOUR PICNIC SOUL
        </p>

        <div className="mt-5 overflow-hidden rounded-[24px] border-2 border-white/70 bg-white/10">
          <img
            src={result.imagePath}
            alt={result.name}
            className="h-[180px] w-full object-contain p-3"
          />
        </div>

        <h1 className="mt-5 text-3xl font-bold leading-tight text-white">
          {isMixedResult ? "混合人格" : result.name}
        </h1>

        {isMixedResult ? (
          <p className="mt-2 text-base font-bold text-white/95">
            {finalResult.map((type) => typeLabels[type]).join(" × ")}
          </p>
        ) : (
          <p className="mt-2 text-lg font-bold text-white/95">
            {result.shortName}
          </p>
        )}

        <p className="mt-3 text-sm font-medium text-white/80">
          {result.keywords}
        </p>
      </div>

      {/* 人格解析 */}
      <div className="mt-5 rounded-[24px] bg-[#2F6F9F]/26 p-5 shadow-sm ring-1 ring-white/45 backdrop-blur-md">
        <h2 className="mb-3 text-xl font-bold">人格解析</h2>

        <p className="text-[15px] font-medium leading-8 text-white/92">
          {isMixedResult
            ? "你的答案同時展現出多種野餐人格特質，代表你不是單一類型，而是會依照情境切換不同面向的人。你可能一邊重視氛圍，一邊也保有自己的獨特節奏。"
            : result.description}
        </p>
      </div>

      {!isMixedResult && (
        <div className="mt-4 space-y-4">
          <div className="rounded-[24px] bg-[#2F6F9F]/24 p-5 ring-1 ring-white/40 backdrop-blur-md">
            <h3 className="font-bold text-[#F5E38A]">你的優點</h3>
            <p className="mt-2 text-[15px] font-medium leading-7 text-white/90">
              {result.strength}
            </p>
          </div>

          <div className="rounded-[24px] bg-[#2F6F9F]/24 p-5 ring-1 ring-white/40 backdrop-blur-md">
            <h3 className="font-bold text-[#F5E38A]">你的盲點</h3>
            <p className="mt-2 text-[15px] font-medium leading-7 text-white/90">
              {result.blindSpot}
            </p>
          </div>

          <div className="rounded-[24px] bg-[#2F6F9F]/24 p-5 ring-1 ring-white/40 backdrop-blur-md">
            <h3 className="font-bold text-[#F5E38A]">你在野餐裡的位置</h3>
            <p className="mt-2 text-[15px] font-medium leading-7 text-white/90">
              {result.picnicRole}
            </p>
          </div>
        </div>
      )}

      {/* 分數 */}
      <div className="mt-5 rounded-[24px] bg-[#2F6F9F]/24 p-5 ring-1 ring-white/40 backdrop-blur-md">
        <h2 className="mb-4 text-xl font-bold">你的計分結果</h2>

        <div className="space-y-3">
          {(Object.keys(scores) as PersonalityKey[]).map((type) => (
            <div key={type}>
              <div className="mb-1 flex justify-between text-sm font-medium text-white/90">
                <span>{typeLabels[type]}</span>
                <span>{scores[type]} 分</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-[#F5E38A]"
                  style={{ width: `${(scores[type] / 8) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部按鈕 */}
      <div className="mt-6 grid grid-cols-1 gap-3 pb-4">
        <Link
          href="/"
          onClick={playAgain}
          className="rounded-full bg-[#F5E38A] px-6 py-4 text-center font-bold text-[#F15E62] shadow-md transition active:scale-95"
        >
          再玩一次
        </Link>

        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className="rounded-full border border-white/70 bg-white/10 px-6 py-4 text-center font-bold text-white transition active:scale-95"
        >
          複製結果網址
        </button>
      </div>
    </section>
  );
}