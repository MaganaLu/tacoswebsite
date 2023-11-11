import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom";
import pic from '../pictures/skeleton2.jpg';
const Navbar = () => {
    return (
        <header class="header">
            <div class="container">

            <img class= "item" alt="El Tacon" href="#" src={pic}></img>
            
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
            </div>
            

        </header>
    );
}
export default Navbar;