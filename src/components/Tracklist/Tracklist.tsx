// src/Tracklist/Tracklist.tsx
import React from "react";
import Track from "../Track/Track";
import "./Tracklist.css";

export interface TrackDetails {
  id: number;
  name: string;
  artist: string;
  album: string;
}

// Example mock data
const tracks: TrackDetails[] = [
  { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
  { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
];

const Tracklist: React.FC = () => {
  return (
    <div className="Tracklist">
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};

export default Tracklist;
