import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SidebarNavigation } from "@/components/sidebar-navigation";
import { WakaTimeStats } from "@/components/wakatime-stats";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "智能知识管理平台",
  description: "基于AI的知识库和智能助手管理系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        <div className="flex min-h-screen">
          <SidebarNavigation />
          <main className="flex-1 ml-64 p-6">{children}</main>
        </div>
        <WakaTimeStats />
      </body>
    </html>
  );
}
