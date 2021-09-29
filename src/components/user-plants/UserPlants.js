import React from 'react';
import UserPlant from "./UserPlant";
import css from './UserPlants.module.css';
import { useParams } from "react-router-dom";
import LoadingIndicator from '../shared/LoadingIndicator';
import useUserPlants from '../../hooks/useUserPlants';

const UserPlants = () => {
    const { userrowkey } = useParams();
    const { userPlants, setUserPlants, promiseInProgress } = useUserPlants(userrowkey);

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
