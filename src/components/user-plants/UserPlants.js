import React from 'react';
import UserPlant from "./UserPlant";
import css from './UserPlants.module.css';
// import { useParams } from "react-router-dom";
import LoadingIndicator from '../shared/LoadingIndicator';
import useUserPlants from '../../hooks/useUserPlants';

const UserPlants = (props) => {
    // const { userrowkey } = useParams();
    var currentUser;
    currentUser = props.currentUser;
    const { userPlants, setUserPlants, promiseInProgress } = useUserPlants(currentUser);

    const stateUpdated = (updatedObject) => {
        setUserPlants(updatedObject);
    }

    return (
        <React.Fragment>
            <LoadingIndicator promiseInProgress={promiseInProgress} />
            <div className={css.myplantscentredcontainer}>
                {userPlants.map(userPlant => <UserPlant stateUpdated={stateUpdated} key={userPlant.userPlantRowKey} {...userPlant} />)}
            </div>
        </React.Fragment>
    );
}
export default UserPlants
