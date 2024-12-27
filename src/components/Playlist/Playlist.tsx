// src/Playlist/Playlist.tsx
import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

const Playlist: React.FC = () => {
  return (
    <div className="Playlist">
      <h2 className="text-2xl font-semibold">Playlist Name</h2>
      <Tracklist />
      <button className="SaveButton mt-4">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
