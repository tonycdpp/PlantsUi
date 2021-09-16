import React from 'react';
import css from './NotificationsBadge.module.css'
import bell from "./../notifications/bell.png"
import bellhover from "./../notifications/bell_full.png"
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link } from 'react-router-dom'

const NotificationsBadge = (props) => {

  const onLinkClick = (e) => {
    document.body.click();
  };

  const popover = (
    <Popover>
      <div className={css.popoverbody}>
        {props.notifications.map(notification =>
          <div className={css.notificationitem}>
            {
              <b> {notification.description} </b>
            }
          </div>
        )}
        <div className={css.notificationbutton}>
          <Link to={`users/${props.currentUser.RowKey}/plants`} onClick={() => onLinkClick('sddf')}>
            {"Click to see your plants"}
          </Link>
        </div>
      </div>
    </Popover>
  );

  return (
    <React.Fragment>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose={true}>
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
