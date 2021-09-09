import React from 'react';
import { Link } from "react-router-dom";
import ActionButton from '../shared/ActionButton';
import { ButtonGroup, Button, DropdownButton, Dropdown, ButtonProps } from 'react-bootstrap';
var user;

function loginUser(userRowKey) {
  console.log(`User.js: Logging in action on this user ${userRowKey}`);
  user.loginUser(userRowKey)
}

const User = (props) => {
  user = props;
  return (
    <div className="user-profile" style={{ margin: '1rem' }}>
      <div className="info">
        <div className="name">
          <Link to={`users/${props.RowKey}/plants`}>{props.UserName}</Link> 
          <ActionButton display={"Log in"} action={loginUser} value={props.RowKey} />
        </div>
      </div>
    </div>
  );
}

export default User
