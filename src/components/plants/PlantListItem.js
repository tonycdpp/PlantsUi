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
    <div class={css.container}>
      <div class={css.plantimage}>
        <img alt={props.plantName} src={props.plantPhotoUri} />
      </div>
      <div class={css.centred}>
        <a href={props.plantWikipediaUri}>{props.plantName}</a>
      </div>
      {
        // eslint-disable-next-line
        props.userPlantRowKey != undefined ?
          <div class={css.topright}>Already Mine :)</div>
          :
          <div class={css.topright}></div>

      }


    </div>
  );
}

export default PlantListItem
