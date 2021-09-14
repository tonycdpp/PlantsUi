import React from 'react';
import css from './PlantListItem.module.css';
import ActionButton from '../shared/ActionButton';


// var plant;
// var baseUrl = "https://plants-api.azurewebsites.net"
// var baseUrl = "https://localhost:44391"

function viewDetails(userplant) {
  console.log(`viewing details ${userplant}`);
  // axios.put(`${baseUrl}/userplants/${userplant}/watered`, {})
  //   .then(response => {
  //     // setUserPlants(response.data);
  //     console.log("updatedUserPlant => ")
  //     plant.stateUpdated(response.data);

  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
}

const PlantListItem = (props) => {
  console.log(props);
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
              <ActionButton display={"Add to collection"} action={viewDetails} value={props.userPlantRowKey} />
            </div>
            <div className={css.bottomright}>
              {`Are you a pround owner of a `} <b>{`${props.plantName}`} </b> {`? Hit the button to add to your collection!`}
            </div>
          </div>
          :
          <div>
            <div className={css.toprightwarning} >
              <ActionButton warning={"true"} display={"Remove"} action={viewDetails} value={props.userPlantRowKey} />
            </div>
            <div className={css.bottomright}>
              {`Owned since `} <b>{(new Date(props.ownershipDate)).toLocaleDateString('en-GB')}</b>
            </div>
          </div>
      }


    </div>
  );
}

export default PlantListItem
