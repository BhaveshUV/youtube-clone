import React from "react";
import { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
    let [videos, setVideos] = useState(null);

    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        let data = await fetch(YOUTUBE_VIDEOS_API);
        let dataJson = await data.json();

        setVideos(dataJson.items);
        console.log(dataJson.items);
    }

    if(!videos) {
        return null;
    }

    return (
        <div className="flex flex-wrap py-4 px-6 gap-4">
            {videos.map((video, index) => <VideoCard key={video.id} info={video}/>)}
            
        </div>
    );
}

export default VideoContainer;