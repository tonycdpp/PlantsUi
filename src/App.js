import React from 'react';
import UserPlantsFetcher from "./components/user-plants/UserPlantsFetcher";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/shared/Header';
import AllPlantsFetcher from './components/plants/AllPlantsFetcher';
import usePlantsAppState from "./hooks/usePlantsAppState"
import Users from "./components/users/Users"

// eslint-disable-next-line
import css from './App.module.css'

export default function App() {
    const {users, currentUser, setCurrentUser, promiseInProgress} = usePlantsAppState();

    const performLogIn = (loggedInUser) =>
    {
        setCurrentUser(loggedInUser);
        console.log(`state contains: ${currentUser}`);
    }
    const performLogOut = () =>
    {
        console.log(`App.js: Logging out action`);
        setCurrentUser(); //makes it undefined
    }

    return (
        <React.Fragment>
            <Router>
                <Header performLogOut={performLogOut} currentUser={currentUser} />
                <Route exact path="/login" >
                    <Users performLogIn={performLogIn} users={users} currentUser={currentUser} promiseInProgress={promiseInProgress}/>
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
