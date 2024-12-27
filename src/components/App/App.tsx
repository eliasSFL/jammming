// src/App/App.tsx
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";
import { TrackDetails } from "../Track/Track";

// Example mock data
const mockTracks: TrackDetails[] = [
  { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
  { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
];

const App: React.FC = () => {
  const [searchResults, setSearchResults] =
    useState<TrackDetails[]>(mockTracks);
  const [playlistTracks, setPlaylistTracks] =
    useState<TrackDetails[]>(mockTracks);
  const [playlistName, setPlaylistName] = useState<string>("My Playlist");

  const addTrack = (track: TrackDetails) => {
    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = (track: TrackDetails) => {
    setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
  };

  const updatePlaylistName = (name: string) => {
    setPlaylistName(name);
  };

  return (
    <div className="App">
      <h1 className="text-4xl font-bold">Jammming</h1>
      <SearchBar />
      <div className="App-playlist flex flex-col">
        <SearchResults searchResults={searchResults} addTrack={addTrack} />
        {playlistTracks.length > 0 && (
          <Playlist
            playlistTracks={playlistTracks}
            playlistName={playlistName}
            updatePlaylistName={updatePlaylistName}
            removeTrack={removeTrack}
          />
        )}
      </div>
    </div>
  );
};

export default App;
