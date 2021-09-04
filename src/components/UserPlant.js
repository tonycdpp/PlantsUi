import React, { useState } from 'react';

function water() {
  console.log('watered plant')
}

function repot() {
  console.log('repotted plant')
}

const UserPlant = (props) => {

  const data = props;
  return (
    <div className="plants-profile" style={{ margin: '1rem' }}>
      <img  src={data.plantPhotoUri} style={{width: '100px', height: '100px'}}/>
      <div className="info">
        <div className="name"><a href={data.plantWikipediaUri}>{data.plantName}</a> (owned since:{(new Date(data.ownershipDate)).toLocaleDateString('en-GB')})</div>
        <div className="name" style={{color: data.wateringDueInDays < 0 ? 'red': 'black'}}> Watering {data.wateringDueInDays < 0 ? ' overdue by': ' due in'} {data.wateringDueInDays < 0 ? data.wateringDueInDays * -1 : data.wateringDueInDays } days <button onClick={water}>Update</button></div>
        <div className="name" style={{color: data.repottingDueInDays < 0 ? 'red': 'black'}}> Repotting {data.repottingDueInDays < 0 ? ' overdue by': ' due in'} {data.repottingDueInDays < 0 ? data.repottingDueInDays * -1 : data.repottingDueInDays } days <button onClick={water}>Update</button></div>
      </div>
    </div>
  );
}

export default UserPlant
