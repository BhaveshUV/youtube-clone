import React, { useState, useEffect } from "react";
import { YOUTUBE_COMMENT_API } from "../utils/constants";
import CommentList from "./CommentList";
import DUMMY_COMMENTS from "../utils/DummyComments.json";

const CommentSection = ({ id }) => {
    const [comments, setComments] = useState(null);
    const [nLevelNested, setNLevelNested] = useState(false);

    useEffect(() => {
        getComments();
    }, [nLevelNested, id]);

    let getComments = async () => {
        if (!nLevelNested) {
            let data = await fetch(YOUTUBE_COMMENT_API(id));
            let dataJson = await data.json();

            setComments(dataJson);
        } else {
            setComments(DUMMY_COMMENTS);
        }
    }

    if (!comments) {
        return null;
    }

    console.log(comments);

    return comments.error ? null : (
        <div className="pb-4">
            <div>
                <div className="text-lg font-bold py-4 flex items-center">
                    <span>{comments.items.length} comments</span>
                    <button
                        className="font-medium text-[15px] bg-green-600 text-white rounded-full px-2 border-2 border-green-800 mx-2 active:bg-green-100 active:text-black"
                        onClick={() => setNLevelNested(!nLevelNested)}
                    >
                        {nLevelNested ? "Show original comments" : "Show n-level nested comments"}
                    </button>
                </div>
                <CommentList comments={comments.items} />
            </div>
        </div>
    );
};

export default CommentSection;