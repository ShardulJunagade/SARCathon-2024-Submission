import './FAQs.css'

const removeWhiteSpace = (word) => {
    const newWord = word.split('').filter((letter) => letter !== ' ').join('');
    return newWord;
  };

const FAQs = ({activeTab, faqs_data, activeQuestion, toggleQuestion}) => {
    return (
        <div className="faq-section">
        <h2>{activeTab}</h2>
        {faqs_data[removeWhiteSpace(activeTab)] && faqs_data[removeWhiteSpace(activeTab)].map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {faq.question}
              <span>{activeQuestion === index ? '−' : '+'}</span>
            </div>
            {activeQuestion === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    );
}

export default FAQs;