import React from 'react';
import User from "./User";
// import './UserPlants.css';
var user;

function loginUser(userRowKey) {
    console.log(`Users.js: Logging in action on this user ${userRowKey.RowKey}`);
    user.loginUser(userRowKey);
}

const Users = (props) => {
    user = props;
    return (
        <div>
            {props.data.map(x => <User loginUser={loginUser} key={x.RowKey} {...x} />)}
        </div>
    )
}

export default Users