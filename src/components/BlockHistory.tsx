import React from 'react';
import { Clock } from 'lucide-react';
import type { Block } from '../types';
import { formatDistanceToNow } from '../utils/date';

interface BlockHistoryProps {
  blocks: Block[];
  currentUserId: number;
}

export const BlockHistory: React.FC<BlockHistoryProps> = ({ blocks, currentUserId }) => {
  return (
    <div className="space-y-2">
      {blocks.map((block) => {
        const userDistribution = block.distribution.find(d => d.userId === currentUserId);
        const participated = !!userDistribution;

        return (
          <div
            key={block.id}
            className={`p-4 rounded-lg border-2 ${
              participated ? 'border-green-500' : 'border-red-500'
            } bg-white`}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">
                  {formatDistanceToNow(block.timestamp)}
                </span>
              </div>
              <span className="text-sm font-medium">
                Miners: {block.miners.length}
              </span>
            </div>
            {participated && userDistribution && (
              <div className="flex justify-between items-center">
                <span className="font-medium">
                  Reward: {userDistribution.reward.toFixed(2)}
                </span>
                {userDistribution.referralReward > 0 && (
                  <span className="text-green-600 text-sm">
                    +{userDistribution.referralReward.toFixed(2)} ref
                  </span>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};