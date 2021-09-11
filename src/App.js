import React, { useState } from 'react';
import UserPlantsFetcher from "./components/user-plants/UserPlantsFetcher";
import UsersFetcher from "./components/users-login/UsersFetcher";
// import css from './App.module.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/shared/Header';
import AllPlantsFetcher from './components/plants/AllPlantsFetcher';

export default function App() {
    const [currentUser, setCurrentUser] = useState();
    const performLogIn = (loggedInUser) =>
    {
        console.log(`App.js: Logging in action on this user ${loggedInUser.RowKey}`);
        setCurrentUser(loggedInUser);
        console.log(`state contains: ${currentUser}`);
    }
    const performLogOut = () =>
    {
        console.log(`App.js: Logging out action`);
        setCurrentUser();
    }

    return (
        <React.Fragment>
            <Router>
                <Header performLogOut={performLogOut} currentUser={currentUser} />
                <Route exact path="/login" >
                    <UsersFetcher performLogIn={performLogIn} currentUser={currentUser}/>
                </Route>
                <Route exact path="/plants/all" >
                    <AllPlantsFetcher currentUser={currentUser}/>
                </Route>
                <Route exact path="/users/:userrowkey/plants" >
                    <UserPlantsFetcher currentUser={currentUser}/>
                </Route>
            </Router>
        </React.Fragment >
    );
}
