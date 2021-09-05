import React from 'react';
import User from "./User";
// import './UserPlants.css';

const Users = (props) => (
    <div>
        {props.data.map(x => <User key={x.RowKey} {...x} />)}
    </div>
)

export default Users