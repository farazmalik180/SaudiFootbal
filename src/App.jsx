import React, { useState } from 'react';
import players from './data/players.json';
import PlayerGrid from './components/PlayerGrid';
import SearchForm from './components/SearchForm';
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full p-6">
        <div className="text-center mt-10 mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Discover Saudi Arabia's Next Football Stars</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Advanced AI-powered scouting platform showcasing the brightest U-19 talents across Saudi Arabian youth academies. Professional analysis meets cutting-edge technology.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <SearchForm
            filters={filters}
            setFilters={setFilters}
            positions={positions}
            minAge={minAge}
            maxAge={maxAge}
            minPotential={minPotential}
            maxPotential={maxPotential}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Talent Database</h2>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">{filteredPlayers.length} players found</span>
        </div>
        <PlayerGrid players={filteredPlayers} onPlayerClick={setSelectedPlayer} />
      </main>
    </div>
  );
}

export default App; 