import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "加密貨幣每日新聞 AI 自動報告系統",
  description:
    "全自動化加密貨幣新聞報告系統 — 每日定時收集、AI 智慧分析、專業報告生成與自動發布",
  keywords: [
    "加密貨幣",
    "比特幣",
    "以太坊",
    "AI",
    "新聞",
    "每日報告",
    "Gemini",
    "自動化",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
