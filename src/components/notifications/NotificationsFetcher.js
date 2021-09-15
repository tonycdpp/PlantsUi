import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import LoadingIndicator from '../shared/LoadingIndicator';
// eslint-disable-next-line
import { trackPromise, usePromiseTracker } from "react-promise-tracker"
import NotificationsBadge from './NotificationsBadge';

var currentUser;
var baseUrl = "https://plants-api.azurewebsites.net"
// var baseUrl = "https://localhost:44391"

const NotificationsFetcher = (props) => {
    const [notifications, setNotifications] = useState([]);
    // const { promiseInProgress } = usePromiseTracker();
    currentUser = props.currentUser;

    const stateUpdated = (updatedObject) => {
        setNotifications(updatedObject);
    }

    async function fetchAllUserNotifications() {
        if (props.currentUser !== undefined) {
            trackPromise(
                axios.get(`${baseUrl}/users/${props.currentUser.RowKey}/notifications`)
                    .then(response => {
                        console.log(response.data)
                        setNotifications(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    }));
        }
    }

    useEffect(() => {
        fetchAllUserNotifications();
        // eslint-disable-next-line
    }, []);

    return (
        <React.Fragment>
            {/* <LoadingIndicator promiseInProgress={promiseInProgress} /> */}
            <NotificationsBadge notifications={notifications} currentUser={currentUser} stateUpdated={stateUpdated}/>
        </React.Fragment>

    );
}

export default NotificationsFetcher