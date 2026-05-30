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
    <section className="min-h-full px-6 py-8 text-white flex flex-col">
      {/* 進度條 */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-sm opacity-90">
          <span>
            Question {questionIndex + 1} / {quizData.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full border border-white/80">
          <div
            className="h-full rounded-full bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 題目卡 */}
      <div className="picnic-card rounded-[28px] p-6">
        <p className="mb-3 text-sm tracking-[0.2em] opacity-80">
          夏日野餐邀請函
        </p>

        <h1 className="text-2xl font-bold leading-9">
          {currentQuestion.title}
        </h1>
      </div>

      {/* 選項 */}
      <div className="mt-6 space-y-3">
        {currentQuestion.options.map((option) => {
          const isSelected = currentSelected === option.type;

          return (
            <button
              key={option.label}
              onClick={() => chooseOption(option.type)}
              className={`w-full rounded-2xl border-2 px-5 py-4 text-left transition active:scale-[0.98]
                ${
                  isSelected
                    ? "border-[#F5E38A] bg-[#F5E38A] text-[#F15E62] shadow-lg"
                    : "border-white/85 bg-white/10 text-white hover:bg-white hover:text-[#4E91C9]"
                }`}
            >
              <span
                className={`mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold
                  ${
                    isSelected
                      ? "bg-[#F15E62] text-[#F5E38A]"
                      : "bg-white text-[#4E91C9]"
                  }`}
              >
                {option.label}
              </span>
              <span className="text-base leading-7">{option.text}</span>
            </button>
          );
        })}
      </div>

      {/* 底部：上一題 / 下一題 */}
      <div className="mt-8 flex gap-3">
        <button
          onClick={goPrev}
          disabled={questionIndex === 0}
          className={`flex-1 rounded-full px-5 py-4 font-bold transition
            ${
              questionIndex === 0
                ? "cursor-not-allowed border-2 border-white/30 text-white/40"
                : "border-2 border-white text-white hover:bg-white hover:text-[#4E91C9]"
            }`}
        >
          上一題
        </button>

        <button
          onClick={goNext}
          disabled={!currentSelected}
          className={`flex-1 rounded-full px-5 py-4 font-bold transition
            ${
              !currentSelected
                ? "cursor-not-allowed bg-[#F5E38A]/40 text-[#F15E62]/50"
                : "bg-[#F5E38A] text-[#F15E62] shadow-lg hover:brightness-105"
            }`}
        >
          {questionIndex === quizData.length - 1 ? "看結果" : "下一題"}
        </button>
      </div>

      {/* 小提醒 */}
      <p className="mt-4 text-center text-sm text-white/80">
        請先選擇一個答案，再按下一題
      </p>
    </section>
  );
}