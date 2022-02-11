import { useState, createContext, useContext } from 'react'

const VideoContext = createContext([])

export const useVideoContext = () => useContext(VideoContext)

function VideoContextProvider({ children }) {

    const [videosList, setVideosList] = useState([])

    const [videoItem, setVideoItem] = useState([])
    const [count, setCount] = useState(0)
    const [backButton, setBackButton] = useState(false)

    const videoSelect = (item) => {
        setVideoItem(item)
        setCount(count + 1)
        setBackButton(false)
    }

    const emptyVideo = () => {
        setVideosList([])
    }

    const videosSearch = (item) => {
        setVideosList([item])
    }

    const notVideosList = () => {
        setBackButton(true)
    }

    return (
        <VideoContext.Provider value={{
            videosList,
            videoItem,
            count,
            videoSelect,
            emptyVideo,
            videosSearch,
            notVideosList,
            backButton

        }}>
            {children}
        </VideoContext.Provider>
    )
}

export default VideoContextProvider
