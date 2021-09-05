import React, { useState } from 'react';

function addToUserCollection()
{
    console.log('adding plant to user')
}

const AllPlants = () => {
  const [plants, setPlants] = useState();

  return (
    <div className="plants-profile" style={{ margin: '1rem' }}>
      <img src="https://place-hold.it/75x75" />
      <div className="info">
        <div className="name">  Plant Name here...</div>
        <div className="plantInfo"> Plant information here...</div>
        <button onClick={addToUserCollection}>Add to your collection</button>
      </div>
    </div>
  );

}

export default AllPlants
