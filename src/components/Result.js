import React from "react";



const Result = () => {
    const stateId = new URLSearchParams(window.location.search).get("stateName");
    const cityName = new URLSearchParams(window.location.search).get("cityName");

    return (
        <div>
            <h1>You have selected {cityName}, {stateId}</h1>
        </div>
    );
};

export default Result;