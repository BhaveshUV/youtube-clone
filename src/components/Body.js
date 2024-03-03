import React from "react";
import SidePanel from "./SidePanel";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex w-full">
            <SidePanel />
            <Outlet />
        </div>
    );
}

export default Body;