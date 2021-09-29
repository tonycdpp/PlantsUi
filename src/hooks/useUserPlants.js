import { useState, useEffect } from 'react';
import axios from 'axios';
import { trackPromise, usePromiseTracker } from "react-promise-tracker"

export function useUserPlants(currentUser) {

    const [userPlants, setUserPlants] = useState([]);
    const { promiseInProgress } = usePromiseTracker();

    useEffect(() => {
        var baseUrl = "https://plants-api.azurewebsites.net"
        // var baseUrl = "https://localhost:44391"
        trackPromise(
            axios.get(`${baseUrl}/users/${currentUser}/plants`)
                .then(response => {
                    setUserPlants(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                }));
    }, []);

    return { userPlants, setUserPlants, promiseInProgress };
}
export default useUserPlants;

