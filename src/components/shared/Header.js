import React from 'react';
import logo from "./../../logo.svg"
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import NavigationLink from './NavigationLink';
import { ButtonGroup, Button, DropdownButton, Dropdown, ButtonProps } from 'react-bootstrap';

const Header = (props) => {
  console.log(props);
  return (
    <header >
      <div >
        <img src={logo} className="logo" alt="logo" style={{ width: '50px', height: '50px' }} />
      </div>

      {        
        props.currentUser == undefined ?
          <NavLink activeClassName="active" to="/login">{"Login"}</NavLink>
          : <div>{`Hello ${props.currentUser.UserName}, `} <NavLink activeClassName="active" to="/logout">{"Log out!"}</NavLink></div>
      }      
      <NavLink activeClassName="active" to="/contact">{"All Plants"}</NavLink>
      
    </header>
  );
}
export default Header
