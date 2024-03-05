import React from "react";

const Comment = ({ commentThread, isReply }) => {
    let comment
    if(isReply) {
        comment = commentThread.snippet;
    }
    else {
        comment = commentThread?.snippet?.topLevelComment?.snippet;
    }
    return (
        <div className="mb-4">
            <div className="flex gap-2">
                <img className="h-6 rounded-full" src={comment.authorProfileImageUrl} alt="User" />
                <div>
                    <div className="text-sm font-medium">{comment.authorDisplayName}</div>
                    <div className="text-sm">{comment.textOriginal}</div>
                    <div className="flex items-center gap-2">
                        <button className="py-2 inline-flex text-sm">
                            <img
                                className="box-content h-5 hover:bg-gray-200 py-1 rounded-full"
                                src="https://static.vecteezy.com/system/resources/previews/021/013/524/original/like-icon-on-transparent-background-free-png.png"
                                alt="like"
                            />
                            <span className="self-center">{comment.likeCount}</span>
                        </button>
                        <button className="py-2 inline-flex text-sm">
                            <img
                                className="box-content h-5 hover:bg-gray-200 py-1 rounded-full rotate-180"
                                src="https://static.vecteezy.com/system/resources/previews/021/013/524/original/like-icon-on-transparent-background-free-png.png"
                                alt="dislike"
                            />
                        </button>
                        <button className="text-xs font-medium px-4">Reply</button>
                    </div>
                </div>
            </div>
            {
                commentThread.replies &&
                <div className="pl-7 border-l-2 ml-3">
                    <div className="pb-2">
                        <span className="text-xs">🔽</span>
                        <span className="text-blue-600 text-sm font-medium pl-2">{commentThread.replies.comments.length} replies</span>
                    </div>
                    <div>
                        {commentThread.replies.comments.map((c, index) => {
                            return <Comment key={index} commentThread={c} isReply={true}/>
                        })}
                    </div>
                </div>
            }
        </div>
    );
};

export default Comment;