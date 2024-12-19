import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Stats } from './pages/Stats';
import { Referral } from './pages/Referral';
import { Info } from './pages/Info';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;