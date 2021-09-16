import React from 'react';
import css from './NotificationsBadge.module.css'
import bell from "./../notifications/bell.png"
import bellhover from "./../notifications/bell_full.png"
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import axios from 'axios';
// import { Link } from 'react-router-dom'

var notifications;
var baseUrl = "https://plants-api.azurewebsites.net"
// var baseUrl = "https://localhost:44391"

function markAsRead(notificationRowKey) {
  axios.put(`${baseUrl}/usernotifications/${notificationRowKey}/MarkAsRead`)
    .then(response => {
      notifications.stateUpdated(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const NotificationsBadge = (props) => {
  notifications = props;

  const onLinkClick = (notificationRowKey) => {
    markAsRead(notificationRowKey);
    if (props.notifications.length === 1) {
      document.body.click(); //to close the popover
    }
  };

  const popover = (
    <Popover>
      <div className={css.popoverbody}>
        {props.notifications.map(notification =>
          <div  key={notification.rowKey} className={css.notificationitem} onClick={() => onLinkClick(notification.rowKey)}>
            {
              notification.read === true ?
                notification.description
                :
                <b>{notification.description}</b>
            }
          </div>
        )}
        {/* <div className={css.notificationbutton}>
          <Link to={`users/${props.currentUser.RowKey}/plants`} onClick={() => onLinkClick('sddf')}>
            {"Click to see your plants"}
          </Link>
        </div> */}
      </div>
    </Popover>
  );

  return (
    <React.Fragment>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose={true}>
        <div href="#" className={css.notification}>
          <img src={bell} className={css.bell} alt="notifications" />
          <img src={bellhover} className={css.bellfull} alt="notifications" />
          {
            props.notifications.length > 0 ?
              <span className={css.badge}>{props.notifications.length}</span>
              :
              null
          }
        </div>
      </OverlayTrigger>
    </React.Fragment>
  );


}

export default NotificationsBadge
