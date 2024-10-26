import SearchInput from './SearchInput';
import SuggestionsList from './SuggestionsList';
import './Search.css';

const Search = ({
  input, 
  handleInputChange, 
  handleKeyDown,
  handleSearch,
  suggestions,
  selectedSuggestion,
  handleSuggestionClick,
  loader,
}) => {
  return (
    <>
    <div className="search-container">
      <SearchInput 
        input={input} 
        handleInputChange={handleInputChange} 
        handleKeyDown={handleKeyDown} 
        handleSearch={handleSearch}
        loader={loader}
      />
    </div>
    {suggestions.length > 0 && (
      <SuggestionsList
        className="suggestions-list"
        suggestions={suggestions}
        selectedSuggestion={selectedSuggestion}
        handleSuggestionClick={handleSuggestionClick}
      />
    )}
    </>
  );
};

export default Search;
