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
                        <link to="/">Home</link>
                    </li>
                    <li>
                        <link to="/about">About</link>
                    </li>
                    <li>
                        <link to="/menu">Menu</link>
                    </li>
                    <li>
                        <link to="/catering">Catering</link>
                    </li>
                </ul>
                </div>
            </div>
            

        </header>
    );

    
}
export default Navbar;

