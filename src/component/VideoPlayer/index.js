import React, { useRef, useState, useEffect } from "react";
import images from "../../utilities/images";
import ScrollToTopLink from "../ScrollToTopLink";

const VideoPlayer = ({ src, navigate }) => {
  const [played, setPlayed] = useState(false);
  const videoRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleMouseOver = () => {
      isHovering.current = true;
      if (!played) {
        video.muted = false;
        video.play().catch(() => {});
      }
    };

    const handleMouseOut = () => {
      isHovering.current = false;
      if (!played) {
        video.pause();
        video.currentTime = 0; // Resets the video to starting point
      }
    };

    video.addEventListener("mouseover", handleMouseOver);
    video.addEventListener("mouseout", handleMouseOut);

    return () => {
      video.removeEventListener("mouseover", handleMouseOver);
      video.removeEventListener("mouseout", handleMouseOut);
    };
  }, [played]);

  const handlePause = () => {
    setPlayed(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <ScrollToTopLink to={navigate}>
      <div className="w-full h-full relative cursor-pointer relative border-t border-r border-l  border-lineBlue">
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          loop
          muted
          src={src}
          type="video/webm"
          className={`rounded-sm h-full`}
          // style={{ zIndex: -1 }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </ScrollToTopLink>
  );
};

export default VideoPlayer;
