import React from "react";

const Button = ({name}) => {
    return (
        <button className="px-3 py-1 bg-gray-200 rounded-lg whitespace-nowrap">{name}</button>
    );
}

export default Button;