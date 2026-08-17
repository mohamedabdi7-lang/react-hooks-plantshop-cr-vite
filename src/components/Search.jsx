import React from "react";

function Search({ searchQuery, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default Search;
