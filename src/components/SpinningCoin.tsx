import React from 'react';
import { Coins } from 'lucide-react';

export const SpinningCoin: React.FC = () => {
  return (
    <div className="animate-spin-slow">
      <Coins className="text-yellow-500 w-16 h-16" />
    </div>
  );
};