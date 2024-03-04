import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidePanel = () => {
    const isMenuOpen = useSelector(store => store.isMenuOpen);
    const fixedSidePanel = useSelector(store => store.fixedSidePanel);

    if(!isMenuOpen) {
        return null;
    }

    return (
        <div className={`${fixedSidePanel ? "fixed" : ""} min-w-[199.3px] h-full bg-white`}>
            <div className="basis-48 flex-shrink-0 fixed top-[59.2px] px-3 h-[92vh] overflow-y-scroll">
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