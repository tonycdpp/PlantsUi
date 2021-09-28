import React from 'react';
import axios from 'axios';
import ActionButton from '../shared/ActionButton';
import css from './UserPlant.module.css';

var plant;
var baseUrl = "https://plants-api.azurewebsites.net"
// var baseUrl = "https://localhost:44391"

function water(userplant) {
  console.log(`UserPlant.js: Watering action on this plant ${userplant}`);
  axios.put(`${baseUrl}/userplants/${userplant}/watered`, {})
    .then(response => {
      // setUserPlants(response.data);
      console.log("updatedUserPlant => ")
      plant.stateUpdated(response.data);

    })
    .catch(function (error) {
      console.log(error);
    });
}

function repot(userplant) {
  console.log(`UserPlant.js: Repotting action on this plant ${userplant}`);
  axios.put(`${baseUrl}/userplants/${userplant}/repotted`, {})
    .then(response => {
      // setUserPlants(response.data);
      console.log("updatedUserPlant => ")
      plant.stateUpdated(response.data);

    })
    .catch(function (error) {
      console.log(error);
    });
}

const UserPlant = (props) => {
  plant = props;
  return (
    <div className={css.container}>
      <div className={css.plantimage}>
        <img alt={props.plantName} src={props.plantPhotoUri} />
      </div>
      <div className={css.centredleft}>
        <a href={props.plantWikipediaUri}>{props.plantName}</a>
      </div>
      <div className={css.topright} style={{ color: props.wateringDueInDays < 0 ? 'red' : 'black' }}>
        <div>
          Watering {props.wateringDueInDays < 0 ? ' overdue by ' : ' due in '} {props.wateringDueInDays < 0 ? props.wateringDueInDays * -1 : props.wateringDueInDays} {"days "}
        </div>
        <ActionButton display={"Mark as watered"} action={water} value={props.userPlantRowKey} />
      </div>
      <div className={css.bottomright} style={{ color: props.repottingDueInDays < 0 ? 'red' : 'black' }}>
        <div>
          Repotting {props.repottingDueInDays < 0 ? ' overdue by ' : ' due in '} {props.repottingDueInDays < 0 ? props.repottingDueInDays * -1 : props.repottingDueInDays} {"days "}
        </div>
        <ActionButton display={"Mark as repotted"} action={repot} value={props.userPlantRowKey} />
      </div>
    </div>
  );
}

export default UserPlant
