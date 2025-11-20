import React from 'react';
import ReelA from '../../assets/Reels/ReelA.mp4'
import ReelB from '../../assets/Reels/ReelB.mp4'
import ReelC from '../../assets/Reels/ReelC.mp4'
import "./reelsSection.css";

export default function Reels() {
  return (
    <>
      <div className="reelsContainer">
        <video
            className="reelVideo"
            src={ReelA}
            playsInline
            muted
            autoPlay
            loop
          />
          <video
            className="reelVideo"
            src={ReelB}
            playsInline
            muted
            autoPlay
            loop
          />
          <video
            className="reelVideo"
            src={ReelC}
            playsInline
            muted
            autoPlay
            loop
          />
      </div>
    </>
  );
}