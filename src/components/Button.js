import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import { useNavigate } from "react-router-dom";


const Button = ({ name }) => {
    let handleSearch = useContext(SearchContext);
    let navigate = useNavigate();

    let handleSubmit = (name) => {
        handleSearch(name);
        navigate("/results?search_query=" + name);
    }

    return (
        <button id="Iamhere"
            className="px-3 py-1 bg-gray-200 rounded-lg whitespace-nowrap"
            onClick={() => handleSubmit(name)}
        >{name}</button>
    );
}

export default Button;