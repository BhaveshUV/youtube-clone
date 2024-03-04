import React, { useState, useEffect } from "react";

const Description = ({ video }) => {
    let [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        let descrip = document.getElementsByClassName("formatDescription");
        descrip[0].innerText = video.items[0].snippet.description;
        if(isExpanded) {
            console.log(descrip[0].classList);
            descrip[0].classList.remove("max-h-12");
        }
    }, [isExpanded]);

    return (
        <div className="w-full bg-gray-100 rounded-xl mt-4 p-3">
            <div className="font-medium text-sm">
                {video.items[0].statistics.viewCount} views &nbsp;&nbsp;
                <span className="text-sky-600">{video.items[0]?.snippet?.tags?.map((tag, index) => <a href="/" key={index}>#{tag} </a>)}</span>
            </div>
            <div className="formatDescription max-h-12 overflow-hidden text-ellipsis">
                {video.items[0].snippet.description}
            </div>
            {!isExpanded && <button className="text-sm font-medium" onClick={() => setIsExpanded(true)}>...more</button>}
        </div>
    );
}

export default Description;