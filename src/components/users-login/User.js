import React from 'react';
import ActionButton from '../shared/ActionButton';

function loginUser(user) {
  console.log(`User.js: Logging in action on this user ${user.RowKey}`);
  user.loginUser(user)
}

const User = (props) => {
  return (
    <div className="user-profile" style={{ margin: '1rem' }}>
      <ActionButton display={`Log in as ${props.UserName}`} action={loginUser} value={props} />
    </div>
  );
}

export default User
