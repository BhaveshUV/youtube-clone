import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";

const Header = () => {
    let dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-cols-4 grid-flow-col h-18 px-4 py-2 items-center bg-white sticky top-0 z-10">

            <div className="flex gap-2 h-8 col-span-1">
                <img className="cursor-pointer" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="menu" onClick={toggleMenuHandler}/>
                <img className="h-6 self-center" src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png" alt="menu" />
            </div>

            <div className="flex lg:w-[35rem] md:w-[22rem] justify-self-center col-span-2">
                <input className="border-2 border-gray-300 rounded-l-full px-2 py-2 flex-grow focus:outline-none focus:border-blue-800" type="text" placeholder="Search"></input>
                <div className="border-r-2 border-y-2 border-gray-300 flex items-center rounded-r-full">
                    <img className="h-5 w-18 flex-shrink-0 px-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQp2w2C1P1q8pgIklr4HUyVVCPGWvMNpiz4CsWJVyOg&s" alt="Search" />
                </div>
            </div>

            <div className="flex col-span-1 justify-self-end">
                <img className="h-6" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="User" />
            </div>
            
        </div>
    );
}

export default Header;