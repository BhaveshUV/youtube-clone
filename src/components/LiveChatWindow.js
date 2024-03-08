import React, { useEffect } from "react";
import LiveMsg from "./LiveMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store/liveChatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChatWindow = () => {
    useEffect(() => {
        let liveMessages = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                text: generateRandomMessage(),
            }))
        }, 300);

        return () => {
            clearInterval(liveMessages);
        }
    }, [])

    let dispatch = useDispatch();
    let messages = useSelector(store => store.liveChat.messages);
    return (
        <div className="h-[500px] rounded-xl border-2 flex flex-col">
            <h1 className="px-4 py-2 border-b-2 rounded-t-xl">Live chat</h1>
            <div className="flex-grow flex flex-col-reverse overflow-auto">
                {messages.map((msg, index) => (
                    <LiveMsg key={index} msg={msg} />
                ))}
            </div>
            <form className="border-t-2 py-2 flex items-center"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (e.target[0].value !== "") {
                        dispatch(addMessage({
                            name: "Bhavesh",
                            text: e.target[0].value,
                        }))
                        e.target[0].value = "";
                    }
                }}>
                <img
                    src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                    alt=""
                    className="h-6 px-2"
                />
                <input type="text"
                    className="px-2 py-2 bg-gray-100 rounded-full h-8 focus:outline-none flex-grow flex-shrink"
                    placeholder="Chat..."
                />
                <button className="mx-2">
                    <img src="https://static-00.iconduck.com/assets.00/send-icon-2048x1863-u8j8xnb6.png"
                        alt="user"
                        className="h-7" />
                </button>
            </form>
        </div>
    );
};

export default LiveChatWindow;