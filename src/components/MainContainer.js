import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { UseDispatch, useDispatch } from "react-redux";
import { removeFixedSidePanel } from "../utils/store/appSlice";

const MainContainer = () => {
    let dispatch = useDispatch();

    dispatch(removeFixedSidePanel());
    return (
        <div className="overflow-hidden">
            <ButtonList />
            <VideoContainer />
        </div>
    );
}

export default MainContainer;