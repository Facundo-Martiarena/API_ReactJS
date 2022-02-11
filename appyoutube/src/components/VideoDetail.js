import React from 'react';
import { useVideoContext } from "../context/context"
import { Link } from 'react-router-dom'
import './Home.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import VideoList from './VideoList';
import Button from 'react-bootstrap/Button'
const VideoDetail = () => {

    const { videoItem, videosList, videoSelect, notVideosList, backButton } = useVideoContext()
    const videoSrc = `https://www.youtube.com/embed/${videoItem.id.videoId}`;

    return (
        <div >
            <div style={{ padding: 15 }}>
                <Link to='/'>
                    {backButton ? "" :
                        <>
                            <Button variant="danger" onClick={() => notVideosList()} >ATRÁS</Button>
                            <label style={{ color: 'red', marginLeft: 5 }}>DETALLE DEL VIDEO</label>
                        </>}
                </Link>
            </div>
            <div className='col-x-5 col-s-5 col-c-12 col-5 video-item2'>
                <div style={{ marginTop: 20 , textAlign:'center'}}>
                    <iframe src={videoSrc} allowFullScreen title='Video player' />
                </div >
                <div className='col-12 col-c-12 col-x-12 col-s-12'>
                    <h4 className='header'>{videoItem.snippet.title}</h4>
                    <p>{videoItem.snippet.description}</p>
                </div>
            </div>
            <div className='col-x-6 col-c-12 col-s-6 col-6 video-list'>
                <VideoList handleVideoSelect={videoSelect} videos={videosList} />
            </div>

        </div>

    )
}

export default VideoDetail;