import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './shared/Header';
import AllPlants from './plants/AllPlants';
import useUsers from "../hooks/useUsers"
import Users from "./users/Users"
import UserPlants from './user-plants/UserPlants';
import HomePage from './home/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
import css from './App.module.css'
import AboutPage from './about/AboutPage'
import PageNotFound from './PageNotFound';

export default function App() {
    const { users, currentUser, setCurrentUser, promiseInProgress } = useUsers();

    const performLogIn = (loggedInUser) => {
        setCurrentUser(loggedInUser);
        console.log(`state contains: ${currentUser}`);
    }
    const performLogOut = () => {
        console.log(`App.js: Logging out action`);
        setCurrentUser(); //makes it undefined
    }

    return (
        <>
            <Header performLogOut={performLogOut} currentUser={currentUser} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/login" >
                    <Users performLogIn={performLogIn} users={users} currentUser={currentUser} promiseInProgress={promiseInProgress} />
                </Route>
                <Route exact path="/plants/all" >
                    <AllPlants currentUser={currentUser} />
                </Route>
                <Route exact path="/users/plants" >
                    <UserPlants currentUser={currentUser} />
                </Route>
                <Route component={PageNotFound} />
            </Switch>
        </>
    );
}
