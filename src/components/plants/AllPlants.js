import React from 'react';
import PlantListItem from "./PlantListItem";
import css from "./AllPlants.module.css"

var plant;

function stateUpdated(updatedObject) {
    plant.stateUpdated(updatedObject);
    console.log(`AllPlants.js: Refreshing state`);
}

const AllPlants = (props) => {
    plant = props;
    return (
        <div className={css.plantslist}>
            {props.plants.map(plant => <PlantListItem stateUpdated={stateUpdated} key={plant.rowKey} currentUser={props.currentUser} {...plant} />)}
        </div>
    )
}

export default AllPlants