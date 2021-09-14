import React, { useState, useEffect } from 'react';
import AllPlants from "./AllPlants";
import axios from 'axios';

var baseUrl = "https://plants-api.azurewebsites.net"
    // var baseUrl = "https://localhost:44391"

const AllPlantsFetcher = (props) => {
    const [allPlants, setAllPlants] = useState([]);

    async function fetchAllPlants() {
        if (props.currentUser !== undefined) {
            axios.get(`${baseUrl}/users/${props.currentUser.RowKey}/plants/all`)
                .then(response => {
                    console.log(response.data)
                    setAllPlants(response.data);

                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }

    useEffect(() => {
        fetchAllPlants();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ( <
        AllPlants plants = { allPlants }
        />
    );
}

export default AllPlantsFetcher