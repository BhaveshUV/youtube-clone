import React from "react";
import Description from "./Description";

const VideoInfo = ({ video }) => {
    return (
        <div>
            <div className="text-xl font-semibold py-2">{video.items[0]?.snippet?.title}</div>
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-2">
                <div className="flex gap-4 items-center">
                    <span className="font-medium">{video.items[0]?.snippet?.channelTitle}</span>
                    <button className="px-4 py-2 bg-black text-white rounded-full font-medium">Subscribe</button>
                </div>
                <div className="flex gap-2">
                    <div className="bg-gray-100 rounded-full flex items-center">
                        <button className="py-2 pl-2 inline-flex items-center font-medium text-sm h-full rounded-l-full hover:bg-gray-200">
                            <img
                                className="h-5"
                                src="https://static.vecteezy.com/system/resources/previews/021/013/524/original/like-icon-on-transparent-background-free-png.png"
                                alt="like"
                            />
                            <span className="border-gray-400 border-r-[1px] pr-4 self-center">{video.items[0]?.statistics?.likeCount}</span>
                        </button>
                        <button className="py-2 pl-2 pr-4 inline-flex font-medium text-sm rounded-r-full hover:bg-gray-200">
                            <img
                                className="h-5 rotate-180"
                                src="https://static.vecteezy.com/system/resources/previews/021/013/524/original/like-icon-on-transparent-background-free-png.png"
                                alt="dislike"
                            />
                        </button>
                    </div>
                    <div className="bg-gray-100 rounded-full flex items-center">
                        <button className="px-3 py-2 inline-flex items-center font-medium text-sm rounded-full hover:bg-gray-200">
                            <img
                                className="h-6 px-1"
                                src="https://cdn.iconscout.com/icon/free/png-512/free-arrow-1976201-1674187.png"
                                alt="share"
                            />
                            Share
                        </button>
                    </div>
                    <button className="px-4 py-2 bg-gray-100 font-bold rounded-full hover:bg-gray-200"><span className="relative bottom-1 text-nowrap">. . .</span></button>
                </div>
            </div>
            <Description video={video} />
        </div>
    );
}

export default VideoInfo;