import React, { useState } from "react";

const PlaylistRenaming: React.FC<{
  updatePlaylistName: (name: string) => void;
  setShowRename: (_: boolean) => void;
}> = ({ updatePlaylistName, setShowRename }) => {
  const [playlistInput, setPlaylistInput] = useState("");
  const handlePlaylistNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistInput(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Playlist Name"
        className="Playlist-input"
        onChange={handlePlaylistNameChange}
      />
      <button
        className="SaveButton"
        onClick={() => {
          updatePlaylistName(playlistInput);
          setShowRename(false);
        }}
      >
        SAVE
      </button>
    </div>
  );
};

export default PlaylistRenaming;
