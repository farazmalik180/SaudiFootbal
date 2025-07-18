import React, { useState } from 'react';
import players from './data/players.json';
import PlayerModal from './components/PlayerModal';
import Header from './components/Header';

const getAgeRange = (players) => {
  let min = 100, max = 0;
  players.forEach(p => {
    if (p.age < min) min = p.age;
    if (p.age > max) max = p.age;
  });
  return [min, max];
};

const [minAge, maxAge] = getAgeRange(players);
const [minPotential, maxPotential] = [70, 100];

const recentReports = [
  { name: 'Ruben Peters', match: 'Tigers vs. Rangers', date: 'April 20' },
  { name: 'William Gibson', match: 'Northern vs. Spoting', date: 'April 19' },
  { name: 'Adam Bailey', match: 'United vs. City', date: 'April 18' },
  { name: 'Nathan Reed', match: 'County vs. Islanders', date: 'April 17' },
];

function App() {
  const [filters, setFilters] = useState({
    name: '',
    position: 'All',
    age: [minAge, maxAge],
    minPotential: minPotential
  });
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const filteredPlayers = players.filter(player => {
    const matchesName = filters.name ? player.name.toLowerCase().includes(filters.name.toLowerCase()) : true;
    const matchesPosition = filters.position && filters.position !== 'All' ? player.position === filters.position : true;
    const matchesAge = player.age >= filters.age[0] && player.age <= filters.age[1];
    const matchesPotential = player.potential >= filters.minPotential;
    return matchesName && matchesPosition && matchesAge && matchesPotential;
  });

  // Get unique positions for dropdown
  const positions = ['All', ...Array.from(new Set(players.map(p => p.position)))];

  return (
    <div className="min-h-screen bg-[#101926] flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
        <h1 className="text-4xl font-extrabold text-white text-center mb-4">Track and analyze soccer talent</h1>
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-xl">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              </span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#172136] text-white placeholder-gray-400 border border-[#22304a] focus:outline-none focus:ring-2 focus:ring-[#3de6c1] text-lg"
                placeholder="Search player"
                value={filters.name}
                onChange={e => setFilters(f => ({ ...f, name: e.target.value }))}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Top Ranked Players</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredPlayers.slice(0, 4).map(player => (
                <div
                  key={player.name}
                  className="bg-[#172136] rounded-xl p-5 flex flex-col items-center shadow border border-[#22304a] cursor-pointer hover:scale-105 transition"
                  onClick={() => setSelectedPlayer(player)}
                >
                  <img src={player.image} alt={player.name} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-[#3de6c1]" />
                  <div className="text-white text-lg font-semibold mb-1 text-center">{player.name}</div>
                  <div className="text-[#3de6c1] text-sm mb-1 text-center">{player.club}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-[#22304a] text-white text-xs px-3 py-1 rounded-full">Overall</span>
                    <span className="bg-[#3de6c1] text-[#142136] text-base font-bold px-3 py-1 rounded-full">{player.potential}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Recent Reports</h2>
            <ul className="divide-y divide-[#22304a] bg-[#172136] rounded-xl shadow border border-[#22304a]">
              {recentReports.map((report, idx) => (
                <li key={idx} className="px-6 py-4 flex flex-col">
                  <span className="text-white font-medium">{report.name}</span>
                  <span className="text-gray-400 text-sm">{report.match} • {report.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    </div>
  );
}

export default App; 