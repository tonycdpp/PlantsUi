import React, { useState, useEffect } from 'react';
import Users from "./components/users-login/Users";
import UserPlants from "./components/user-plants/UserPlants";
import UserPlantsFetcher from "./components/user-plants/UserPlantsFetcher";
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";


export default function App() {
    const [hasError, setErrors] = useState(false);
    const [userPlants, setUserPlants] = useState([]);
    const [users, setUsers] = useState([]);

    async function fetchUsers() {

        const res = axios.get(`https://plants-api.azurewebsites.net/users`)
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
            <main>
                <Router>
                    <div>
                        <Route exact path="/" >
                            <Users data={users} />
                        </Route>
                        <Route exact path="/users/:userrowkey/plants" >
                            <UserPlantsFetcher />
                        </Route>
                    </div>
                </Router>
            </main>
        </React.Fragment >
    );
}
