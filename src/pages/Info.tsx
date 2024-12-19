import React from 'react';
import { Coins, Users, Clock, Trophy } from 'lucide-react';

export const Info: React.FC = () => {
  return (
    <div className="p-4 pb-20">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <h2 className="text-2xl font-bold mb-4">How Mining Works</h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <Coins className="text-yellow-500 w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-1">Mining Pool</h3>
              <p className="text-gray-600">500 coins are distributed every 5 seconds among all online players.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Users className="text-blue-500 w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-1">Online Requirement</h3>
              <p className="text-gray-600">You must be online to receive coins. Offline players don't participate in distribution.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-1">Distribution Cycle</h3>
              <p className="text-gray-600">Every 5 seconds, the mining pool is evenly distributed among all active miners.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Trophy className="text-purple-500 w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-1">Total Supply</h3>
              <p className="text-gray-600">Mining stops when the total supply of 1,000,000,000 coins is reached.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Referral System</h2>
        <p className="text-gray-600">
          Invite friends to earn 10% of their mining rewards! Share your referral link and start earning passive income.
        </p>
      </div>
    </div>
  );
};