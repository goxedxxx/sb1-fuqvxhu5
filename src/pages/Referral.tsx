import React, { useState } from 'react';
import { Share2 } from 'lucide-react';

export const Referral: React.FC = () => {
  const [referralLink] = useState(`https://t.me/your_bot?start=${Math.random().toString(36).slice(2)}`);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="flex items-center justify-center mb-4">
          <Share2 className="text-blue-500 w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Invite Friends</h2>
        <p className="text-gray-600 mb-4 text-center">
          Get 10% of your referrals' earnings!
        </p>
        
        <div className="bg-gray-100 p-3 rounded-lg mb-4">
          <p className="text-sm font-mono break-all">{referralLink}</p>
        </div>
        
        <button
          onClick={copyToClipboard}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Copy Link
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Your Referrals</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Total Referrals</span>
            <span className="font-bold">0</span>
          </div>
          <div className="flex justify-between">
            <span>Total Earnings</span>
            <span className="font-bold">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};