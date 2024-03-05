import React, { useState, useEffect } from "react";
import { YOUTUBE_COMMENT_API } from "../utils/constants";
import CommentList from "./CommentList";

const CommentSection = ({ id }) => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        getComments();
    }, []);

    let getComments = async () => {
        let data = await fetch(YOUTUBE_COMMENT_API(id));
        let dataJson = await data.json();

        setComments(dataJson);
    }

    if(!comments) {
        return null;
    }

    return (
        <div className="pb-4">
            <div>
                <div className="text-lg font-bold py-4">{comments.items.length} comments</div>
                <CommentList comments={comments.items} />
            </div>
        </div>
    );
};

export default CommentSection;