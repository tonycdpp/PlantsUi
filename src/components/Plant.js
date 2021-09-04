import React, { useState } from 'react';

const Plant = () => {
  // const [plants, setPlants] = useState();

    return (
      <div className="plants-profile" style={{ margin: '1rem' }}>
        <img src="https://place-hold.it/75x75"/>
        <div className="info">
          <div className="name" plantName="Monstera">  Plant Name here...</div>
          <div className="plantInfo"> Plant information here...</div>
        </div>
      </div>
    );

  }
export default Plant
