import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <header class="header">
            <div class="left">
                <img alt= "El Tacon" href="#" src= ""></img>
            </div>
            <div class="mid">
                <ul class="navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/catering">Catering</Link>
                    </li>
                </ul>

            </div>
            <div class="right">
                <a href="#">Welcome</a>
            </div>

        </header>
    );
}
export default Navbar;