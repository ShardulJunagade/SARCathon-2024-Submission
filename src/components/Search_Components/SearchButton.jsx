import './SearchButton.css';

const SearchButton = ({handleSearch, loader}) => {
    return (
        <button className='search-button' onClick={handleSearch} disabled={loader}>Search</button>
    );
}

export default SearchButton;