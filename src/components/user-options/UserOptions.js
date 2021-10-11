import React from 'react';
import { NavLink } from 'react-router-dom'
import css from './UserOptions.module.css';

const UserOptions = (props) => {
  return (
    <div className={css.optionslist}>
      <div className={css.menuoption}>
        <NavLink to={`users/plants`}>
          {"Your plants"}
        </NavLink>
        <p>This is where you'll find the list of your plants you own. </p>
      </div>
      <div className={css.menuoption}>
        <NavLink activeClassName="active" to="/plants/all">
          {"Plants database"}
        </NavLink>
        <p>A full list of plants which you can add to your collection.</p>
      </div>
    </div>
  );
}

export default UserOptions
