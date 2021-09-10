import React from 'react';
import logo from "./../../logo.svg"
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import ActionButton from './ActionButton';
var user;

function logoutUser() {
  console.log(`User.js: Logging out action`);
  user.performLogOut()
}

const Header = (props) => {
  user=props;
  return (
    <header >
      <div >
        <img src={logo} className="logo" alt="logo" style={{ width: '50px', height: '50px' }} />
      </div>

      {
        props.currentUser == undefined ?
          <NavLink activeClassName="active" to="/login">{"Login"}</NavLink>
          :
          <div>
            {`Hello ${props.currentUser.UserName}, `}
            <ActionButton display={`Log out`} action={logoutUser} />  
            <br/>
            <NavLink activeClassName="active" to="/contact">{"Tap to see all plants"}</NavLink>
          </div>
      }
    

    </header>
  );
}
export default Header
