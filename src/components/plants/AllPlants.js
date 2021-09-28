import React from 'react';
import LoadingIndicator from '../shared/LoadingIndicator';
import css from "./AllPlants.module.css";
import PlantListItem from "./PlantListItem";
import usePlants from '../../hooks/usePlants';

const AllPlants = (props) => {
    var currentUser;
    currentUser = props.currentUser;
    const { allPlants, setAllPlants, promiseInProgress } = usePlants(currentUser);

    const stateUpdated = (updatedObject) => {
        setAllPlants(updatedObject);
    }

    return (
        <React.Fragment>
            <LoadingIndicator promiseInProgress={promiseInProgress} />
            <div className={css.plantslist}>
                {allPlants.map(plant => <PlantListItem stateUpdated={stateUpdated} key={plant.rowKey} currentUser={props.currentUser} {...plant} />)}

            </div>
        </React.Fragment>

    );
}

export default AllPlants