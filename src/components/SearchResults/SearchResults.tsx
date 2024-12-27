// src/SearchResults/SearchResults.tsx
import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./SearchResults.css";

const SearchResults: React.FC = () => {
  return (
    <div className="SearchResults">
      <h2 className="text-2xl font-semibold">Results</h2>
      <Tracklist />
    </div>
  );
};

export default SearchResults;
