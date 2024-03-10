import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    let error = useRouteError();
    console.log(error);
    return (
        <div>
            <div className="text-center">Oops! {error.error?.message}</div>
            <div className="text-center">{error?.status}: {error?.statusText}</div>
        </div>
    );
};

export default Error;