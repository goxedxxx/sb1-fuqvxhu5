import React, { useEffect, useState } from 'react';
import { ProgressBar } from '../components/ProgressBar';
import type { MiningStats } from '../types';

export const Stats: React.FC = () => {
  const [stats, setStats] = useState<MiningStats>({
    totalMined: 0,
    totalPool: 1_000_000_000,
    holders: 0,
    topHolders: [],
    currentUser: {
      id: 1,
      username: 'User',
      avatarUrl: '',
      balance: 0
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats every 5 seconds
      setStats(prev => ({
        ...prev,
        totalMined: prev.totalMined + 500,
        holders: Math.floor(Math.random() * 1000)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 pb-20">
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Mining Progress</h2>
        <ProgressBar current={stats.totalMined} total={stats.totalPool} />
        <div className="mt-2 text-sm text-gray-600">
          {((stats.totalMined / stats.totalPool) * 100).toFixed(2)}% Mined
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Statistics</h2>
        <div className="space-y-2">
          <p>Total Holders: {stats.holders}</p>
          <p>Total Mined: {stats.totalMined.toLocaleString()}</p>
          <p>Remaining: {(stats.totalPool - stats.totalMined).toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Top Holders</h2>
        <div className="space-y-2">
          {stats.topHolders.map((holder, index) => (
            <div key={holder.id} className="flex items-center space-x-2">
              <span className="font-bold">{index + 1}.</span>
              <img src={holder.avatarUrl} alt="" className="w-8 h-8 rounded-full" />
              <span>{holder.username}</span>
              <span className="ml-auto">{holder.balance}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};