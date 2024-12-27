// src/Track/Track.tsx
import React from "react";
import "./Track.css";

interface TrackProps {
  track: TrackDetails;
  addTrack?: (track: TrackDetails) => void;
  removeTrack?: (track: TrackDetails) => void;
}
export interface TrackDetails {
  id: number;
  name: string;
  artist: string;
  album: string;
}
/**
 * Track component is used in both playlist and search results
 * If search results the track component will have a '+' button
 * If in playlist the track component will have a 'x' button
 * + button will add the track to the playlist
 * x button will remove the track from the playlist
 */

const Track: React.FC<TrackProps> = ({ track, addTrack, removeTrack }) => {
  return (
    <div className="Track flex items-center">
      <div className="Track-information flex-grow">
        <h3 className="text-lg font-medium">{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {/* Remove Track */}
      {removeTrack && (
        <button
          className="Track-action ml-2"
          onClick={() => removeTrack(track)}
        >
          x
        </button>
      )}
      {addTrack && (
        <button className="Track-action ml-2" onClick={() => addTrack(track)}>
          +
        </button>
      )}
    </div>
  );
};

export default Track;
