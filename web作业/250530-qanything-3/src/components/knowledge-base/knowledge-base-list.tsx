'use client';

import { useEffect, useState } from 'react';
import { useKnowledgeBase } from '@/hooks/use-knowledge-base';
import type { KnowledgeBase } from '@/types/knowledge-base';

interface KnowledgeBaseListProps {
  apiKey: string;
  onSelectKb?: (kb: KnowledgeBase) => void;
  onCreateKb?: () => void;
  onDeleteKb?: (kbId: string) => void;
  onEditKb?: (kb: KnowledgeBase) => void;
}

export default function KnowledgeBaseList({
  apiKey,
  onSelectKb,
  onCreateKb,
  onDeleteKb,
  onEditKb,
}: KnowledgeBaseListProps) {
  const {
    knowledgeBases,
    loading,
    error,
    fetchKnowledgeBaseList,
    deleteKnowledgeBase,
  } = useKnowledgeBase(apiKey);

  const [selectedKbId, setSelectedKbId] = useState<string | null>(null);

  useEffect(() => {
    fetchKnowledgeBaseList();
  }, [fetchKnowledgeBaseList]);

  const handleSelectKb = (kb: KnowledgeBase) => {
    setSelectedKbId(kb.kbId);
    onSelectKb?.(kb);
  };

  const handleDeleteKb = async (kbId: string, kbName: string) => {
    if (confirm(`确定要删除知识库"${kbName}"吗？此操作不可恢复。`)) {
      try {
        await deleteKnowledgeBase(kbId);
        onDeleteKb?.(kbId);
        if (selectedKbId === kbId) {
          setSelectedKbId(null);
        }
      } catch (error) {
        console.error('删除知识库失败:', error);
      }
    }
  };

  if (loading && knowledgeBases.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800">错误: {error}</p>
        <button
          onClick={() => fetchKnowledgeBaseList()}
          className="mt-2 px-3 py-1 bg-red-100 hover:bg-red-200 text-red-800 rounded text-sm"
        >
          重试
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <button
          onClick={onCreateKb}
          className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-medium transition-all shadow-lg flex items-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>创建知识库</span>
        </button>
      </div>

      {knowledgeBases.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>暂无知识库</p>
          <button
            onClick={onCreateKb}
            className="mt-2 px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-medium transition-all shadow-lg"
          >
            创建第一个知识库
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {knowledgeBases.map((kb) => (
            <div
              key={kb.kbId}
              className={`p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md ${
                selectedKbId === kb.kbId
                  ? 'border-gray-900 bg-gray-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
              }`}
              onClick={() => handleSelectKb(kb)}
            >
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{kb.kbName}</h4>
                    {kb.createTime && (
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(kb.createTime).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedKbId === kb.kbId 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {selectedKbId === kb.kbId ? '已选中' : '未选中'}
                  </span>
                  <div className="flex space-x-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditKb?.(kb);
                      }}
                      className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                      title="编辑"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteKb(kb.kbId, kb.kbName);
                      }}
                      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      disabled={loading}
                      title="删除"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {loading && knowledgeBases.length > 0 && (
        <div className="flex justify-center py-2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
}