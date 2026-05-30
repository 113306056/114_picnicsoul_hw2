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
      <body className="min-h-screen">
        {/* 外層整頁背景：summerbc 圖片 */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/summerbc.png"
            alt="summer background"
            className="h-full w-full object-cover"
          />
          {/* 可有可無：加一層淡白色，讓背景更柔和 */}
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* 中間 9:16 測驗框 */}
        <main className="relative z-10 min-h-screen flex justify-center items-center px-0 py-0 sm:px-4 sm:py-6">
          <div className="w-full max-w-[480px] min-h-screen overflow-hidden bg-transparent sm:min-h-[calc(100vh-48px)] sm:rounded-[32px] sm:border-2 sm:border-white/80 sm:shadow-2xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}