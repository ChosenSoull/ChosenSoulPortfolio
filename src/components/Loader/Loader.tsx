import React from "react";

import '@components/Loader/Loader.css';

const Loading: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader4"></div>
      <div className="loading-text-container">
        <span className="loading-text">L</span>
        <span className="loading-text">o</span>
        <span className="loading-text">a</span>
        <span className="loading-text">d</span>
        <span className="loading-text">i</span>
        <span className="loading-text">n</span>
        <span className="loading-text">g</span>
        <span className="loading-text">.</span>
        <span className="loading-text">.</span>
        <span className="loading-text">.</span>
      </div>
    </div>
  );
};

export default Loading;