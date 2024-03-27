import React from 'react';

const SearchVideoCard = ({ video }) => {
    return (
        <div className="flex overflow-hidden">
            <div className="rounded-xl min-w-[157px] max-w-[157px] md:min-w-[320px] flex justify-center mr-2">
                <div className={`${video.id.channelId ? "flex  justify-center" : "object-contain "}`}>
                    <img className={`${video.id?.channelId ? "rounded-full h-[120px]" : "rounded-xl"}`}
                        src={video.snippet?.thumbnails?.medium.url || video.snippet?.thumbnails?.high.url} alt="thumbnail" />
                </div>
            </div>
            <div className={`flex flex-col gap-1 ${video.id.channelId ? "justify-center" : ""}`}>
                <div className="w-full md:px-2">
                    <h1 className="font-semibold md:text-lg line-clamp-2">{video.snippet?.title}</h1>
                    {video.id.videoId ?
                        <>
                            <div className="text-gray-500 text-sm">n views</div>
                            <div className="font-medium text-gray-500 text-sm md:py-2">{video.snippet?.channelTitle}</div>
                        </>
                        : null}
                    <div className="hidden md:inline-block text-gray-500 text-sm py-2">{video.snippet?.description}</div>
                </div>
                {!video.id.channelId ? null :
                    <div className='flex items-center'>
                        <button className='px-3 py-1 text-white bg-black rounded-full'>Subscribe</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchVideoCard;