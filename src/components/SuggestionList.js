import React, { useState, useEffect } from "react";
import SuggestionVideo from "./SuggestionVideo";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const SuggestionList = () => {
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        getVideos();
    }, []);

    let getVideos = async () => {
        let data = await fetch(YOUTUBE_VIDEOS_API);
        let dataJson = await data.json();

        setVideos(dataJson.items);
    }

    if (!videos) {
        return null;
    }

    return (
        <div className="flex flex-col gap-2">
            {videos.map((video) => <Link to={`/watch?v=${video.id}`} key={video.id} ><SuggestionVideo video={video}/></Link>)}
        </div>
    );
};

export default SuggestionList;