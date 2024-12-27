// src/Tracklist/Tracklist.tsx
import React from "react";
import Track, { TrackDetails } from "../Track/Track";
import "./Tracklist.css";

interface TracklistProps {
  tracks?: TrackDetails[];
  addTrack?: (track: TrackDetails) => void;
  removeTrack?: (track: TrackDetails) => void;
}

const Tracklist: React.FC<TracklistProps> = ({
  tracks,
  addTrack,
  removeTrack,
}) => {
  return (
    <>
      {tracks && (
        <div className="Tracklist">
          {tracks.map((track) => (
            <Track
              key={track.id}
              track={track}
              addTrack={addTrack}
              removeTrack={removeTrack}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Tracklist;
