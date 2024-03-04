import React from "react";

const SuggestionVideo = ({ video }) => {
    return (
        <div className="flex gap-2 h-fit overflow-hidden">
            <img
                className="h-24 rounded-lg"
                src={video.snippet?.thumbnails?.maxres?.url || video.snippet?.thumbnails?.medium?.url}
                alt="thumbnail"
            />
            <div>
                <div className="font-medium text-sm text-ellipsis max-h-10 overflow-hidden">{video.snippet?.title}</div>
                <div className="text-xs pt-1">{video.snippet?.channelTitle}</div>
                <div className="text-xs">{video.statistics?.viewCount} views</div>
            </div>
        </div>
    );
};

export default SuggestionVideo;