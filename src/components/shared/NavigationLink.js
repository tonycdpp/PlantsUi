import React from 'react';
import Button from 'react-bootstrap/Button';

const NavigationLink = (props) => {
  return (
    <Button variant="link" onClick={()=> props.action()}>{props.display}</Button>
  )
}
export default NavigationLink
