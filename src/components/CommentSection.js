import React, { useState, useEffect, useRef } from "react";
import { YOUTUBE_COMMENT_API } from "../utils/constants";
import CommentList from "./CommentList";
import DUMMY_COMMENTS from "../utils/DummyComments.json";

const CommentSection = ({ id }) => {
    const [comments, setComments] = useState(null);
    const [newComment, setNewComment] = useState("");
    const [nLevelNested, setNLevelNested] = useState(false);
    const count = useRef(0);

    let handleCancelComment = () => {
        let form = document.getElementById("addComment");
        form[0].value = ""; //though 1st child is div, at 1st index input tag is present
    }

    useEffect(() => {
        let getComments = async () => {
            if (!nLevelNested) {
                let data = await fetch(YOUTUBE_COMMENT_API(id));
                let dataJson = await data.json();

                setComments(dataJson);
            } else {
                setComments(DUMMY_COMMENTS);
            }
        }
        getComments();
    }, [nLevelNested, id]);

    if (!comments) {
        return null;
    }

    // console.log(comments);

    return comments.error ? null : (
        <div className="pb-4">
            <div>
                <div className="text-lg font-bold py-4 flex flex-col md:flex-row md:items-center">
                    <span>{comments.items.length} comments</span>
                    <button
                        className="w-fit font-medium text-[15px] bg-green-600 text-white rounded-full px-2 border-2 border-green-800 md:mx-2 active:bg-green-100 active:text-black"
                        onClick={() => setNLevelNested(!nLevelNested)}
                    >
                        {nLevelNested ? "Show original comments" : "Show n-level nested comments"}
                    </button>
                </div>
                <form
                    id="addComment"
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(e.target[0]);
                        let content = e.target[0].value;
                        // console.log(content);
                        //Probably works for both normal and nLevel comments
                        let templateComments = structuredClone(DUMMY_COMMENTS);
                        let newComment = templateComments.items[0];
                        console.log(DUMMY_COMMENTS);

                        // Update newComment
                        newComment.snippet.topLevelComment.snippet.textOriginal = content;
                        newComment.snippet.topLevelComment.snippet.authorDisplayName = "@Default-user";
                        newComment.snippet.topLevelComment.snippet.authorProfileImageUrl = "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";
                        newComment.id = count.current++;

                        setComments(prevState => ({
                            ...prevState,
                            items: [newComment, ...prevState.items],
                        }));
                        setNewComment("");
                        // Probably should also have to blur the input
                    }}>
                    <div className="flex gap-2">
                        <img className="h-6" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="User" />
                        <input
                            type="textarea"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="flex-grow outline-none border-b-2 border-gray-300 focus:border-gray-600"
                            placeholder="Add a comment..."
                        />
                    </div>
                    <div className="flex gap-4 py-2">
                        <button
                            className="hover:bg-gray-300 py-1 px-4 rounded-full"
                            type="button" onClick={handleCancelComment}>Cancel</button>
                        <button
                            disabled={!newComment}
                            type="submit"
                            className={`${!newComment ? "bg-gray-200" : "bg-blue-500"} py-1 px-4 rounded-full`}>Comment</button>
                    </div>
                </form>
                <CommentList comments={comments.items} />
            </div>
        </div>
    );
};

export default CommentSection;