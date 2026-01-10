function JobFilters({ search, setSearch, filter, setFilter }) {
  return (
    <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      
      {/* Search */}
      <input
        type="text"
        placeholder="Search job or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl bg-[#2A2A2E] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 sm:w-80"
      />

      {/* Filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full rounded-xl bg-[#2A2A2E] px-4 py-3 text-sm text-white outline-none sm:w-48"
      >
        <option value="All">All</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
    </div>
  );
}

export default JobFilters;
