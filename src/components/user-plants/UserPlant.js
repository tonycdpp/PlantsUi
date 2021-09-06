import React from 'react';
import axios from 'axios';
import PlantButton from '../shared/PlantButton';

var plant;

function stateUpdated() {
  plant.stateUpdated();
  console.log(`UserPlant.js: Refreshing state`);
}

function water() {
  console.log(`UserPlant.js: Watering action on this plant ${plant.userPlantRowKey}`)
  const response = axios.put(`https://plants-api.azurewebsites.net/userplants/${plant.userPlantRowKey}/watered`, {});
  console.log(response.data);
}

function repot() {
  console.log(`UserPlant.js: Repotting action on this plant ${plant.userPlantRowKey}`)
  const response = axios.put(`https://plants-api.azurewebsites.net/userplants/${plant.userPlantRowKey}/repotted`, {});
  console.log(response.data);
}

const UserPlant = (props) => {
  plant=props;
  return (
    <div className="plants-profile" style={{ margin: '1rem' }}>
      <img alt={props.plantName} src={props.plantPhotoUri} style={{ width: '100px', height: '100px' }} />
      <div className="info">
        <div className="name"><a href={props.plantWikipediaUri}>{props.plantName}</a> (owned since:{(new Date(props.ownershipDate)).toLocaleDateString('en-GB')})</div>
        <div className="name" style={{ color: props.wateringDueInDays < 0 ? 'red' : 'black' }}>
          Watering {props.wateringDueInDays < 0 ? ' overdue by' : ' due in'} {props.wateringDueInDays < 0 ? props.wateringDueInDays * -1 : props.wateringDueInDays} days
          {/* <button onClick={water(userPlantRowKey)}>Update</button> */}
          <PlantButton display={"Mark as watered"} action={water} stateUpdated={stateUpdated} />        
        </div>
        <div className="name" style={{ color: props.repottingDueInDays < 0 ? 'red' : 'black' }}>
          Repotting {props.repottingDueInDays < 0 ? ' overdue by' : ' due in'} {props.repottingDueInDays < 0 ? props.repottingDueInDays * -1 : props.repottingDueInDays} days
          <PlantButton display={"Mark as repotted"} action={repot} stateUpdated={stateUpdated} />
        </div>
      </div>
    </div>
  );
}

export default UserPlant
