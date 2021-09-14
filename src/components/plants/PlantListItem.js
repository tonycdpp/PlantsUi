import React from 'react';
import axios from 'axios';
import css from './PlantListItem.module.css';
import ActionButton from '../shared/ActionButton';

var plant;
var currentUser;

var baseUrl = "https://plants-api.azurewebsites.net"
// var baseUrl = "https://localhost:44391"

function addUserPlant(plantRowKey) {
  axios.post(`${baseUrl}/userplants/`, {
    userRowKey: `${currentUser.RowKey}`,
    plantRowKey: `${plantRowKey}`
  })
    .then(response => {
      // setUserPlants(response.data);
      console.log("addedUserPlant => ")
      plant.stateUpdated(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function deleteUserPlant(plantRowKey) {

  axios.delete(`${baseUrl}/userplants/`, {
    data: {
      userRowKey: `${currentUser.RowKey}`,
      plantRowKey: `${plantRowKey}`
    },
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => {
      // setUserPlants(response.data);
      console.log("deletedUserPlant => ")
      plant.stateUpdated(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const PlantListItem = (props) => {
  currentUser = props.currentUser;
  plant = props;
  return (
    // eslint-disable-next-line
    <div className={props.userPlantRowKey == undefined ? css.containernocolour : css.container}>
      <div className={css.plantimage}>
        <img alt={props.plantName} src={props.plantPhotoUri} />
      </div>
      <div className={css.centredleft}>
        <a href={props.plantWikipediaUri}>{props.plantName}</a>
      </div>
      {
        // eslint-disable-next-line
        props.userPlantRowKey == undefined ?
          <div>
            <div className={css.topright}>
              <ActionButton display={"Add to collection"} action={addUserPlant} value={props.plantRowKey} />
            </div>
            <div className={css.bottomright}>
              {`Are you a pround owner of a `} <b>{`${props.plantName}`} </b> {`? Hit the button to add to your collection!`}
            </div>
          </div>
          :
          <div>
            <div className={css.toprightwarning} >
              <ActionButton warning={"true"} display={"Remove"} action={deleteUserPlant} value={props.plantRowKey} />
            </div>
            <div className={css.bottomright}>
              {`Owned since `} <b>{(new Date(props.ownershipDate)).toLocaleDateString('en-GB')}</b> 👍
            </div>
          </div>
      }


    </div>
  );
}

export default PlantListItem
