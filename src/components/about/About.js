import React from 'react';
import './about.css';

const VideoPlayer = ({ setRoute }) => {
  const videoId = 'vIci3C4JkL0';

  return (
    <div className="videoContainer">
      <iframe
        title="YouTube Video Player"
        className="responsiveIframe"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;