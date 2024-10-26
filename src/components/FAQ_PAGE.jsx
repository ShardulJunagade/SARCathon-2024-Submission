import Search from "./Search_Components/Search.jsx";
import FAQ from "./FAQ_Components/Faq.jsx";
import { useState } from "react";
import SearchResults from "./Search_Components/SearchResults.jsx";
import faqs_data from "./faq_data.js";
import Navbar from "./Navbar_Components/Navbar.jsx";
import Loader from "./Utils/Loader.jsx"; 
import "./FAQ_PAGE.css";

const FAQ_PAGE = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [searchResults, setSearchResults] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await fetch("https://sarc-search-api.onrender.com/search", {
        method: "POST",
        headers: {
            "x-api-key": `${import.meta.env.PUBLIC_API_KEY}`, 
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            query: input,
        })
      });
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false); 
    }
  };

  const handleSearch = () => {
    if (input.trim() === "") {
      return;
    }
    fetchData();
    setSuggestions([]); 
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setInput(inputText);

    if (inputText.length > 0) {
      const allQuestions = Object.values(faqs_data).flatMap((category) =>
        category.map((faq) => faq.question)
      );

      const filteredSuggestions = allQuestions.filter((question) =>
        question.toLowerCase().includes(inputText.toLowerCase())
      );

      setSuggestions(filteredSuggestions); 
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    } else if (e.key === "ArrowDown" && selectedSuggestion < suggestions.length - 1) {
      setSelectedSuggestion(selectedSuggestion + 1);
    } else if (e.key === "ArrowUp" && selectedSuggestion > 0) {
      setSelectedSuggestion(selectedSuggestion - 1);
    } else if (e.key === "Tab" && selectedSuggestion >= 0 && selectedSuggestion < suggestions.length) {
      setInput(suggestions[selectedSuggestion]);
      setSuggestions([]);
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

      <Search
            input={input}
            handleInputChange={handleInputChange}
            handleKeyDown={handleKeyDown}
            handleSearch={handleSearch}
            suggestions={suggestions}
            selectedSuggestion={selectedSuggestion}
            handleSuggestionClick={handleSuggestionClick}
            loader={loader}
      />

      {loader && <Loader className="loader"/>} {/* Display Loader when fetching */}

      {!loader && searchResults.length > 0 && (
        <>
          <SearchResults searchResults={searchResults}/>
          <button
            className="back-button"
            onClick={() => setSearchResults([])}
          >
            {" "}All FAQs{" "}
          </button>
        </>
      )}
      {!loader && !(searchResults.length > 0) && <FAQ />}
    </>
  );
};

export default FAQ_PAGE;
