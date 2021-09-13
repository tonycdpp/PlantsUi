import React from 'react';
import css from './PlantListItem.module.css';

// var plant;
// var baseUrl = "https://plants-api.azurewebsites.net"
// var baseUrl = "https://localhost:44391"

// function viewDetails(userplant) {
//   // console.log(`UserPlant.js: Watering action on this plant ${userplant}`);
//   // axios.put(`${baseUrl}/userplants/${userplant}/watered`, {})
//   //   .then(response => {
//   //     // setUserPlants(response.data);
//   //     console.log("updatedUserPlant => ")
//   //     plant.stateUpdated(response.data);

//   //   })
//   //   .catch(function (error) {
//   //     console.log(error);
//   //   });
// }

const PlantListItem = (props) => {
  console.log(props);
  return (
    <div className={css.container}>
      <div className={css.plantimage}>
        <img alt={props.plantName} src={props.plantPhotoUri} />
      </div>
      <div className={css.centred}>
        <a href={props.plantWikipediaUri}>{props.plantName}</a>
      </div>
      {
        // eslint-disable-next-line
        props.userPlantRowKey != undefined ?
          <div className={css.topright}>Already Mine :)</div>
          :
          <div className={css.topright}></div>

      }


    </div>
  );
}

export default PlantListItem
