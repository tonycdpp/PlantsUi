import React from 'react';

function signIn() {
  console.log('Signed in')
}

const User = (props) => {

 return (
    <div className="user-profile" style={{ margin: '1rem' }}>
      <div className="info">
        <div className="name"><a href={props.RowKey}>{props.UserName}</a> <button onClick={signIn}>Log in</button></div>      
      </div>
    </div>
  );
}

export default User
