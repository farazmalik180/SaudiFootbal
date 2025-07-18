import React from 'react';

function Header() {
  return (
    <header className="w-full bg-[#142136] h-16 flex items-center justify-between px-8 border-b border-[#22304a]">
      <div className="flex items-center gap-2">
        <span className="text-[#3de6c1] text-2xl font-extrabold tracking-wide">Scoutin</span>
      </div>
      <nav className="flex items-center gap-8">
        <a href="#" className="text-gray-200 text-base font-medium hover:text-[#3de6c1] transition">Dashboard</a>
        <a href="#" className="text-gray-200 text-base font-medium hover:text-[#3de6c1] transition">Reports</a>
      </nav>
    </header>
  );
}

export default Header; 