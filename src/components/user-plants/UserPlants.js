import React from 'react';
import UserPlant from "./UserPlant";
// import './UserPlants.css';

var plant;

function stateUpdated() {
    plant.stateUpdated();
    console.log(`UserPlants.js: Refreshing state`);
}

const UserPlants = (props) => {
    plant=props;
    return (
        <div>
            {props.userPlants.map(userPlant => <UserPlant stateUpdated={stateUpdated} key={userPlant.userPlantRowKey} {...userPlant} />)}
        </div>
    )
}

export default UserPlants