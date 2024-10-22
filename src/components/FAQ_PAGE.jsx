import Search from './Search.jsx';
import FAQ from './Faq.jsx';
import {useState} from 'react';
import SearchResults from './SearchResults';
import faqs_data from './faq_data.js';
import Navbar from './Navbar.jsx';
import './FAQ_PAGE.css';

const FAQ_PAGE = () => {
    const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [searchResults, setSearchResults] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleSearch = () => {
    if (input.trim() === ''){
      setLoader(false);
      return;
    }

    console.log('INSIDE!!')

    const results = [
      `Result for "${input}" 1`,
      `Result for "${input}" 2`,
      `Result for "${input}" 3`,
    ];
    setLoader(false);
    setSearchResults(results);
    setInput('');
    setSuggestions([]);
  };

  
  // const fetchData = async () => {
  //   setLoader(true);
  //   try {
  //     const response = await fetch('https://your-api-endpoint.com/faqs');
  //     const data = await response.json();
  //     setSearchResults(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setLoader(false);
  //   }
  // };

  // const handleSearch = () => {
  //   if (input.trim() === '') {
  //     setLoader(false);
  //     return;
  //   }

  //   console.log('INSIDE!!');
  //   fetchData();
  //   setInput('');
  //   setSuggestions([]);
  // };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    console.log('Inside input change');
    setInput(inputText);

    if (inputText.length > 0) {
      // Flatten the FAQ data by extracting questions from all categories
    const allQuestions = Object.values(faqs_data).flatMap((category) =>
      category.map(faq => faq.question)
    );

    // Filter questions based on the input text
    const filteredSuggestions = allQuestions.filter((question) =>
      question.toLowerCase().includes(inputText.toLowerCase())
    );

    setSuggestions(filteredSuggestions);  // Update suggestions
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'ArrowDown' && selectedSuggestion < suggestions.length - 1) {
      setSelectedSuggestion(selectedSuggestion + 1);
    } else if (e.key === 'ArrowUp' && selectedSuggestion > 0) {
      setSelectedSuggestion(selectedSuggestion - 1);
    } else if (e.key === 'Tab') {
      if (selectedSuggestion >= 0 && selectedSuggestion < suggestions.length) {
        setInput(suggestions[selectedSuggestion]);
        setSuggestions([]);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
  };

    return (
        <>
            <Navbar />
            <div className="faq-text">
            <h1>Frequently Asked <span className="highlight">Questions</span></h1>
      <p className="subtext">
        Whether you're a prospective student looking for program details, a parent seeking information about our curriculum, or a current student with inquiries about your studies, we're here to help.
      </p>
            </div>
            
      {!(searchResults.length > 0) && (
              <Search
              input={input} 
              handleInputChange={handleInputChange} 
              handleKeyDown={handleKeyDown}
              handleSearch={()=>{
               setLoader(true);  
               handleSearch();
              }}
              suggestions={suggestions}
              selectedSuggestion={selectedSuggestion}
              handleSuggestionClick={handleSuggestionClick}  
             />
            )}
            
            {searchResults.length > 0 && (
                <>
                <Search
             input={input} 
             handleInputChange={handleInputChange} 
             handleKeyDown={handleKeyDown}
             handleSearch={()=>{
              setLoader(true);  
              handleSearch();
             }}
             suggestions={suggestions}
             selectedSuggestion={selectedSuggestion}
             handleSuggestionClick={handleSuggestionClick}  
            />

                <SearchResults searchResults={searchResults} />
                <button className='back-button' onClick={() => {
                    setSearchResults([]);
                }}> All FAQs </button>
                </>
            )}
            {!(searchResults.length > 0) && (
              <FAQ />
            )}
        </>
    );
}

export default FAQ_PAGE;