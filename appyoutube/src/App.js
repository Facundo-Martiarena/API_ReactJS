import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "bootstrap/dist/css/bootstrap.css";
import Home from './components/Home';
import './App.css';
import InitialVideo from './components/InitialVideo';
import VideoItem from './components/VideoItem';
import VideoDetail from './components/VideoDetail';
import VideoContextProvider, {useVideoContext} from "./context/context"

function App() {

    const {videoItem} = useVideoContext()
    console.log(videoItem)
  
        return (
            <div>
                <VideoContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/video/:id" element={<VideoDetail video={videoItem}  />} />
                    </Routes>
                </VideoContextProvider>
            </div>
        )
    
}

export default App;