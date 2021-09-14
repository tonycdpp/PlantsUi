import React from 'react';
import css from './ActionButton.module.css';

function ActionButton(props) {
  console.log(props);
  return (
    <button className={props.warning === 'true' ? css.warningbutton : css.ActionButton} onClick={() => 
      {
        props.action(props.value)
      }
    }>
      {props.display}
    </button>
  )
}
export default ActionButton
