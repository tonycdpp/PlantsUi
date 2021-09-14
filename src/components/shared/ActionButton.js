import React from 'react';
import css from './ActionButton.module.css';

function ActionButton(props) {
  return (
    <button className={css.actionbutton} onClick={() => 
      {
        props.action(props.value)
      }
    }>
      {props.display}
    </button>
  )
}
export default ActionButton
