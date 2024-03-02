import React from "react";

const VideoCard = ({ info }) => {
    let { snippet, statistics } = info;
    return (
        <div className="w-80 my-2">
            <img className="rounded-xl w-full" src={snippet.thumbnails?.medium?.url} alt="thumbnail" />
            <div className="w-full px-2">
                <h1 className="font-semibold py-1">{snippet.title}</h1>
                <div className="text-gray-500 text-sm">{snippet.channelTitle}</div>
                <div className="text-gray-500 text-sm">{statistics.viewCount} views</div>
            </div>
        </div>
    );
}

export default VideoCard;