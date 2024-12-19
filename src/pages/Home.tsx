import React from 'react';
import { SpinningCoin } from '../components/SpinningCoin';
import { BlockHistory } from '../components/BlockHistory';
import { Users } from 'lucide-react';
import { useMining } from '../hooks/useMining';

export const Home: React.FC = () => {
  const { currentUser, activeMiners, blocks, balance, BLOCK_REWARD } = useMining();

  if (!currentUser) {
    return (
      <div className="p-4 text-center">
        <p>Please open this app in Telegram</p>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="flex justify-center mb-4">
          <SpinningCoin />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Your Balance</h2>
        <p className="text-4xl font-bold text-center text-blue-600">
          {balance.toFixed(2)}
        </p>
      </div>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-4">
        <h3 className="text-xl font-semibold mb-2">Current Pool</h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-3xl font-bold text-green-600">{BLOCK_REWARD}</p>
          <div className="flex items-center text-gray-600">
            <Users className="w-5 h-5 mr-2" />
            <span>{activeMiners.length} miners online</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">Next distribution in 5 seconds</p>
      </div>

      <div className="w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Recent Blocks</h3>
        <BlockHistory blocks={blocks} currentUserId={currentUser.id} />
      </div>
    </div>
  );
};