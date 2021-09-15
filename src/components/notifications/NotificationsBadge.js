import React from 'react';
import css from './NotificationsBadge.module.css'
import bell from "./../notifications/bell.png"
import bellhover from "./../notifications/bell_full.png"
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { NavLink } from 'react-router-dom'

const NotificationsBadge = (props) => {
  const popover = (
    <Popover>
      <div className={css.popoverbody}>
        {props.notifications.map(notification =>
          <p> {notification.description}</p>
        )}
        <NavLink to={`users/${props.currentUser.RowKey}/plants`}>
          {"Click to see your plants"}
        </NavLink>
      </div>
    </Popover>
  );

  return (
    <React.Fragment>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <div href="#" className={css.notification}>
          <img src={bell} className={css.bell} alt="notifications" />
          <img src={bellhover} className={css.bellfull} alt="notifications" />
          <span className={css.badge}>{props.notifications.length}</span>
        </div>
      </OverlayTrigger>
    </React.Fragment>
  );


}

export default NotificationsBadge
