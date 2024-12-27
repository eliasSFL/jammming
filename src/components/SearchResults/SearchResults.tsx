// src/SearchResults/SearchResults.tsx
import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./SearchResults.css";
import { TrackDetails } from "../Track/Track";

interface SearchResultsProps {
  searchResults?: TrackDetails[];
  addTrack: (track: TrackDetails) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
  addTrack,
}) => {
  return (
    <div className="SearchResults">
      <h2 className="text-3xl font-semibold">Results</h2>
      <Tracklist tracks={searchResults} addTrack={addTrack} />
    </div>
  );
};

export default SearchResults;
