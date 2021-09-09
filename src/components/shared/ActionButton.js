import React from 'react';

function ActionButton(props) {
  return (
    <button onClick={() => 
      {
        props.action(props.value)
      }
    }>
      {props.display}
    </button>
  )
}
export default ActionButton
