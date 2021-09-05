import React, { useState, useEffect } from 'react';
import Users from "./components/users-login/Users";
import UserPlants from "./components/user-plants/UserPlants";
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";


export default function App() {

    //TODO: present a list of users to log on as
    // separate the USer plants into a separate component
    //once the user is clicked, load user plants component
    const [hasError, setErrors] = useState(false);
    const [userPlants, setUserPlants] = useState([]);
    const [users, setUsers] = useState([]);
    const { userrowkey } = useParams();


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

    async function fetchUserPlants(userId) {

        console.log(userrowkey);


        const res = axios.get(`https://plants-api.azurewebsites.net/users/${userId}/plants`)
            .then(response => {
                setUserPlants(response.data);
                // console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchUsers();
        fetchUserPlants('039c9b79-8dfc-4e9a-85ec-33f350f3bd2e');
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
                            <UserPlants userPlants={userPlants} />
                        </Route>
                    </div>
                </Router>
            </main>
        </React.Fragment >
    );
}
