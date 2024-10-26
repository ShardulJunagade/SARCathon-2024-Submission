import React, { useState } from 'react';
import './SearchResults.css';

const SearchResults = ({searchResults}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="search-results">
      {searchResults.map((faq, index) => (
        <div 
          key={index} 
          className={`search-result-item ${activeIndex === index ? 'active' : ''}`} 
          onClick={() => toggleAnswer(index)}
        >
          <div className="search-result-question">
            {faq.question}
            <span className='plus-minus'>{activeIndex === index ? '−' : '+'}</span>
          </div>
          <div className="search-result-answer">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
