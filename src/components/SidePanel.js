import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/store/appSlice";

const SidePanel = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    const fixedSidePanel = useSelector(store => store.app.fixedSidePanel);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch])

    if(!isMenuOpen) {
        return null;
    }

    return (
        <div className={`fixed ${fixedSidePanel ? "fixed" : "md:static"} min-w-[199.3px] h-full z-10`}>
            <div className="basis-48 flex-shrink-0 fixed top-[60px] px-3 h-[93svh] h-[93dvh] overflow-y-scroll bg-white">
                <ul className="py-3 border-b-2">
                    <Link to="/"><li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Home</li></ Link>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Shorts</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Subscriptions</li>
                </ul>
                <h1 className="pt-3 pb-1 font-semibold">Explore</h1>
                <ul className="pb-3 border-b-2">
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Trending</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Music</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Games</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Movies</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">News</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Sports</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Podcasts</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Learning</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Live</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Shopping</li>
                </ul>
                <ul className="py-3 border-b-2">
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Settings</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Report</li>
                    <li className="py-2 px-8 hover:bg-gray-300 rounded-lg cursor-pointer">Help</li>
                </ul>
            </div>
        </div>
      
    );
}

export default SidePanel;