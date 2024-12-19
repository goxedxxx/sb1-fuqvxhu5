const STORAGE_KEY = 'mining_app_state';

export interface StorageState {
  balance: number;
  totalMined: number;
  referralId: string;
  referrer?: string;
  lastBlocks: any[];
}

export function loadState(): StorageState {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return createInitialState();
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return createInitialState();
  }
}

export function saveState(state: StorageState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    // Handle potential errors
  }
}

function createInitialState(): StorageState {
  return {
    balance: 0,
    totalMined: 0,
    referralId: Math.random().toString(36).slice(2),
    lastBlocks: [],
  };
}