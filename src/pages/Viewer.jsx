import React from 'react';

const Viewer = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <video
        src="/videos/bedroom.mp4"
        controls
        autoPlay
        loop
        className="w-4/5 h-auto"
      />
    </div>
  );
};

export default Viewer;
