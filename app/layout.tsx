import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "feedme",
  description: "Claude Code 기반 Spec-Driven Development 워크플로우가 내장된 Next.js 16 + React 19 프로젝트 템플릿",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className={cn("font-sans", notoSans.variable)}>
      <body className={`${notoSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
