import React from 'react';
import axios from 'axios';
import PlantButton from '../shared/PlantButton';

function water(plant) {
  console.log(`Watering action on this plant ${plant.userPlantRowKey}`)
  const response = axios.put(`https://plants-api.azurewebsites.net/userplants/${plant.userPlantRowKey}/watered`, {});
  console.log(response.data);
}

function repot(plant) {
  console.log(`Repotting action on this plant ${plant.userPlantRowKey}`)
  const response = axios.put(`https://plants-api.azurewebsites.net/userplants/${plant.userPlantRowKey}/repotted`, {});
  console.log(response.data);
}

const UserPlant = (props) => {

  const data = props;
  return (
    <div className="plants-profile" style={{ margin: '1rem' }}>
      <img alt={data.plantName} src={data.plantPhotoUri} style={{ width: '100px', height: '100px' }} />
      <div className="info">
        <div className="name"><a href={data.plantWikipediaUri}>{data.plantName}</a> (owned since:{(new Date(data.ownershipDate)).toLocaleDateString('en-GB')})</div>
        <div className="name" style={{ color: data.wateringDueInDays < 0 ? 'red' : 'black' }}>
          Watering {data.wateringDueInDays < 0 ? ' overdue by' : ' due in'} {data.wateringDueInDays < 0 ? data.wateringDueInDays * -1 : data.wateringDueInDays} days
          {/* <button onClick={water(userPlantRowKey)}>Update</button> */}
          <PlantButton display={"Mark as watered"} action={water} plant={data} />
        </div>
        <div className="name" style={{ color: data.repottingDueInDays < 0 ? 'red' : 'black' }}>
          Repotting {data.repottingDueInDays < 0 ? ' overdue by' : ' due in'} {data.repottingDueInDays < 0 ? data.repottingDueInDays * -1 : data.repottingDueInDays} days
          <PlantButton display={"Mark as repotted"} action={repot} plant={data} />
        </div>
      </div>
    </div>
  );
}

export default UserPlant
