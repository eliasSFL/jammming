// src/SearchBar/SearchBar.tsx
import React from "react";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
  return (
    <div className="SearchBar flex items-center">
      <input
        className="input flex-grow"
        placeholder="Enter A Song, Album, or Artist"
      />
      <button className="SearchButton ml-2">SEARCH</button>
    </div>
  );
};

export default SearchBar;
