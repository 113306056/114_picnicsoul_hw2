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
    <section className="min-h-full flex flex-col px-5 py-6 text-white sm:px-7 sm:py-8">
      {/* 進度區 */}
      <div className="rounded-3xl bg-[#2f6f9f]/70 p-4 shadow-lg ring-1 ring-white/40 backdrop-blur-md">
        <div className="mb-3 flex items-center justify-between text-sm font-semibold text-white">
          <span>
            Question {questionIndex + 1} / {quizData.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/25 ring-1 ring-white/40">
          <div
            className="h-full rounded-full bg-[#F5E38A] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 題目卡 */}
      <div className="mt-5 rounded-[28px] bg-[#285f8b]/85 p-6 shadow-xl ring-2 ring-white/70 backdrop-blur-md">
        <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#F5E38A]">
          夏日野餐邀請函
        </p>

        <h1 className="text-xl font-bold leading-8 text-white sm:text-2xl sm:leading-9">
          {currentQuestion.title}
        </h1>
      </div>

      {/* 選項 */}
      <div className="mt-5 flex-1 space-y-3">
        {currentQuestion.options.map((option) => {
          const isSelected = currentSelected === option.type;

          return (
            <button
              key={option.label}
              onClick={() => chooseOption(option.type)}
              className={`
                w-full rounded-2xl border-2 px-4 py-3.5 text-left shadow-md transition active:scale-[0.98]
                sm:px-5 sm:py-4
                ${
                  isSelected
                    ? "border-[#F5E38A] bg-[#F5E38A] text-[#F15E62]"
                    : "border-white/50 bg-[#1f527a]/78 text-white hover:border-white hover:bg-[#174463]"
                }
              `}
            >
              <span
                className={`
                  mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold
                  ${
                    isSelected
                      ? "bg-[#F15E62] text-[#F5E38A]"
                      : "bg-white text-[#2f6f9f]"
                  }
                `}
              >
                {option.label}
              </span>

              <span className="text-sm font-semibold leading-7 sm:text-base">
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* 上一題 / 下一題 */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          onClick={goPrev}
          disabled={questionIndex === 0}
          className={`
            rounded-full px-5 py-3.5 font-bold shadow-md transition active:scale-95
            ${
              questionIndex === 0
                ? "cursor-not-allowed border-2 border-white/25 bg-white/10 text-white/35"
                : "border-2 border-white bg-[#285f8b]/80 text-white hover:bg-white hover:text-[#285f8b]"
            }
          `}
        >
          上一題
        </button>

        <button
          onClick={goNext}
          disabled={!currentSelected}
          className={`
            rounded-full px-5 py-3.5 font-bold shadow-md transition active:scale-95
            ${
              !currentSelected
                ? "cursor-not-allowed bg-[#F5E38A]/40 text-[#F15E62]/50"
                : "bg-[#F5E38A] text-[#F15E62] hover:brightness-105"
            }
          `}
        >
          {questionIndex === quizData.length - 1 ? "看結果" : "下一題"}
        </button>
      </div>

      <p className="mt-4 text-center text-xs font-medium text-white/80">
        請先選擇一個答案，再按下一題
      </p>
    </section>
  );
}