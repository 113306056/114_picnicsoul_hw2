import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PersonalityKey =
  | "strawberryCake"
  | "sandwich"
  | "lemonSoda"
  | "picnicMat"
  | "polaroid"
  | "cilantroTart";

export type Option = {
  label: "A" | "B" | "C" | "D" | "E" | "F";
  text: string;
  type: PersonalityKey;
};

export type Question = {
  title: string;
  options: Option[];
};

export type PersonalityResult = {
  name: string;
  shortName: string;
  keywords: string;
  description: string;
  strength: string;
  blindSpot: string;
  picnicRole: string;
  imagePath: string;
};

export const personalityResults: Record<PersonalityKey, PersonalityResult> = {
  strawberryCake: {
    name: "草莓奶油蛋糕型",
    shortName: "浪漫氛圍製造者",
    keywords: "浪漫、細膩、重視氛圍",
    description:
      "你就像野餐裡最漂亮的草莓奶油蛋糕，不一定最大聲，卻很容易讓整個場景變得有記憶點。你很在意感受、細節與氣氛，也常常比別人更快察覺空氣裡微妙的情緒變化。",
    strength:
      "你很懂得照顧情緒，也擅長把平凡的日常變得有儀式感。",
    blindSpot:
      "你有時候會太在意別人的反應，容易因為一句話或一個表情想很多。",
    picnicRole:
      "在野餐裡，你是讓畫面變漂亮、讓回憶變柔軟的人。",
    imagePath: "/strawberry-cake.png",
  },
  sandwich: {
    name: "三明治型",
    shortName: "可靠補給隊長",
    keywords: "可靠、務實、照顧大家",
    description:
      "你是野餐裡最不能缺少的三明治，實在、穩定，而且總能在關鍵時刻派上用場。你習慣默默把事情安排好，讓身邊的人感到安心。",
    strength:
      "你很有責任感，也很擅長處理實際問題，是大家容易依賴的人。",
    blindSpot:
      "你常常把別人的需求放在前面，卻忘了自己也需要被照顧。",
    picnicRole:
      "在野餐裡，你是負責讓大家吃飽、坐好、玩得安心的人。",
    imagePath: "/sandwich.png",
  },
  lemonSoda: {
    name: "檸檬氣泡水型",
    shortName: "清爽行動派",
    keywords: "活潑、直接、喜歡新鮮感",
    description:
      "你像一杯剛打開的檸檬氣泡水，清爽、明亮，帶著一點刺激感。你喜歡有趣的新事物，也很容易替沉悶的場合注入活力。",
    strength:
      "你行動力強，反應快，也很會把氣氛變得輕鬆好玩。",
    blindSpot:
      "你可能容易對重複或太安靜的事情感到無聊，有時候情緒來得快去得也快。",
    picnicRole:
      "在野餐裡，你是負責提議玩遊戲、臨時加行程、讓大家笑出來的人。",
    imagePath: "/lemon-soda.png",
  },
  picnicMat: {
    name: "野餐墊型",
    shortName: "溫柔安全基地",
    keywords: "溫柔、包容、穩定陪伴",
    description:
      "你像一塊柔軟又穩定的野餐墊，讓大家可以放心坐下來。你不一定會主動成為焦點，但你的存在會讓人放鬆，也讓朋友覺得被接住。",
    strength:
      "你很會傾聽，也很能包容不同人的情緒，是團體裡穩定的力量。",
    blindSpot:
      "你有時候太習慣包容，會不小心把自己的委屈藏起來。",
    picnicRole:
      "在野餐裡，你是讓大家願意坐下來聊天、慢慢放鬆的人。",
    imagePath: "/picnic_mat.png",
  },
  polaroid: {
    name: "拍立得型",
    shortName: "回憶收藏家",
    keywords: "感性、觀察力強、珍惜回憶",
    description:
      "你像一台拍立得，總能注意到別人忽略的小瞬間。你重視記憶、關係與細節，常常記得朋友隨口說過的話，也會珍惜每一次相處留下的感覺。",
    strength:
      "你觀察力強、感受細膩，很擅長保存關係裡珍貴的小片段。",
    blindSpot:
      "你有時候容易停留在過去，對某些人事物放不太下。",
    picnicRole:
      "在野餐裡，你是記錄笑聲、陽光、表情和那些只有你注意到的瞬間的人。",
    imagePath: "/polaroid.png",
  },
  cilantroTart: {
    name: "香菜蛋塔型",
    shortName: "反差怪味天才",
    keywords: "獨特、反差、有個性、不怕被討厭",
    description:
      "你像一顆香菜蛋塔，第一眼讓人困惑，但越了解越覺得有趣。你不喜歡太普通的設定，也不太想為了討好所有人而改變自己。你有自己的節奏和審美，甚至有點享受那種「不是每個人都懂我」的感覺。",
    strength:
      "你很有個性，也很敢表達自己的真實想法，常常能帶來意想不到的觀點。",
    blindSpot:
      "你有時候會因為太想保有獨特性，而讓別人不知道該怎麼靠近你。",
    picnicRole:
      "在野餐裡，你是那個帶來奇怪食物、奇怪想法，但最後讓大家最難忘的人。",
    imagePath: "/cilantro-tart.png",
  },
};

export const quizData: Question[] = [
  {
    title: "你收到一封夏日野餐邀請，你第一個在意的是？",
    options: [
      { label: "A", text: "今天的穿搭和照片會不會好看", type: "strawberryCake" },
      { label: "B", text: "要準備什麼食物才夠大家吃", type: "sandwich" },
      { label: "C", text: "有沒有什麼好玩的活動可以安排", type: "lemonSoda" },
      { label: "D", text: "大家會不會舒服、會不會太熱", type: "picnicMat" },
      { label: "E", text: "這天會不會留下特別的回憶", type: "polaroid" },
      { label: "F", text: "這場野餐有沒有什麼不一樣、夠不夠特別", type: "cilantroTart" },
    ],
  },
  {
    title: "如果你負責帶一樣東西去野餐，你會帶？",
    options: [
      { label: "A", text: "精緻甜點或漂亮水果盤", type: "strawberryCake" },
      { label: "B", text: "飽足感很夠的主食", type: "sandwich" },
      { label: "C", text: "清爽氣泡飲或有趣小零食", type: "lemonSoda" },
      { label: "D", text: "大野餐墊、防曬用品或濕紙巾", type: "picnicMat" },
      { label: "E", text: "相機、底片機或拍照小道具", type: "polaroid" },
      { label: "F", text: "一個大家沒想到、但很有話題性的食物", type: "cilantroTart" },
    ],
  },
  {
    title: "野餐開始後，你通常會扮演什麼角色？",
    options: [
      { label: "A", text: "讓現場變得更有氣氛的人", type: "strawberryCake" },
      { label: "B", text: "默默確認東西夠不夠、大家有沒有吃飽的人", type: "sandwich" },
      { label: "C", text: "提議玩遊戲、帶動氣氛的人", type: "lemonSoda" },
      { label: "D", text: "陪大家聊天，讓所有人都自在的人", type: "picnicMat" },
      { label: "E", text: "記錄大家自然互動瞬間的人", type: "polaroid" },
      { label: "F", text: "講出奇怪但很好笑的話，讓大家突然記住你的人", type: "cilantroTart" },
    ],
  },
  {
    title: "如果野餐時突然下起小雨，你的反應是？",
    options: [
      { label: "A", text: "覺得畫面有點浪漫，像電影場景", type: "strawberryCake" },
      { label: "B", text: "立刻幫大家把食物和物品收好", type: "sandwich" },
      { label: "C", text: "笑著說：「雨中野餐也太酷了吧！」", type: "lemonSoda" },
      { label: "D", text: "先找地方讓大家躲雨，不想有人不舒服", type: "picnicMat" },
      { label: "E", text: "想把這個意外瞬間拍下來", type: "polaroid" },
      { label: "F", text: "覺得這才有趣，太順利反而沒記憶點", type: "cilantroTart" },
    ],
  },
  {
    title: "你最喜歡哪一種夏日午後？",
    options: [
      { label: "A", text: "有漂亮光線、甜點和好拍的角落", type: "strawberryCake" },
      { label: "B", text: "一切安排得剛剛好，不慌不忙", type: "sandwich" },
      { label: "C", text: "臨時出門，發現意外好玩的地方", type: "lemonSoda" },
      { label: "D", text: "坐在樹蔭下，和朋友慢慢聊天", type: "picnicMat" },
      { label: "E", text: "聽著歌，回想最近發生的小事", type: "polaroid" },
      { label: "F", text: "做一件別人不一定懂，但自己覺得超有意思的事", type: "cilantroTart" },
    ],
  },
  {
    title: "朋友心情不好時，你通常會怎麼做？",
    options: [
      { label: "A", text: "用溫柔的方式陪他，讓他感覺被珍惜", type: "strawberryCake" },
      { label: "B", text: "幫他分析問題，想實際解決方法", type: "sandwich" },
      { label: "C", text: "帶他去做點有趣的事，轉換心情", type: "lemonSoda" },
      { label: "D", text: "安靜聽他說，不急著給建議", type: "picnicMat" },
      { label: "E", text: "記得他說過的細節，之後再關心他", type: "polaroid" },
      { label: "F", text: "用很直接但真誠的方式點醒他，可能有點怪但很有效", type: "cilantroTart" },
    ],
  },
  {
    title: "你最害怕自己在關係中變成什麼樣子？",
    options: [
      { label: "A", text: "太在意別人反應，變得不像自己", type: "strawberryCake" },
      { label: "B", text: "一直照顧別人，卻沒有人照顧我", type: "sandwich" },
      { label: "C", text: "太快感到無聊，失去耐心", type: "lemonSoda" },
      { label: "D", text: "一直包容，最後委屈自己", type: "picnicMat" },
      { label: "E", text: "太放不下過去，困在回憶裡", type: "polaroid" },
      { label: "F", text: "為了被喜歡，假裝自己很普通", type: "cilantroTart" },
    ],
  },
  {
    title: "野餐結束後，你最希望帶走什麼？",
    options: [
      { label: "A", text: "一張很漂亮、很有氛圍的合照", type: "strawberryCake" },
      { label: "B", text: "大家都吃飽玩好，沒有出任何狀況", type: "sandwich" },
      { label: "C", text: "一段突發又好笑的回憶", type: "lemonSoda" },
      { label: "D", text: "一種被陪伴、被理解的感覺", type: "picnicMat" },
      { label: "E", text: "幾個值得反覆回想的瞬間", type: "polaroid" },
      { label: "F", text: "一個「只有我才會喜歡」的特殊記憶", type: "cilantroTart" },
    ],
  },
];

type PsyStore = {
  answers: PersonalityKey[];
  setAnswer: (questionIndex: number, type: PersonalityKey) => void;
  resetAnswers: () => void;
  getScores: () => Record<PersonalityKey, number>;
  getFinalResult: () => PersonalityKey | PersonalityKey[];
};

const personalityOrder: PersonalityKey[] = [
  "strawberryCake",
  "sandwich",
  "lemonSoda",
  "picnicMat",
  "polaroid",
  "cilantroTart",
];

export const usePsyStore = create<PsyStore>()(
  persist(
    (set, get) => ({
      answers: [],

      setAnswer: (questionIndex, type) => {
        const newAnswers = [...get().answers];
        newAnswers[questionIndex] = type;
        set({ answers: newAnswers });
      },

      resetAnswers: () => {
        set({ answers: [] });
      },

      getScores: () => {
        const scores: Record<PersonalityKey, number> = {
          strawberryCake: 0,
          sandwich: 0,
          lemonSoda: 0,
          picnicMat: 0,
          polaroid: 0,
          cilantroTart: 0,
        };

        get().answers.forEach((answer) => {
          if (answer) {
            scores[answer] += 1;
          }
        });

        return scores;
      },

      getFinalResult: () => {
        const scores = get().getScores();
        const maxScore = Math.max(...Object.values(scores));

        const topTypes = personalityOrder.filter(
          (type) => scores[type] === maxScore
        );

        if (topTypes.length === 1) {
          return topTypes[0];
        }

        const answers = get().answers;

        const q7Type = answers[6];
        if (q7Type && topTypes.includes(q7Type)) {
          return q7Type;
        }

        const q8Type = answers[7];
        if (q8Type && topTypes.includes(q8Type)) {
          return q8Type;
        }

        return topTypes;
      },
    }),
    {
      name: "basket-me-psy-test",
    }
  )
);