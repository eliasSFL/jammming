// src/Track/Track.tsx
import React from "react";
import "./Track.css";
import { TrackDetails } from "../Tracklist/Tracklist";

interface TrackProps {
  track: TrackDetails;
}

const Track: React.FC<TrackProps> = ({ track }) => {
  return (
    <div className="Track flex items-center">
      <div className="Track-information flex-grow">
        <h3 className="text-lg font-medium">{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <button className="Track-action ml-2">+</button>
    </div>
  );
};

export default Track;
