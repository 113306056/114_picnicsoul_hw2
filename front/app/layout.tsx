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
        {/* 整個網站外層天空背景 */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/summerbc.png"
            alt="summer background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* 中間響應式 9:16 測驗框 */}
        <main className="min-h-screen flex items-center justify-center px-3 py-3 sm:px-6 sm:py-6">
          <div
            className="
              relative
              w-full
              max-w-[430px]
              aspect-[9/16]
              max-h-[calc(100vh-24px)]
              overflow-y-auto
              rounded-[28px]
              bg-[#5f9ed3]/95
              shadow-2xl
              ring-2
              ring-white/70
              sm:max-w-[460px]
              sm:max-h-[calc(100vh-48px)]
            "
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}