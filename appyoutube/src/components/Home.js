import React from 'react';
import { useVideoContext } from "../context/context"
import VideoList from './VideoList';
import Footer from './Footer';
import VideoDetail from './VideoDetail';
import InitialVideo from './InitialVideo';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import './Home.css'

const Home = () => {

    const { videosList, videoItem, videosSearch, videoSelect, backButton } = useVideoContext()

    const handleSearch = async (termFromSearchBar) => {

        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        videosSearch(response.data.items)
    }


    const handleVideoSelect = (video) => {

        videoSelect(video)


    }

    return (
        <>
            <div className='header' >
                <SearchBar handleSearch={handleSearch} />
            </div>
            <div className='body'>
                <div className="row" >
                    {videoItem.length !== 0 ? <VideoDetail video={videoItem} /> : <InitialVideo />}
                    {backButton ? '' : <div className='col-4 col-s-12 col-c-12 col-x-4'><VideoList handleVideoSelect={handleVideoSelect} videos={videosList} /></div>}
                </div>
            </div>
            <Footer />
        </ >
    )
}

export default Home;