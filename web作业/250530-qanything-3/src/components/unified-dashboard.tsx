'use client';

import { useState } from 'react';
import KnowledgeBaseDashboard from '@/components/knowledge-base/knowledge-base-dashboard';
import { AgentDashboard } from '@/components/agent/agent-dashboard';

interface UnifiedDashboardProps {
  apiKey: string;
}

export function UnifiedDashboard({ apiKey }: UnifiedDashboardProps) {
  const [activeSection, setActiveSection] = useState<'knowledge' | 'agents'>('knowledge');

  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header with Tab Navigation */}
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    智能管理中心
                  </h1>
                  <p className="text-gray-600 mt-1">统一管理您的知识库和智能助手</p>
                </div>
              </div>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setActiveSection('knowledge')}
                className={`flex-1 py-3 px-6 rounded-lg font-medium text-sm transition-all flex items-center justify-center space-x-2 ${
                  activeSection === 'knowledge'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>知识库管理</span>
              </button>
              <button
                onClick={() => setActiveSection('agents')}
                className={`flex-1 py-3 px-6 rounded-lg font-medium text-sm transition-all flex items-center justify-center space-x-2 ${
                  activeSection === 'agents'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>智能助手</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="transition-all duration-300">
          {activeSection === 'knowledge' && (
            <div className="animate-fade-in">
              <KnowledgeBaseDashboard apiKey={apiKey} />
            </div>
          )}
          
          {activeSection === 'agents' && (
            <div className="animate-fade-in">
              <AgentDashboard apiKey={apiKey} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}