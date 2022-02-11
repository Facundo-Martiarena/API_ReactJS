import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './Home.css';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const VideoItem = ({ v1, handleVideoSelect }) => {

    const [description, setDescription] = useState("")

    const [select, setSelect] = useState(false)

    const handleDetail = () => {
        setDescription(v1.snippet.description)
        setSelect(!select)

    }


    return (
        <>
            <Link to={`/video/${v1.id.videoId}`}>
                <div onClick={() => handleVideoSelect(v1)} className=' video-item item'>
                    <img src={v1.snippet.thumbnails.medium.url} alt={v1.snippet.description} />
                    <div className='content'>
                        <div className='text-title'>{v1.snippet.title}</div>

                    </div>
                    {select ? <div className='description'>{description}</div> : <div></div>}
                </div>

            </Link>
            <div style={{ borderBottom: '2px solid #c6c4c5', paddingBottom: 5, textAlign: 'center' }}>
                {select ?
                    <Button size="sm" onClick={() => handleDetail()} variant="outline-secondary" >ESCONDER</Button>
                    : <Button size="sm" onClick={() => handleDetail()} variant="outline-danger">DETALLES</Button>}
            </div>
        </>
    )
};
export default VideoItem;