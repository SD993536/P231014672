'use client';

import { useState, useEffect } from 'react';
import { wakaTimeClient } from '@/lib/wakatime-client';

interface WakaTimeStatsData {
  totalHours: string;
  dailyAverage: string;
  topLanguage?: string;
  topProject?: string;
  username: string;
  isLoading: boolean;
  error?: string;
}

export function WakaTimeStatsClient() {
  const [stats, setStats] = useState<WakaTimeStatsData>({
    totalHours: '0h 0m',
    dailyAverage: '0h 0m',
    username: '',
    isLoading: true,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [userResponse, statsResponse] = await Promise.all([
          wakaTimeClient.getCurrentUser(),
          wakaTimeClient.getStats('last_7_days')
        ]);

        const totalSeconds = statsResponse.data.total_seconds;
        const dailyAverageSeconds = statsResponse.data.daily_average;
        
        const formatTime = (seconds: number) => {
          const hours = Math.floor(seconds / 3600);
          const minutes = Math.floor((seconds % 3600) / 60);
          return `${hours}h ${minutes}m`;
        };

        setStats({
          totalHours: formatTime(totalSeconds),
          dailyAverage: formatTime(dailyAverageSeconds),
          topLanguage: statsResponse.data.languages?.[0]?.name,
          topProject: statsResponse.data.projects?.[0]?.name,
          username: userResponse.data.display_name || userResponse.data.username,
          isLoading: false,
        });
      } catch (error) {
        console.error('Failed to load WakaTime stats:', error);
        setStats(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: 'Failed to load coding stats' 
        }));
      }
    };

    loadStats();
  }, []);

  if (stats.isLoading) {
    return (
      <div className="fixed bottom-0 left-0 right-0 ml-64 bg-white/80 backdrop-blur-sm border-t border-white/20 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-600 rounded-full animate-pulse"></div>
            <div className="text-sm text-gray-500">Loading coding stats...</div>
          </div>
        </div>
      </div>
    );
  }

  if (stats.error) {
    return (
      <div className="fixed bottom-0 left-0 right-0 ml-64 bg-white/80 backdrop-blur-sm border-t border-white/20 py-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="text-sm text-gray-500">{stats.error}</div>
          </div>
          {stats.error.includes('API key') && (
            <div className="text-xs text-gray-400">
              Get your WakaTime API key at{' '}
              <a 
                href="https://wakatime.com/api-key" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 underline"
              >
                wakatime.com/api-key
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 ml-64 bg-white/80 backdrop-blur-sm border-t border-white/20 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
        <div className="flex items-center gap-3">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
            <span className="font-medium text-gray-900">
              {stats.username}
            </span>
          </div>
          <span className="text-gray-300">•</span>
          <span className="text-gray-600">Past 7 days: {stats.totalHours}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-600">Daily avg: {stats.dailyAverage}</span>
        </div>
        {(stats.topLanguage || stats.topProject) && (
          <div className="flex items-center gap-3">
            {stats.topLanguage && (
              <>
                <span className="text-gray-300">•</span>
                <span className="text-gray-600">Language: {stats.topLanguage}</span>
              </>
            )}
            {stats.topProject && (
              <>
                <span className="text-gray-300">•</span>
                <span className="text-gray-600">Project: {stats.topProject}</span>
              </>
            )}
          </div>
        )}
        <div className="flex items-center gap-2">
          <span className="text-gray-300">•</span>
          <span className="text-xs text-gray-500">Powered by</span>
          <a 
            href="https://wakatime.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 text-xs font-medium transition-colors"
          >
            WakaTime
          </a>
        </div>
      </div>
    </div>
  );
}