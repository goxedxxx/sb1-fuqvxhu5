import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Trophy, Users, Info } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <NavLink to="/" className={({ isActive }) => 
          `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
          <Home size={24} />
          <span className="text-xs">Home</span>
        </NavLink>
        <NavLink to="/stats" className={({ isActive }) => 
          `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
          <Trophy size={24} />
          <span className="text-xs">Stats</span>
        </NavLink>
        <NavLink to="/referral" className={({ isActive }) => 
          `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
          <Users size={24} />
          <span className="text-xs">Referral</span>
        </NavLink>
        <NavLink to="/info" className={({ isActive }) => 
          `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
          <Info size={24} />
          <span className="text-xs">Info</span>
        </NavLink>
      </div>
    </nav>
  );
};