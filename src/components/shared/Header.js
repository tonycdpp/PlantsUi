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
    <div class={css.header}>
      <div class={css.logo}>
        <img src={logo} alt="logo" style={{ width: '50px', height: '50px' }} />
        <h1>Just Plants</h1>
      </div>
      <div class={css.headerright}>
        {
          props.currentUser === undefined ?
            <NavLink activeClassName="active" to="/login">{"Login"}</NavLink>
            :
            <div class={css.headrbutton}>
              <div class={css.username}>{`Hello ${props.currentUser.UserName}, `}</div>
              <ActionButton display={`Log out`} action={logoutUser} />
            </div>
        }
      </div>
    </div>
  );
}
export default Header
