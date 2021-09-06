import React, { useState, useEffect } from 'react';
import UserPlants from "./UserPlants";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function UserPlantsFetcher() {
    const [userPlants, setUserPlants] = useState([]);
    const { userrowkey } = useParams();
    console.log(userrowkey);

    const stateUpdated = () => 
    {
        console.log(`UserPlantsFetcher.js: Refreshing state`);
        fetchUserPlants(userrowkey);
    }

    async function fetchUserPlants(userId) {
        axios.get(`https://plants-api.azurewebsites.net/users/${userId}/plants`)
            .then(response => {
                setUserPlants(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchUserPlants(userrowkey);
    }, []);

    return (
        <UserPlants userPlants={userPlants} stateUpdated={stateUpdated} />
    );
}
