import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div>
        <h1>Welcome to Just Plants!</h1>
        <p>An app that helps you manage your house plants.</p>
        <Link to="about">Learn More</Link>
    </div>
)

export default HomePage