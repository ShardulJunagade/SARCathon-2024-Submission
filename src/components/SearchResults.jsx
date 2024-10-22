import React, { useState } from 'react';
import './SearchResults.css';

const SearchResults = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the process for admission into Saras AI Institute?",
      answer: "The admission process at Saras AI Institute typically involves submitting the online application form along with necessary details, followed by a quick pre-enrollment assessment to evaluate your candidature based on your personal traits and basic communication skills in English."
    },
    {
      question: "Is there an application fee for applying to Saras AI Institute?",
      answer: "No, there is no application fee for applying to Saras AI Institute."
    },
    {
      question: "What is the pre-enrollment assessment test? How do I prepare for it?",
      answer: "The pre-enrollment assessment tests your basic communication skills and understanding of fundamental concepts. Preparing well in English and relevant subjects will help."
    },
    {
      question: "Are there any specific requirements or prerequisites for admission into the programs?",
      answer: "Specific prerequisites may depend on the course, but generally, the institute looks for candidates with good academic records and interest in AI-related fields."
    },
    {
      question: "When is the deadline for submitting the application?",
      answer: "The application deadline varies for different courses. Please refer to the institute's website for the most current information."
    }
  ];

  return (
    <div className="search-results">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`search-result-item ${activeIndex === index ? 'active' : ''}`} 
          onClick={() => toggleAnswer(index)}
        >
          <div className="search-result-question">
            {faq.question}
            <span className='plus-minus'>{activeIndex === index ? '−' : '+'}</span> {/* Replacing rotation with a simple minus symbol */}
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
