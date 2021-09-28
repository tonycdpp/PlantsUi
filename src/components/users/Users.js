import React from 'react';
import UserOptions from '../user-options/UserOptions';
import LoadingIndicator from '../shared/LoadingIndicator';
import css from './Users.module.css';
import User from "./User";

const Users = (props) => {
    function loginUser(userRowKey) {
        console.log(`UsersFetcher.js: Logging in action on this user ${userRowKey.RowKey}`);
        props.performLogIn(userRowKey);
    }

    return (
        <React.Fragment>
            <LoadingIndicator promiseInProgress={props.promiseInProgress} />
            {
                props.currentUser === undefined ?
                    <div className={css.userslist}>
                        {props.users.map(x => <User loginUser={loginUser} key={x.RowKey} {...x} />)}
                    </div>
                    // <Users loginUser={loginUser} data={props.users} />
                    :
                    <UserOptions currentUser={props.currentUser} />
            }
        </React.Fragment>
    );
}

export default Users