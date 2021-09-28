import { useState, useEffect } from 'react';
import axios from 'axios';
import { trackPromise, usePromiseTracker } from "react-promise-tracker"

export function useUsers() {

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState();
    const { promiseInProgress } = usePromiseTracker();

    useEffect(() => {
        var baseUrl = "https://plants-api.azurewebsites.net"
        // var baseUrl = "https://localhost:44391"
        trackPromise(
            axios.get(`${baseUrl}/users`)
                .then(response => {
                    setUsers(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                }));
    }, []);

    return { users, currentUser, setCurrentUser, promiseInProgress };
}
export default useUsers;

