"use client";

import { ChatDashboard } from "@/components/chat";

export default function ChatPage() {
  const apiKey = process.env.NEXT_PUBLIC_QANYTHING_API_KEY || "";

  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  智能对话中心
                </h1>
                <p className="text-gray-600 mt-1">与您的AI智能助手进行实时对话，获取智能解答</p>
              </div>
            </div>
          </div>
        </div>
        <ChatDashboard apiKey={apiKey} />
      </div>
    </div>
  );
}

