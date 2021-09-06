import React from 'react';
import UserPlant from "./UserPlant";
// import './UserPlants.css';

var onChangeParent;

function stateUpdated() {
    () => onChangeParent.refreshState();
    console.log(`UserPlants.js: Refreshing state`);
}

const SingleUserPlants = (props) => {
    onChangeParent = props.onChange
    return (
        <div>
            { <UserPlant stateUpdated={stateUpdated} userPlant={props.userPlants[0]} />}
        </div>
    )
}

export default SingleUserPlants