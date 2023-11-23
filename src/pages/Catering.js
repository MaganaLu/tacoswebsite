import React from 'react';
import pic2 from '../pictures/blank.png';
import mexicoRed from '../pictures/mexicoDesktopRed.jpg'
import mexicoGreen from '../pictures/mexicoDesktopGreen.jpg'

const Catering = () => {

    return (
        <div class="container">

            <div class="half-item" style={{ minHeight: "400px", backgroundImage: 'url(' + mexicoGreen + ')' }}>
                <p1 style={{ fontSize: '3rem', textAlign: "center", textShadow: '2px 2px white', fontWeight: 'bold' }}>Catering</p1>
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
            <div alt="" class="half-item" style={{ backgroundPosition:'bottom', backgroundRepeat: 'no-repeat', backgroundSize:'fill' ,height: '400px',backgroundImage: 'url(' + mexicoRed + ')' }}></div>
            
        </div>
    );

}

export default Catering