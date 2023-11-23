import React from 'react';
import './About.css';
import Carousel from "react-multi-carousel";
import tacos1 from '../pictures/tacos1.jpg'
import tacos2 from '../pictures/tacos2.jpg'
import storeFront from '../pictures/storefront.jpg'
import tacosBirria from '../pictures/tacosBirria.jpg'
import birriaRamen from '../pictures/birriaramen.jpg'
import pizzaBirria from '../pictures/pizzabirria.jpg'
import tacosBirria2 from '../pictures/tacosBirria2.jpg'
import birriaTacos2 from '../pictures/birriatacos2.jpg'
import mexico from '../pictures/mexicoDesktop.jpg'
import mexicoFlags from '../pictures/mexicoFlags.jpg'
import mexicoRed from '../pictures/mexicoDesktopRed.jpg'
import mexicoGreen from '../pictures/mexicoDesktopGreen.jpg'

const About = () => {

    return (
        <div class="container">

            <div class="half-item" style={{ minHeight: "400px", backgroundImage: 'url(' + mexicoGreen + ')' }}>
                <p1 style={{ fontSize:'3rem', textAlign: "center",textShadow: '2px 2px white', fontWeight: 'bold'  }}>About Us</p1>
            </div>
            <div class="break"></div>
            <div class="half-item" style={{ minHeight: "400px"}}>
                <p1 style={{ fontSize: '3rem' }} >Our Story</p1>
                <p1 style={{ marginLeft: "5vw", marginRight: "5vw", textAlign: "center", }}> Step into a world of vibrant flavors and cultural richness at Taqueria El Tarasco, the newest culinary gem in Wenatchee, Washington. Our restaurant embodies the spirit of Mexico, bringing an authentic and contemporary twist to traditional Mexican cuisine. </p1>
            </div>
            <div class="half-item" style={{ minHeight: "400px" }}>
                <p1 style={{ fontSize: '3rem' }}>Our Motto</p1>
                <p1 style={{ marginLeft: "5vw", marginRight: "5vw", textAlign: "center", }}>Bringing Michoacan's Flavors to Wenatchee: A Taste of Mexico's Heartbeat</p1>
            </div>
            <div class="half-item" style={{ minHeight: "500px", backgroundImage: 'url(' + mexicoRed + ')' }}>
                <p1 style={{ fontSize:'3rem', textAlign: "center", }}>Authentic Michoacan Tacos</p1>
            </div>
        </div>
    );
}

export default About;