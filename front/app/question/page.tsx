"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizData, usePsyStore } from "@/store/store";
import type { PersonalityKey } from "@/store/store";

export default function QuestionPage() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);

  const setAnswer = usePsyStore((state) => state.setAnswer);

  const currentQuestion = quizData[questionIndex];
  const progress = ((questionIndex + 1) / quizData.length) * 100;

  function chooseOption(type: PersonalityKey) {
    setAnswer(questionIndex, type);

    if (questionIndex < quizData.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      router.push("/prepare");
    }
  }

  return (
    <section className="min-h-full px-6 py-8 text-white">
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

      <div className="picnic-card rounded-[28px] p-6">
        <p className="mb-3 text-sm tracking-[0.2em] opacity-80">
          夏日野餐邀請函
        </p>

        <h1 className="text-2xl font-bold leading-9">
          {currentQuestion.title}
        </h1>
      </div>

      <div className="mt-6 space-y-3">
        {currentQuestion.options.map((option) => (
          <button
            key={option.label}
            onClick={() => chooseOption(option.type)}
            className="w-full rounded-2xl border-2 border-white/85 bg-white/10 px-5 py-4 text-left text-white transition hover:bg-white hover:text-[#4E91C9] active:scale-[0.98]"
          >
            <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-[#4E91C9]">
              {option.label}
            </span>
            <span className="text-base leading-7">{option.text}</span>
          </button>
        ))}
      </div>
    </section>
  );
}