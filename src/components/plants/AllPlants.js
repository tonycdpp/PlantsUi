import React from 'react';
import PlantListItem from "./PlantListItem";
// import './UserPlants.css';

var plant;

function stateUpdated(updatedObject) {
    plant.stateUpdated(updatedObject);
    console.log(`UserPlants.js: Refreshing state`);
}

const AllPlants = (props) => {
    plant=props;
    return (
        <div>
            {props.userPlants.map(plant => <PlantListItem stateUpdated={stateUpdated} key={plant.rowKey} {...plant} />)}
        </div>
    )
}

export default AllPlants