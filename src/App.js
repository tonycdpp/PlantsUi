import React, { useState, useEffect } from 'react';
import UserPlant from "./components/UserPlant";

import './App.css';
import axios from 'axios';

var testData = []

const UserPlants = (props) => (

    <div>
        {/* {props.userPlants} */}
        {props.userPlants.map(userPlant => <UserPlant key={userPlant.userPlantRowKey} {...userPlant} />)}
    </div>
)

export default function App() {

    //TODO: make data appear on user login
    const [hasError, setErrors] = useState(false);
    const [userPlants, setUserPlants] = useState([testData]);

    async function fetchData() {
        const res = axios.get("https://plants-api.azurewebsites.net/users/039c9b79-8dfc-4e9a-85ec-33f350f3bd2e/plants")
        .then(response => {
            setUserPlants(response.data);
            console.log(response.data)
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchData();
        console.log(userPlants)
        console.log(testData)
    },[]);


    return (
        <UserPlants userPlants={userPlants} />
    );
}
