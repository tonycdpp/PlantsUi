import React from 'react';
import ActionButton from '../shared/ActionButton';

function loginUser(user) {
  console.log(`User.js: Logging in action on this user ${user.RowKey}`);
  user.loginUser(user)
}

const User = (props) => {
  return (
    <div className="user-profile" style={{ margin: '1rem' }}>
      <div className="info">
        <div className="name">
          {/* <Link to={`users/${props.RowKey}/plants`}>{props.UserName}</Link> */}
          <ActionButton display={`Log in as ${props.UserName}`} action={loginUser} value={props} />
        </div>
      </div>
    </div>
  );
}

export default User
