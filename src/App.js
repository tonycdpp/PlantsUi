import React from 'react';
import UserPlantsFetcher from "./components/user-plants/UserPlantsFetcher";
import UsersFetcher from "./components/users-login/UsersFetcher";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
    return (
        <React.Fragment>
            <Router>
                <Route exact path="/" >
                    <UsersFetcher />
                </Route>
                <Route exact path="/users/:userrowkey/plants" >
                    <UserPlantsFetcher />
                </Route>
            </Router>
        </React.Fragment >
    );
}
