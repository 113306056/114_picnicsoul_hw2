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
        <main className="min-h-screen flex justify-center bg-[#6AA6DD] px-0 py-0 sm:px-4 sm:py-6">
          <div className="w-full max-w-[480px] min-h-screen overflow-hidden bg-[#6AA6DD] sm:min-h-[calc(100vh-48px)] sm:rounded-[32px] sm:shadow-xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}