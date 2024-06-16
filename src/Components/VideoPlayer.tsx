// components/VideoPlayer.tsx

import React from 'react';

const VideoPlayer: React.FC = () => {
    return (
        <div className="w-full bg-gray-200">
            <div className="relative" style={{ paddingTop: '56.25%' }}>
                {/* Replace the video player with your actual video player implementation */}
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPlayer;
