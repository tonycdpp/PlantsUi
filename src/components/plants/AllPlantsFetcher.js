import React, { useState, useEffect } from 'react';
import AllPlants from "./AllPlants";
import axios from 'axios';
import { useParams } from "react-router-dom";

var baseUrl = "https://plants-api.azurewebsites.net"
// var baseUrl = "https://localhost:44391"

export default function AllPlantsFetcher() {
    const [allPlants, setAllPlants] = useState([]);
    const { userrowkey } = useParams();
    console.log(userrowkey);

    const stateUpdated = (updatedObject) => 
    {
        setAllPlants(updatedObject);
    }

    async function fetchUserPlants(userId) {
        axios.get(`${baseUrl}/plants`)
            .then(response => {
                setAllPlants(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchUserPlants(userrowkey);
    }, []);

    return (
        <AllPlants plants={allPlants} stateUpdated={stateUpdated} />
    );
}
