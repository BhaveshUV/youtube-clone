import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/store/appSlice";
import { useEffect } from "react";

const WatchPage = () => {
    let [params] = useSearchParams();

    let dispatch = useDispatch();

    let closeMenuHandler = () => {
        dispatch(closeMenu());
    }

    useEffect(() => {
        closeMenuHandler();
    }, []);

    return (
        <div className="grid grid-flow-col md:px-6 lg:px-20 py-6" style={{ gridTemplateColumns: "58rem 1fr" }}>
            <div>
                <iframe className="rounded-xl"
                    width="100%"
                    height="522"
                    src={"https://www.youtube.com/embed/"+ params.get("v") + "?si=vESK0yZOactLPcCE"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
                <div></div>
            </div>
        </div>
    );
}

export default WatchPage;