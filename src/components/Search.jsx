import SearchInput from './SearchInput';
import SuggestionsList from './SuggestionsList';
import ApplyButton from './ApplyButton';
import './Search.css';

const Search = ({
  input, 
  handleInputChange, 
  handleKeyDown,
  handleSearch,
  suggestions,
  selectedSuggestion,
  handleSuggestionClick,
}) => {
  return (
    <>
    <div className="search-container">
      <SearchInput 
        input={input} 
        handleInputChange={handleInputChange} 
        handleKeyDown={handleKeyDown} 
        handleSearch={handleSearch}
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
