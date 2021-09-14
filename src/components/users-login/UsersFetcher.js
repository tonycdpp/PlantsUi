import React, { useState, useEffect } from 'react';
import Users from "./Users";
import axios from 'axios';
import UserOptions from '../user-options/UserOptions';
import LoadingIndicator from '../shared/LoadingIndicator';
import { trackPromise, usePromiseTracker } from "react-promise-tracker"

var user;
var baseUrl = "https://plants-api.azurewebsites.net"
// var baseUrl = "https://localhost:44391"

function loginUser(userRowKey) {
    console.log(`UsersFetcher.js: Logging in action on this user ${userRowKey.RowKey}`);
    user.performLogIn(userRowKey);
}

const UsersFetcher = (props) => {
    user = props;
    const [users, setUsers] = useState([]);
    const { promiseInProgress } = usePromiseTracker();

    async function fetchUsers() {
        trackPromise(
            axios.get(`${baseUrl}/users`)
                .then(response => {
                    setUsers(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                }));

    }

    useEffect(() => {

        fetchUsers()

    }, []);

    return (
        <React.Fragment>
            <LoadingIndicator promiseInProgress={promiseInProgress} />
            {
                props.currentUser === undefined ?
                    <Users loginUser={loginUser} data={users} />
                    :
                    <UserOptions currentUser={props.currentUser} />
            }
        </React.Fragment>

    );
}

export default UsersFetcher