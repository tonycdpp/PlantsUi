import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/shared/Header';
import AllPlants from './components/plants/AllPlants';
import useUsers from "./hooks/useUsers"
import Users from "./components/users/Users"
import UserPlants from './components/user-plants/UserPlants';

// eslint-disable-next-line
import css from './App.module.css'

export default function App() {
    const {users, currentUser, setCurrentUser, promiseInProgress} = useUsers();

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
                    <AllPlants currentUser={currentUser}/>
                </Route>
                <Route exact path="/users/:userrowkey/plants" >
                    <UserPlants currentUser={currentUser}/>
                </Route>
            </Router>
        </React.Fragment >
    );
}
