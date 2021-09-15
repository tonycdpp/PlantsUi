import React from 'react';
import css from './NotificationsBadge.module.css'
import bell from "./../notifications/bell.png"
import bellhover from "./../notifications/bell_full.png"


const NotificationsBadge = (props) => {

  return (
    <React.Fragment>
      <div href="#" className={css.notification}>
        <img src={bell} className={css.bell} alt="notifications"/>
        <img src={bellhover} className={css.bellfull} alt="notifications"/>

        <span className={css.badge}>{props.notifications.length}</span>
      </div>
    </React.Fragment>
  );


}

export default NotificationsBadge
