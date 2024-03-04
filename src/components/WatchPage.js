import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu, setFixedSidePanel } from "../utils/store/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_BY_ID } from "../utils/constants";
import VideoInfo from "./VideoInfo";
import SuggestionList from "./SuggestionList";

const WatchPage = () => {
    let [video, setVideo] = useState(null);
    let [params] = useSearchParams();
    let id = params.get("v");

    let dispatch = useDispatch();
    dispatch(setFixedSidePanel());

    let closeMenuHandler = () => {
        dispatch(closeMenu());
    }

    useEffect(() => {
        closeMenuHandler();
        getVideo();
    }, [id]);

    const getVideo = async () => {
        let data = await fetch(YOUTUBE_VIDEO_BY_ID(id));
        let dataJson = await data.json();

        setVideo(dataJson);
    }

    if (!video) return null;

    return (
        <div className="lg:grid grid-flow-col grid-cols-3 md:flex flex-col w-full gap-6 md:px-6 lg:px-20 py-6 overflow-hidden">
            <div className="col-span-2">
                <iframe className="rounded-xl w-full min-h-[400px] lg:h-[522px] md:h-[400px] sm:h-[500px]"
                    src={"https://www.youtube.com/embed/" + id + "?si=vESK0yZOactLPcCE"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
                <VideoInfo video={video} />
            </div>
            <SuggestionList />
        </div>
    );
}

export default WatchPage;