import React from 'react';

function SearchForm({ filters, setFilters, positions, minAge, maxAge, minPotential, maxPotential }) {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex items-center mb-2">
        <span className="text-green-600 mr-2">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-.293.707l-6.414 6.414A1 1 0 0 0 14 13.414V19a1 1 0 0 1-1.447.894l-4-2A1 1 0 0 1 8 17v-3.586a1 1 0 0 0-.293-.707L1.293 6.707A1 1 0 0 1 1 6V4z"/></svg>
        </span>
        <span className="text-lg font-extrabold text-gray-800">Search &amp; Filter Players</span>
      </div>
      <div className="flex flex-wrap gap-6 items-end">
        <div className="flex flex-col flex-1 min-w-[180px]">
          <label className="text-sm font-bold text-gray-800 mb-1">Player Name</label>
          <input
            type="text"
            className="border rounded px-3 py-2 text-sm"
            placeholder="Search players..."
            value={filters.name}
            onChange={e => setFilters(f => ({ ...f, name: e.target.value }))}
          />
        </div>
        <div className="flex flex-col min-w-[140px]">
          <label className="text-sm font-bold text-gray-800 mb-1">Position</label>
          <select
            className="border rounded px-3 py-2 text-sm"
            value={filters.position}
            onChange={e => setFilters(f => ({ ...f, position: e.target.value }))}
          >
            {positions.map(pos => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col min-w-[220px]">
          <label className="text-sm font-bold text-green-700 mb-1">Age Range: {filters.age[0]} - {filters.age[1]}</label>
          <input
            type="range"
            min={minAge}
            max={maxAge}
            value={filters.age[0]}
            onChange={e => setFilters(f => ({ ...f, age: [Number(e.target.value), f.age[1]] }))}
            className="w-full accent-green-600"
          />
          <input
            type="range"
            min={minAge}
            max={maxAge}
            value={filters.age[1]}
            onChange={e => setFilters(f => ({ ...f, age: [f.age[0], Number(e.target.value)] }))}
            className="w-full accent-green-600 mt-1"
          />
        </div>
        <div className="flex flex-col min-w-[180px]">
          <label className="text-sm font-bold text-green-700 mb-1">Min AI Potential: {filters.minPotential}</label>
          <input
            type="range"
            min={minPotential}
            max={maxPotential}
            value={filters.minPotential}
            onChange={e => setFilters(f => ({ ...f, minPotential: Number(e.target.value) }))}
            className="w-full accent-green-600"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm; 