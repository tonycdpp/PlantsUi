import React from 'react';
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <div className="user-profile" style={{ margin: '1rem' }}>
      <div className="info">
        <div className="name">
          <Link to={`users/${props.RowKey}/plants`}>Log in as {props.UserName}</Link>
        </div>
      </div>
    </div>
  );
}

export default User
