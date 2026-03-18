import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "审美入门手册 — Vibe Coding 时代的设计素养",
  description:
    "从认知科学到设计实践，系统培养界面审美的判断力与表达力",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
