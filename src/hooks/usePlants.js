import { useState, useEffect } from 'react';
import axios from 'axios';
import { trackPromise, usePromiseTracker } from "react-promise-tracker"

export function usePlants(currentUser) {
    const [allPlants, setAllPlants] = useState([]);
    const { promiseInProgress } = usePromiseTracker();

    useEffect(() => {
        var baseUrl = "https://plants-api.azurewebsites.net"
        // var baseUrl = "https://localhost:44391"
        trackPromise(
            axios.get(`${baseUrl}/users/${currentUser.RowKey}/plants/all`)
                .then(response => {
                    console.log(response.data)
                    setAllPlants(response.data);

                })
                .catch(function (error) {
                    console.log(error);
                }));
    }, []);

    return { allPlants, setAllPlants, promiseInProgress };
}
export default usePlants;

