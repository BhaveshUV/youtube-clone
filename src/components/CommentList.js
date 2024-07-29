import React from "react";
import Comment  from "./Comment";

const CommentList = ({ comments }) => {
    return (
        <div>
            {comments.map((c, index) => {
                return <Comment key={c.id} commentThread={c} />
            })}
        </div>
    );
};

export default CommentList;
