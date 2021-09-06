import React from 'react';
import axios from 'axios';
import PlantButton from '../shared/PlantButton';

var plant;
// var baseUrl = "https://plants-api.azurewebsites.net"
var baseUrl = "https://localhost:44391"

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
    <div className="plants-profile" style={{ margin: '1rem' }}>
      <img alt={props.plantName} src={props.plantPhotoUri} style={{ width: '100px', height: '100px' }} />
      <div className="info">
        <div className="name"><a href={props.plantWikipediaUri}>{props.plantName}</a> (owned since:{(new Date(props.ownershipDate)).toLocaleDateString('en-GB')})</div>
        <div className="name" style={{ color: props.wateringDueInDays < 0 ? 'red' : 'black' }}>
          Watering {props.wateringDueInDays < 0 ? ' overdue by ' : ' due in '} {props.wateringDueInDays < 0 ? props.wateringDueInDays * -1 : props.wateringDueInDays} {"days "} 
          <PlantButton display={"Mark as watered"} action={water} userplant={props.userPlantRowKey} />
        </div>
        <div className="name" style={{ color: props.repottingDueInDays < 0 ? 'red' : 'black' }}>
          Repotting {props.repottingDueInDays < 0 ? ' overdue by ' : ' due in '} {props.repottingDueInDays < 0 ? props.repottingDueInDays * -1 : props.repottingDueInDays} {"days "} 
          <PlantButton display={"Mark as repotted"} action={repot} userplant={props.userPlantRowKey} />
        </div>
      </div>
    </div>
  );
}

export default UserPlant
