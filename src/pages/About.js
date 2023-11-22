import React from 'react';
import './About.css';
import pic from '../pictures/skeleton2.jpg';
import pic2 from '../pictures/blank.png';
import Carousel from "react-multi-carousel";

const About = () => {

    return (
        <div class="container">

            <div class="half-item" style={{ minHeight: "400px", backgroundImage: 'url(' + pic2 + ')' }}>
                <p1 style={{ textAlign: "center",  }}>About Us</p1>
            </div>
            <div class="break"></div>
            <div class="half-item" style={{ minHeight: "400px", backgroundImage: 'url(' + pic2 + ')' }}>
                <p1>Out Story</p1>
                <p1 style={{ marginLeft: "5vw", marginRight: "5vw",textAlign: "center", }}>Tacos El Gordo de Tijuana B.C Inc., is a family owned and operated company. We have been in the food service industry for over 40 years, opening our first business in 1972. In 1998, Tacos El Gordo opened its first location in San Diego, California, and in 2010 opened its first location in Las Vegas.</p1>
            </div>
            <div class="half-item" style={{ minHeight: "400px", backgroundImage: 'url(' + pic2 + ')' }}>
                <p1>Out Motto</p1>
                <p1 style={{ marginLeft: "5vw",marginRight: "5vw",textAlign: "center", }}>Tacos El Gordo de Tijuana B.C Inc., is a family owned and operated company. We have been in the food service industry for over 40 years, opening our first business in 1972. In 1998, Tacos El Gordo opened its first location in San Diego, California, and in 2010 opened its first location in Las Vegas.</p1>
            </div>
            <div class="half-item" style={{ minHeight: "500px", backgroundImage: 'url(' + pic2 + ')' }}>
                <p1 style={{ textAlign: "center", }}>Authentic Tacos</p1>
            </div>
        </div>
    );
}
export default About;