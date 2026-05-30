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
      <body>
        {/* 外層天空背景 */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/images/summerbc.png"
            alt="summer background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* 中間測驗框：縮小並維持響應式 */}
        <main className="min-h-screen flex items-center justify-center px-3 py-3 sm:px-6 sm:py-6">
          <div
            className="
              relative
              w-full
              max-w-[390px]
              h-[94vh]
              max-h-[760px]
              min-h-[620px]
              overflow-hidden
              rounded-[30px]
              bg-[#6AA6DD]/58
              shadow-[0_24px_80px_rgba(44,93,130,0.35)]
              ring-2
              ring-white/55
              backdrop-blur-[6px]
              sm:max-w-[410px]
              sm:h-[90vh]
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