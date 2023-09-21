import React, { useState, useEffect } from "react";
import axios from "axios";

const Cities = ({ stateId, setSelectedCityName }) => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (stateId) {
            axios
                .get(`http://api.minebrat.com/api/v1/states/cities/${stateId}`)
                .then((response) => {
                    setCities([...response.data]);
                });
        }
    }, [stateId]);


    const cityChange = (e) => {
        setSelectedCityName(e.target.value);
    }

    return (
        <select onChange={cityChange}>
            {cities.map((city) => (
                <option key={city.cityId} value={city.cityName}>
                    {city.cityName}
                </option>
            ))}
        </select>
    );
};

export default Cities;