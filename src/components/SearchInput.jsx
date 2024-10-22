import React from 'react';
import './SearchInput.css'
import SearchButton from './SearchButton';

const SearchInput = ({ input, handleInputChange, handleKeyDown, handleSearch }) => {
  return (
    <div className="search-input-container">
      <input
        className='search-input-field'
        type="text"
        id="query-input"
        placeholder="Search..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <SearchButton handleSearch={handleSearch} />
    </div>
  );
};

export default SearchInput;
