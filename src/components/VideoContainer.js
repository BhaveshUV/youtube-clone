import React from "react";
import { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    let [videos, setVideos] = useState(null);

    useEffect(() => {
        const getVideos = async () => {
            let data = await fetch(YOUTUBE_VIDEOS_API);
            let dataJson = await data.json();

            setVideos(dataJson.items);
        }
        getVideos();
    }, [])

    if (!videos) {
        return null;
    }

    return (
        <div className="flex flex-wrap py-4 px-6 gap-4 justify-center md:justify-start">
            {videos.map((video, index) => <Link to={`/watch?v=${video.id}`} key={video.id}><VideoCard info={video} /></Link>)}
        </div>
    );
}

export default VideoContainer;