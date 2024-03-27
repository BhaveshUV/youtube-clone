import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS } from "../utils/constants";
import SearchVideoCard from "./SearchVideoCard";
import ButtonList from "./ButtonList";
// import DUMMY_SEARCH_RESULT from "../utils/DummySearchResult.json";
import { useDispatch } from "react-redux";
import { setFixedSidePanel, closeMenu } from "../utils/store/appSlice";

const SearchResultPage = () => {
    const [videos, setVideos] = useState(null);
    let [params] = useSearchParams();
    let query = params.get("search_query");
    let dispatch = useDispatch();

    useEffect(() => {
        let getVideos = async () => {
            let data = await fetch(YOUTUBE_SEARCH_RESULTS(query));
            let dataJson = await data.json();

            // let dataJson = DUMMY_SEARCH_RESULT;
            // console.log(dataJson);
            setVideos(dataJson.items);
        }

        getVideos();
        dispatch(setFixedSidePanel());
        dispatch(closeMenu());
    }, [query, dispatch])

    return videos ? (
        <div className="overflow-hidden">
            <ButtonList />
            <div className="flex flex-col py-4 px-6 gap-4">
                {videos.map((video, index) => <Link to={video.id.videoId ? `/watch?v=${video.id.videoId}` : `/results?search_query=${query}`} key={index}>
                    <SearchVideoCard video={video} />
                </Link>)}
            </div>
        </div>
    ) : null;
};

export default SearchResultPage;