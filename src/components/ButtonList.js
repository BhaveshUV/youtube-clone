import React from "react";
import Button from "./Button";

const ButtonList = () => {
    function scrollLeft() {
        const sidepanel = document.getElementsByClassName('btnList');
        sidepanel[0].scrollBy({ left: -250, behavior: 'smooth' });
    }
    function scrollRight() {
        const sidepanel = document.getElementsByClassName('btnList');
        sidepanel[0].scrollBy({ left: 250, behavior: 'smooth' });
    }
    const list = ["All", "Music", "Games", "Films", "Sports", "News", "Live", "Cricket", "Chill-out music", "Football", "Badminton", "Arts", "Speech", "Song-writing", "Quotes", "Comedy", "Acting", "Drama"];
    return (
        <div className="h-12">
            <div className="grid grid-flow-col gap-2 px-2 items-center bg-white fixed top-[59.2px]" style={{ gridTemplateColumns: "auto auto auto" }}>
                <button className="px-4 leading-10 rounded-full bg-gray-100 " onClick={scrollLeft}>&lt;</button>
                <div className="btnList py-3 overflow-auto flex gap-3 col-span-10">
                    {list.map((name, index) => <Button key={index} name={name} />)}
                </div>
                <button className="px-4 leading-10 rounded-full bg-gray-100" onClick={scrollRight}>&gt;</button>
            </div>
        </div>
    );
}

export default ButtonList;