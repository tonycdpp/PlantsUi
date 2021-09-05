import React from 'react';
import UserPlant from "./UserPlant";
// import './UserPlants.css';

const UserPlants = (props) => (
    <div>
        {props.userPlants.map(userPlant => <UserPlant key={userPlant.userPlantRowKey} {...userPlant} />)}
    </div>
)

export default UserPlants