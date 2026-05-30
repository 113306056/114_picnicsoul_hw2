import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Summer Picnic Soul｜你的夏日野餐人格",
  description: "測出你的夏日野餐人格。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="relative min-h-screen">
        {/* 外層天空背景 */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[url('/summerbc.png')] bg-cover bg-center bg-no-repeat"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-white/10"
        />

        {/* 中間測驗框：與各頁共用同一尺寸 */}
        <main className="relative z-10 flex min-h-screen items-center justify-center px-3 py-3 sm:px-6 sm:py-6">
          <div
            className="
              relative
              flex
              h-[94vh]
              w-full
              max-w-[390px]
              min-h-[620px]
              max-h-[760px]
              flex-col
              overflow-hidden
              rounded-[30px]
              bg-[#6AA6DD]/58
              shadow-[0_24px_80px_rgba(44,93,130,0.35)]
              ring-2
              ring-white/55
              backdrop-blur-[6px]
              sm:h-[90vh]
              sm:max-w-[410px]
              sm:max-h-[740px]
            "
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
