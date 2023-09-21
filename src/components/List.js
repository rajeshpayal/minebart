import React, { useState, useEffect } from "react";
import axios from "axios";
import Cities from "./Cities";

const List = () => {
    const [states, setStates] = useState([]);
    const [selectedStateId, setSelectedStateId] = useState(1);
    const [selectedCityName, setSelectedCityName] = useState(null);

    useEffect(() => {
        axios.get("http://api.minebrat.com/api/v1/states").then((response) => {
            setStates([...response.data]);
        });
    }, []);

    const handleChange = (event) => {
        setSelectedStateId(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedStateName = states.find((state) => state.stateId === selectedStateId).stateName;
        console.log(selectedStateName)
        window.location.href = `/result?stateName=${selectedStateName}&cityName=${selectedCityName}`;
    };

    return (
        <div>
            <select onChange={handleChange}>
                {states.map((state) => (
                    <option key={state.stateId} value={state.stateId}>
                        {state.stateName}
                    </option>
                ))}
            </select>
            <Cities stateId={selectedStateId} setSelectedCityName={setSelectedCityName} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default List;