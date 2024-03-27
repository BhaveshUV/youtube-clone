import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import {  useDispatch } from "react-redux";
import { removeFixedSidePanel } from "../utils/store/appSlice";

const MainContainer = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(removeFixedSidePanel());
    }, [dispatch])
    return (
        <div className="overflow-hidden">
            <ButtonList />
            <VideoContainer />
        </div>
    );
}

export default MainContainer;