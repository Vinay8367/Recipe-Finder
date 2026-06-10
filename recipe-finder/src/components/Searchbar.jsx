import React, { useState } from 'react';
import "./styles/searchbar.css";

const Searchbar = ({ onSearch }) => {

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        className="input"
        type="text"
        placeholder="Search for a Recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="btn" type="submit">
        Search
      </button>

    </form>
  );
};

export default Searchbar;