import React, { useRef, useEffect } from "react";

const AutoVideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    video.muted = true; // Mute the video (optional)
    video.loop = true; // Set the video to play in a loop
    video.play().catch(() => {}); // Start playing the video

    return () => {
      video.pause(); // Pause the video when the component unmounts
    };
  }, []);

  return (
    <div className="w-full h-full relative relative">
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        loop
        muted
        src={src}
        type="video/webm"
        className={`rounded-sm h-full`}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AutoVideoPlayer;
