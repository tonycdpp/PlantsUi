import React from 'react';
import logo from "./../../logo.svg"
import { NavLink } from 'react-router-dom'
import ActionButton from './ActionButton';
import { useHistory } from 'react-router-dom';
import css from "./Header.module.css"

var user;
var history;

function logoutUser() {
  console.log(`User.js: Logging out action`);
  user.performLogOut()
  history.push('/');
}

const Header = (props) => {
  user = props;
  history = useHistory();  
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <img src={logo} alt="logo" style={{ width: '50px', height: '50px' }} />
        <h1>Just Plants</h1>
      </div>
      <div className={css.headerright}>
        {
          props.currentUser === undefined ?
            <NavLink to="/login">{"Login"}</NavLink>
            :
            <div className={css.headrbutton}>
              <div className={css.username}>{`Hello ${props.currentUser.UserName}, `}</div>
              <ActionButton display={`Log out`} action={logoutUser} />
            </div>
        }
      </div>
    </div>
  );
}
export default Header
