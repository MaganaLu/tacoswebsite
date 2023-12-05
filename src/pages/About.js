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
import oldPaper from '../pictures/yellowpaper.svg'
import Avocados from '../pictures/Avocados.jpg'
import desert from '../pictures/desert.jpg'

const About = () => {

    return (
        <div class="container" style={{ backgroundColor:'#ffdaab' }}>

            <div class="half-item" style={{ backgroundRepeat: 'no-repeat', backgroundSize: '1480px 800px', minHeight: "400px", backgroundImage: 'url(' + desert + ')', backgroundPosition:'10vw -120px' }}>
                <p1 class="shiftText" style={{ textShadow: 'black 10px 0 10px', color:'white',fontSize:'3rem'}}>About Us</p1>
            </div>
            <div class="break"></div>
            <div class="half-item" style={{ minHeight: "400px", backgroundColor: 'white' }}>
                <p1 style={{ fontSize: '3rem' }} >Our Story</p1>
                <hr class="roundedSeperator"></hr>
                <p1 style={{ marginLeft: "5vw", marginRight: "5vw", textAlign: "center" }}> Started from a Taco Truck and now evolved into a restaurant. Step into a world of vibrant flavors and cultural richness at Taqueria El Tarasco, the newest culinary gem in Wenatchee, Washington. Our restaurant embodies the spirit of Mexico, bringing an authentic and contemporary twist to traditional Mexican cuisine. </p1>
            </div>
            <div class="half-item" style={{ minHeight: "400px", backgroundColor:'white' }}>
                <p1 style={{ fontSize: '3rem' }}>Our Motto</p1>
                <hr class="roundedSeperator"></hr>
                <p1 style={{ marginLeft: "5vw", marginRight: "5vw", textAlign: "center", }}>Bringing Michoacan's Flavors to Wenatchee: A Taste of Mexico's Heartbeat. It's a testament to the power of food to transcend borders and bring communities together. It's an invitation to savor the vibrancy of Michoacan, right in the heart of Wenatchee, and to celebrate the universal language of flavors that unite us all.</p1>
            </div>
            <div class="half-item" style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: "400px", backgroundImage: 'url(' + Avocados + ')' }}>
                <p1 style={{ fontSize: '3rem', color: 'white', textAlign: "center", textShadow: 'black 1px 0 25px' }}>Authentic Michoacan Tacos</p1>
                <p1 style={{ marginLeft: "5vw", marginRight: "5vw", textAlign: "center", color: 'white', textShadow: 'black 1px 0 10px' }}>
                    We utilize premium cuts of meat and the freshest ingredients to craft our salsas and prepare all our meals from scratch on a daily basis</p1>
            </div>
        </div>
    );
}

export default About;