// src/Playlist/Playlist.tsx
import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";
import { TrackDetails } from "../Track/Track";

type PlaylistProps = {
  playlistTracks: TrackDetails[];
  playlistName: string;
  removeTrack: (track: TrackDetails) => void;
  showRename: boolean;
  setShowRename: (show: boolean) => void;
  handlePlaylistNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRenamePlaylist: () => void;
};

const Playlist: React.FC<PlaylistProps> = ({
  playlistTracks,
  playlistName,
  removeTrack,
  showRename,
  setShowRename,
  handlePlaylistNameChange,
  onRenamePlaylist,
}) => {
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
        <div>
          <input
            type="text"
            placeholder="Enter Playlist Name"
            className="Playlist-input"
            onChange={handlePlaylistNameChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onRenamePlaylist();
              }
            }}
          />
          <button className="SaveButton" onClick={onRenamePlaylist}>
            SAVE
          </button>
        </div>
      )}
      <Tracklist tracks={playlistTracks} removeTrack={removeTrack} />
      <button className="SaveButton mt-4">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
