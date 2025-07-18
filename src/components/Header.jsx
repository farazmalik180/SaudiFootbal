import React from 'react';

function Header() {
  return (
    <header className="w-full bg-green-700 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-yellow-300">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2v2h1a1 1 0 0 1 1 1v2c0 2.21-1.79 4-4 4h-2c-2.21 0-4-1.79-4-4V5a1 1 0 0 1 1-1h1V2h6zm-3 20c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </span>
        <div>
          <div className="text-white text-xl font-bold leading-tight">Saudi U-19 Scout</div>
          <div className="text-green-100 text-xs font-medium">Next Generation Talent Discovery</div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="flex items-center gap-1 text-yellow-200 font-semibold">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          AI-Powered Scouting
        </span>
        <span className="text-green-100 text-xs">SAFF &amp; FIFA Compliant Platform</span>
      </div>
    </header>
  );
}

export default Header; 