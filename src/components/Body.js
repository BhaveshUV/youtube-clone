import React from "react";
import SidePanel from "./SidePanel";
import MainContainer from "./MainContainer";

const Body = () => {
    return (
        <div className="flex w-full">
            <SidePanel />
            <MainContainer />
        </div>
    );
}

export default Body;