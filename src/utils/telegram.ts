import WebApp from '@twa-dev/sdk';
import type { TelegramUser } from '../types';

export function initTelegramApp() {
  WebApp.ready();
  
  // Enable cloud storage
  WebApp.CloudStorage.isSupported();
}

export function getTelegramUser(): TelegramUser | null {
  const initData = WebApp.initData || '';
  if (!initData) return null;

  try {
    const user = WebApp.initDataUnsafe.user;
    if (!user) return null;

    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      photo_url: user.photo_url,
    };
  } catch (err) {
    console.error('Error getting Telegram user:', err);
    return null;
  }
}