import React from 'react';
import PlantListItem from "./PlantListItem";
import css from "./AllPlants.module.css"

const AllPlants = (props) => {
    return (
        <div className={css.plantslist}>
            {props.plants.map(plant => <PlantListItem key={plant.rowKey} {...plant} />)}
        </div>
    )
}

export default AllPlants