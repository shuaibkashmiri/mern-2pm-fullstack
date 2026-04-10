import React, { useState } from "react";

const Search = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setQuery(input);
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          className="custom-input"
          placeholder="Enter your Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <button class="btn-simple" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
