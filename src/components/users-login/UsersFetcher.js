import React, { useState, useEffect } from 'react';
import Users from "./Users";
import axios from 'axios';
import { NavLink } from 'react-router-dom'

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
    async function fetchUsers() {

        axios.get(`${baseUrl}/users`)
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
        <React.Fragment>
            {
                props.currentUser === undefined ?
                    <Users loginUser={loginUser} data={users} />
                    : <ul>
                        <li>
                            <NavLink to={`users/${props.currentUser.RowKey}/plants`}>Tap to see your plants</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/plants/all">{"Tap to see all plants"}</NavLink>
                        </li>
                    </ul>
            }
        </React.Fragment>

    );
}

export default UsersFetcher