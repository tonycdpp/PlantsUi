import React, { useState, useEffect } from 'react';
import Users from "./Users";
import axios from 'axios';
var user;


function loginUser(userRowKey) {
    console.log(`UsersFetcher.js: Logging in action on this user ${userRowKey}`);
    user.performLogIn(userRowKey);
}
const UsersFetcher = (props) => {
    user = props;
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
        <Users loginUser={loginUser} data={users} />
    );
}

export default UsersFetcher