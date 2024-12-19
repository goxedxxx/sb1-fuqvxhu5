import { useState, useEffect } from 'react';
import type { Block, TelegramUser } from '../types';
import { getTelegramUser } from '../utils/telegram';

const BLOCK_REWARD = 500;
const BLOCK_TIME = 5000; // 5 seconds

export function useMining() {
  const [currentUser, setCurrentUser] = useState<TelegramUser | null>(null);
  const [activeMiners, setActiveMiners] = useState<TelegramUser[]>([]);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [balance, setBalance] = useState(0);

  // Initialize current user from Telegram
  useEffect(() => {
    const user = getTelegramUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // Mining logic
  useEffect(() => {
    if (!currentUser) return;

    const interval = setInterval(() => {
      // Get current active miners (this would be handled by your backend)
      // For now, we'll just use the current user
      const miners = [currentUser];
      
      if (miners.length === 0) return;

      // Calculate rewards
      const baseReward = BLOCK_REWARD / miners.length;
      
      // Create distribution with referral rewards
      const distribution = miners.map(miner => {
        // This should be handled by backend to check referrals
        const referralReward = 0; // Placeholder for referral logic
        return {
          userId: miner.id,
          reward: baseReward,
          referralReward,
        };
      });

      // Create new block
      const newBlock: Block = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        miners,
        reward: BLOCK_REWARD,
        distribution,
      };

      // Update blocks
      setBlocks(prev => [newBlock, ...prev.slice(0, 9)]);

      // Update user balance if they participated
      const userDistribution = distribution.find(d => d.userId === currentUser.id);
      if (userDistribution) {
        setBalance(prev => prev + userDistribution.reward + userDistribution.referralReward);
      }
    }, BLOCK_TIME);

    return () => clearInterval(interval);
  }, [currentUser]);

  return {
    currentUser,
    activeMiners,
    blocks,
    balance,
    BLOCK_REWARD,
  };
}