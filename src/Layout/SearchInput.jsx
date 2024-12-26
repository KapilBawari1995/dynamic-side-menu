import React from 'react';

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search menu..."
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
};

export default SearchInput;
