// src/Playlist/Playlist.tsx
import React, { useState } from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";
import { TrackDetails } from "../Track/Track";
import PlaylistRenaming from "./PlaylistRenaming";

type PlaylistProps = {
  playlistTracks: TrackDetails[];
  playlistName: string;
  updatePlaylistName: (name: string) => void;
  removeTrack: (track: TrackDetails) => void;
};

const Playlist: React.FC<PlaylistProps> = ({
  playlistTracks,
  playlistName,
  updatePlaylistName,
  removeTrack,
}) => {
  const [showRename, setShowRename] = useState(false);
  return (
    <div className="Playlist">
      <div>
        <h2 className="text-2xl font-semibold">{playlistName}</h2>
        {!showRename && (
          <button
            className="SaveButton mt-4"
            onClick={() => setShowRename(true)}
          >
            Rename Playlist
          </button>
        )}
      </div>
      {showRename && (
        <PlaylistRenaming
          updatePlaylistName={updatePlaylistName}
          setShowRename={setShowRename}
        />
      )}
      <Tracklist tracks={playlistTracks} removeTrack={removeTrack} />
      <button className="SaveButton mt-4">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
