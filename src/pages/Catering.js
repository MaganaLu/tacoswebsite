import React from 'react';
import './Catering.css'
import pic2 from '../pictures/blank.png';
import mexicoRed from '../pictures/mexicoDesktopRed.jpg'
import mexicoGreen from '../pictures/mexicoDesktopGreen.jpg'
import desert from '../pictures/desert.jpg'
import foodTruck from '../pictures/foodTruck.jpg'
import kitchen from '../pictures/kitchen.jpg'

const Catering = () => {

    return (
        <div class="container">

            <div class="half-item" style={{ backgroundColor: '#ffdaab', minHeight: "400px", backgroundRepeat: 'no-repeat', backgroundSize: '500px 300px', backgroundPosition:'-5vw 2vw ', backgroundImage: 'url(' + foodTruck + ')' }}>
                <p1 style={{ color: 'white', fontSize: '3rem', textAlign: "center", fontWeight: '400', textShadow:'black 10px 0 10px'}}>Catering</p1>
                
            </div>
            <div class="break"></div>
            <div class="half-item" style={{ minHeight: "400px"}}>
                <p1 style={{ fontSize: '3rem' }} >Services</p1>
                <p1 style={{ marginLeft: "5vw", marginRight: "5vw", textAlign: "center", }}>We offer Catering for parties, ceremonies, gatherings and more. We provide and set everything up for you. We cook eveything fresh at the location and provide salsas and garnishes.</p1>
            </div>
            <div class="half-item" style={{ minHeight: "400px" }}>
                <p1 style={{ fontSize: '3rem' }}>Contact Us</p1>
                <p1 style={{ marginLeft: "5vw", marginRight: "5vw", textAlign: "center", }}>Call us for a free estimate at 509-470-6925.</p1>
            </div>
            <div class="break"></div>
            <div alt="" class="half-item" style={{ backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px', backgroundImage: 'url(' + kitchen + ')' }}></div>
            
        </div>
    );

}

export default Catering