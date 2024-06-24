// components/VideoPlayer.tsx

import React from 'react';

const VideoPlayer: React.FC = () => {
    return (
        <div className="w-full bg-gray-200">
            <div className="relative" style={{ paddingTop: '56.25%' }}>
                {/* Replace the video player with your actual video player implementation */}
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    src="https://res.cloudinary.com/dg38njbya/video/upload/v1718451753/website%20assets/Video/Home_Video_kskiz9.mp4"
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
