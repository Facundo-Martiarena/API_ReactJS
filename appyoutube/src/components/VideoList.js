import React from 'react';
import VideoItem from './VideoItem';
import './Home.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
        return (
            video.map((v1) => {
                return <VideoItem key={v1.id.videoId} v1={v1} handleVideoSelect={handleVideoSelect} />
            })
        )
    });

    return <div className='list-video'>{renderedVideos}</div>;
};
export default VideoList;