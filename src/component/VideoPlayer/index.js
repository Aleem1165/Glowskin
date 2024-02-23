import React, { useRef, useState, useEffect } from "react";
import images from "../../utilities/images";
import ScrollToTopLink from "../ScrollToTopLink";

const VideoPlayer = ({ src, navigate , name }) => {
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
        video.currentTime = 0; 
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
      <div className="w-full h-full  cursor-pointer border-t border-r border-l  border-lineBlue">
        <div className="w-full h-full relative">
        <img
            src={images.gameShadow}
            className="absolute bottom-0 bg w-full h-[60%]"
          /> 
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            loop
            muted
            src={src}
            type="video/webm"
            className={`rounded-sm`}
          >
            Your browser does not support the video tag.
          </video>
          <div className="text-white absolute bottom-5  w-full">
            <div className="text-center text-lg font-semibold">{name}</div>
          </div>
        </div>
      </div>
    </ScrollToTopLink>
  );
};

export default VideoPlayer;

