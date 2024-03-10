import React from "react";
import { Link } from "react-router-dom";

const SearchRecommendation = ({ list, handleSearch }) => {

    if (!list || list.length === 0) {
        return null;
    }
    return (
        <div className="bg-white pt-4 pb-2 rounded-xl border-gray-200 border-[1px] shadow-xl" onMouseDown={(e) => e.preventDefault()}>
            {list.map((sugg, index) => {
                return (
                    <Link to={"/results?search_query=" + sugg} key={sugg}>
                        <div onClick={() => handleSearch(sugg)}
                            className="py-1 px-4 flex gap-2 items-center hover:bg-gray-200">
                            <img
                                className="h-4 pr-1"
                                src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-line-icon.png"
                                alt="Search"
                            />
                            <span className="font-semibold">{sugg}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default SearchRecommendation;