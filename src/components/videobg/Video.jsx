import React, { useState, useRef } from 'react';
import './video.css';

const Video = ({ vid }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current.pause();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current.play();
  };
  return (
    <div
      className='video-wrapper'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video ref={videoRef} autoPlay loop muted>
        <source src={vid} type='video/mp4' />
      </video>
    </div>
  );
};

export default Video;
