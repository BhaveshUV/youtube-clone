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
        <div className="w-full relative flex items-center">
            <button className="absolute left-0 top-2 z-10 px-4 leading-10 rounded-full bg-gray-100" onClick={scrollLeft}>&lt;</button>
            <div className="btnList pt-3 px-10 flex gap-3 overflow-x-auto items-center">
                {list.map((btn) => <Button name={btn} />)}
            </div>
            <button className="absolute right-0 top-2 z-10 px-4 leading-10 rounded-full bg-gray-100" onClick={scrollRight}>&gt;</button>
        </div>
    );
}

export default ButtonList;