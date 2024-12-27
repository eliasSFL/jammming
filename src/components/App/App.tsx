// src/App/App.tsx
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold">Jammming</h1>
      <SearchBar />
      <div className="App-playlist flex">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
};

export default App;
