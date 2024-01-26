import React, { useState } from "react";
import { Link } from "react-router-dom";
import siteLogo from "../assets/siteLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // function handles the search query
  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    console.log("Search query:", newQuery);
  };

  const handleSearchSubmit = () => {
    console.log("Search submitted:", query);
  };

  return (
    <div className="header">
      <h1></h1>
      <div className="header-links-container">
        <Link to="/">
          <img
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
            src={siteLogo}
            alt="website logo"
            className="site-logo"
          />
          <span className="site-title">Level Up Lounge</span>
        </Link>
        <Link to="/login" className="login-link">
          Login
        </Link>
        <Link to="/signup" className="signup-link">
          SignUp
        </Link>
        {/* Search box inside header-links-container */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
          />
          <button onClick={handleSearchSubmit} className="search-btn">
            Search
          </button>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
          <div className="ghost-icon">
          <FontAwesomeIcon icon={faGhost} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
