import './SuggestionList.css'
const SuggestionsList = ({ suggestions, selectedSuggestion, handleSuggestionClick }) => {
  return (
    <ul className="SuggestionList">
      {suggestions.map((s, i) => (
        <li
          key={i}
          className={i === selectedSuggestion ? 'selected' : ''}
          onClick={() => handleSuggestionClick(s)}
        >
          {s}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionsList;
