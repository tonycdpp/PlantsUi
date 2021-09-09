import React, { useState } from 'react';
import UserPlantsFetcher from "./components/user-plants/UserPlantsFetcher";
import UsersFetcher from "./components/users-login/UsersFetcher";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/shared/Header';

export default function App() {
    const [currentUser, setCurrentUser] = useState()

    const performLogIn = (loggedInUser) =>
    {
        console.log(`App.js: Logging in action on this user ${loggedInUser}`);
        setCurrentUser(loggedInUser);
    }

    return (
        <React.Fragment>
            <Router>
                <Header currentUser={currentUser}/>
                <Route exact path="/login" >
                    <UsersFetcher performLogIn={performLogIn}/>
                </Route>
                <Route exact path="/users/:userrowkey/plants" >
                    <UserPlantsFetcher currentUser={currentUser}/>
                </Route>
            </Router>
        </React.Fragment >
    );
}
