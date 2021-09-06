import React from 'react';

function PlantButton(props) {
  return (
    <button onClick={() => 
      {
        props.action()
      }
    }>
      {props.display}
    </button>
  )
}
export default PlantButton
