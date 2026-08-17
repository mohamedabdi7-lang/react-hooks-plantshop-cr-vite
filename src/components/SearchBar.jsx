function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <label htmlFor="search">
        Search Plants:
      </label>

      <input
        id="search"
        type="text"
        placeholder="Search by plant name..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
