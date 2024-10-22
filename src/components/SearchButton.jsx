import './SearchButton.css';

const SearchButton = ({handleSearch}) => {
    return (
        <button className='search-button' onClick={handleSearch}>Search</button>
    );
}

export default SearchButton;