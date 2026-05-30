"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizData, usePsyStore, PersonalityKey } from "@/store/store";

export default function QuestionPage() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);

  const answers = usePsyStore((state) => state.answers);
  const setAnswer = usePsyStore((state) => state.setAnswer);

  const currentQuestion = quizData[questionIndex];
  const currentSelected = answers[questionIndex];
  const progress = ((questionIndex + 1) / quizData.length) * 100;

  function chooseOption(type: PersonalityKey) {
    setAnswer(questionIndex, type);
  }

  function goPrev() {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  }

  function goNext() {
    if (!currentSelected) return;

    if (questionIndex < quizData.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      router.push("/prepare");
    }
  }

  return (
    <section className="flex h-full flex-col px-5 py-5 text-white sm:px-6 sm:py-6">
      {/* 進度區 */}
      <div className="rounded-2xl bg-[#2F6F9F]/32 p-3 shadow-sm ring-1 ring-white/35 backdrop-blur-md">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-white/95">
          <span>
            Question {questionIndex + 1} / {quizData.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/28 ring-1 ring-white/30">
          <div
            className="h-full rounded-full bg-white/90 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 題目卡 */}
      <div className="mt-4 rounded-[24px] bg-[#285F8B]/40 p-5 shadow-sm ring-1 ring-white/45 backdrop-blur-md">
        <p className="mb-2 text-[11px] font-bold tracking-[0.22em] text-[#F5E38A]">
          夏日野餐邀請函
        </p>

        <h1 className="text-[21px] font-bold leading-8 text-white drop-shadow-sm">
          {currentQuestion.title}
        </h1>
      </div>

      {/* 選項區 */}
      <div className="mt-4 flex-1 space-y-2.5">
        {currentQuestion.options.map((option) => {
          const isSelected = currentSelected === option.type;

          return (
            <button
              key={option.label}
              onClick={() => chooseOption(option.type)}
              className={`
                flex w-full items-center rounded-2xl border px-4 py-2.5 text-left shadow-sm transition active:scale-[0.985]
                ${
                  isSelected
                    ? "border-[#F5E38A]/90 bg-[#F5E38A]/92 text-[#EF5B62]"
                    : "border-white/38 bg-[#2F6F9F]/30 text-white hover:border-white/80 hover:bg-white/22"
                }
              `}
            >
              <span
                className={`
                  mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold
                  ${
                    isSelected
                      ? "bg-[#EF5B62] text-[#F5E38A]"
                      : "bg-white/92 text-[#3F82B7]"
                  }
                `}
              >
                {option.label}
              </span>

              <span className="text-[14px] font-semibold leading-6 sm:text-[15px]">
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* 上一題 / 下一題 */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          onClick={goPrev}
          disabled={questionIndex === 0}
          className={`
            rounded-full px-5 py-3 text-sm font-bold shadow-sm transition active:scale-95
            ${
              questionIndex === 0
                ? "cursor-not-allowed border border-white/25 bg-white/8 text-white/35"
                : "border border-white/70 bg-white/10 text-white hover:bg-white/85 hover:text-[#3F82B7]"
            }
          `}
        >
          上一題
        </button>

        <button
          onClick={goNext}
          disabled={!currentSelected}
          className={`
            rounded-full px-5 py-3 text-sm font-bold shadow-md transition active:scale-95
            ${
              !currentSelected
                ? "cursor-not-allowed bg-[#F5E38A]/35 text-[#EF5B62]/45"
                : "bg-[#F5E38A]/95 text-[#EF5B62] hover:brightness-105"
            }
          `}
        >
          {questionIndex === quizData.length - 1 ? "看結果" : "下一題"}
        </button>
      </div>

      <p className="mt-2 text-center text-[11px] font-medium text-white/68">
        請先選擇一個答案，再按下一題
      </p>
    </section>
  );
}