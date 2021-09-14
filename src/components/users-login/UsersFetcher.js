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
                    <div className={css.optionslist}>
                        <ul>
                            <li className={css.menuoption}>
                                <NavLink to={`users/${props.currentUser.RowKey}/plants`}>
                                    <div className={css.menuoptiondiv}>
                                        <img alt={props.plantName} src={props.plantPhotoUri} />
                                        {"Your plants"}
                                        <p>This is where you'll find the list of your plants you own</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={css.menuoption}>
                                <NavLink activeClassName="active" to="/plants/all">
                                    <div className={css.menuoptiondiv}>
                                        <img alt={props.plantName} src={props.plantPhotoUri} />
                                        {"Plants database"}
                                        <p>This is where you'll find the list of your plants you own</p>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
            }
        </React.Fragment>

    );
}

export default UsersFetcher