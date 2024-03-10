import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import { addToCache } from "../utils/store/CacheRecommendationSlice";
import { YOUTUBE_SEARCH_RECOMMENDATION } from "../utils/constants";
import SearchRecommendation from "./SearchRecommendation";
import { Link } from "react-router-dom";

const Header = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [searchText, setSearchText] = useState("");
    const cache = useSelector(store => store.cacheRecommendations.cache);

    let dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    let getData = async (text) => {
        let data = await fetch(YOUTUBE_SEARCH_RECOMMENDATION + text);
        let dataJson = await data.json();

        setRecommendations(dataJson[1]);
        console.log({ [text]: dataJson[1] });
        dispatch(addToCache({ [text]: dataJson[1] }));
    }

    useEffect(() => {
        let timer = null;
        if (cache[searchText]) {
            setRecommendations(cache[searchText]);
        } else if (cache[searchText] == null) {
            timer = setTimeout(() => {
                getData(searchText);
            }, 200);
        }

        return () => {
            clearTimeout(timer)
        }
    }, [searchText])

    let handleSearch = (sugg) => {
        setSearchText(sugg);
        let search = document.getElementById("searchBox");
        search.blur();
    }


    return (
        <div className="grid grid-cols-4 grid-flow-col h-18 px-4 py-2 items-center bg-white sticky top-0 z-10"
            onSubmit={(e) => {
                e.target[1].children[0].click();
                handleSearch(e.target[0].value);
            }}>
            <div className="flex gap-2 h-8 col-span-1">
                <img className="cursor-pointer" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="menu" onClick={toggleMenuHandler} />
                <img className="h-6 self-center" src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png" alt="menu" />
            </div>

            <form className={`flex lg:w-[35rem] md:w-[22rem] justify-self-center col-span-2 mr-[37.19px] `}
            >
                <div className={`w-fit flex-grow flex relative border-2 border-gray-300 rounded-l-full has-[:focus]:outline-none has-[:focus]:border-blue-800 ${!showRecommendations ? "ml-[37.19px]" : ""}`}>
                    {!showRecommendations ? null :
                        <img
                            className="h-[1.1rem] w-18 flex-shrink-0 self-center pl-4 pr-1"
                            src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-line-icon.png"
                            alt=""
                        />
                    }
                    <input id="searchBox"
                        className=" rounded-l-full px-2 py-2 w-full focus:outline-none "
                        type="text"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onFocus={() => setShowRecommendations(true)}
                        onBlur={() => setShowRecommendations(false)}
                    />
                    <div className={`absolute min-w-full w-fit top-11 cursor-default ${showRecommendations ? "" : "hidden"}`}>
                        <SearchRecommendation list={recommendations} handleSearch={handleSearch} />
                    </div>
                </div>
                <button className="border-r-2 border-y-2 border-gray-300 flex items-center rounded-r-full">
                    <Link to={"/results?search_query=" + searchText}>
                        <img
                            className="h-[1.1rem] w-18 flex-shrink-0 px-4"
                            src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-line-icon.png"
                            alt="Search" />
                    </Link>
                </button>
            </form>

            <div className="flex col-span-1 justify-self-end">
                <img className="h-6" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="User" />
            </div>

        </div>
    );
}

export default Header;