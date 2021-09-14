import React, { useState, useEffect } from 'react';
import UserPlants from "./UserPlants";
import axios from 'axios';
import { useParams } from "react-router-dom";
import LoadingIndicator from '../shared/LoadingIndicator';
import { trackPromise, usePromiseTracker } from "react-promise-tracker"

var baseUrl = "https://plants-api.azurewebsites.net"
// var baseUrl = "https://localhost:44391"

export default function UserPlantsFetcher() {
    const [userPlants, setUserPlants] = useState([]);
    const { userrowkey } = useParams();
    const { promiseInProgress } = usePromiseTracker();

    console.log(userrowkey);

    const stateUpdated = (updatedObject) => {
        setUserPlants(updatedObject);
    }

    async function fetchUserPlants() {
        axios.get(`${baseUrl}/users/${userrowkey}/plants`)
            .then(response => {
                setUserPlants(response.data);
                console.log("setUserPlants => ")
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchUserPlants();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <LoadingIndicator promiseInProgress={promiseInProgress} />
            <UserPlants userPlants={userPlants} stateUpdated={stateUpdated} />
        </React.Fragment>
    );
}
