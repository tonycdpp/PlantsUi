import React, { useState, useEffect } from 'react';
import Users from "./Users";
import axios from 'axios';

export default function UsersFetcher() {
    const [users, setUsers] = useState([]);
    async function fetchUsers() {

        axios.get(`https://plants-api.azurewebsites.net/users`)
            .then(response => {
                setUsers(response.data);
                // console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Users data={users} />
    );
}
