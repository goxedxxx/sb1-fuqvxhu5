export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}

export interface User {
  id: number;
  username: string;
  avatarUrl: string;
  balance: number;
  rank?: number;
  referralId?: string;
  referrer?: string;
}

export interface Block {
  id: string;
  timestamp: number;
  miners: TelegramUser[];
  reward: number;
  distribution: {
    userId: number;
    reward: number;
    referralReward: number;
  }[];
}

export interface MiningStats {
  totalMined: number;
  totalPool: number;
  holders: number;
  activeMiners: TelegramUser[];
  topHolders: User[];
  currentUser: User;
  lastBlocks: Block[];
}