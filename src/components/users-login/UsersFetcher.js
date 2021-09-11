import React, { useState, useEffect } from 'react';
import Users from "./Users";
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import css from './UsersFetcher.module.css'

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
                    :
                    <div class={css.optionslist}>
                        <ul>
                            <li class={css.menuoption}>
                                <img alt={props.plantName} src={props.plantPhotoUri} />
                                <NavLink to={`users/${props.currentUser.RowKey}/plants`}>Your space</NavLink>
                                <p>This is where you'll find the list of your plants you own</p>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/plants/all">{"Browse"}</NavLink>
                                <p>Browse through a list of plants, find more about each, and add to your space.</p>

                            </li>
                        </ul>
                    </div>
            }
        </React.Fragment>

    );
}

export default UsersFetcher