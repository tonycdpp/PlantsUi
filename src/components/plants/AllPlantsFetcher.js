import React, { useState, useEffect } from 'react';
import AllPlants from "./AllPlants";
import axios from 'axios';
import LoadingIndicator from '../shared/LoadingIndicator';
import { trackPromise, usePromiseTracker } from "react-promise-tracker"

var baseUrl = "https://plants-api.azurewebsites.net"
// var baseUrl = "https://localhost:44391"

const AllPlantsFetcher = (props) => {
    const [allPlants, setAllPlants] = useState([]);
    const { promiseInProgress } = usePromiseTracker();


    async function fetchAllPlants() {
        if (props.currentUser !== undefined) {
            trackPromise(
                axios.get(`${baseUrl}/users/${props.currentUser.RowKey}/plants/all`)
                    .then(response => {
                        console.log(response.data)
                        setAllPlants(response.data);

                    })
                    .catch(function (error) {
                        console.log(error);
                    }));
        }
    }

    useEffect(() => {
        fetchAllPlants();
        // eslint-disable-next-line
    }, []);

    return (
        <React.Fragment>
            <LoadingIndicator promiseInProgress={promiseInProgress} />
            <AllPlants plants={allPlants} />
        </React.Fragment>

    );
}

export default AllPlantsFetcher