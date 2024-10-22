import React, { useState } from 'react';
import './FAQ.css'; 
import faqs_data from './faq_data.js';
import FAQs from './FAQs.jsx';
import FAQ_tabs from './FAQ_tabs.jsx';
import Search from './Search.jsx';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('Admissions');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const tabs = [
    'Admissions',
    'Curriculum and Faculty',
    'Accreditation & Recognition',
    'Career Services',
    'Tuition fee and Scholarships',
  ];

  const removeWhiteSpace = (word) => {
    const newWord = word.split('').filter((letter) => letter !== ' ').join('');
    return newWord;
  };

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <div className="faq-container">
      

      {/* Tabs */}
      <FAQ_tabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
      
      {/* FAQs */}
      <FAQs activeTab={activeTab} faqs_data={faqs_data} activeQuestion={activeQuestion} toggleQuestion={toggleQuestion}/>
    </div>
  );
};

export default FAQ;
