import React from "react";

const LiveMsg = ({ msg }) => {
    return (
        <div className="px-4 py-1 flex items-center gap-2 hover:bg-gray-200 cursor-pointer">
            <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                alt=""
                className="h-5"
            />
            <div className="leading-none">
                <span className="font-medium text-sm text-gray-500 leading-none">{msg.name} &nbsp;</span>
                <span className="text-sm leading-none">{msg.text}</span>
            </div>
        </div>
    );
};

export default LiveMsg;