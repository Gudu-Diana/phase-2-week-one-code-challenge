import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  // Function to handle search term change
  const handleSearchChange = (e) => {
    if (e && e.target && e.target.value !== undefined) {
      onSearchChange(e.target.value);
    }
  };

  return (
    <div style={{ marginBottom: '10px' }}> {/* Container div */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search transactions by Description..."
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%'
        }}
      />
    </div>
  );
};

export default SearchBar;
