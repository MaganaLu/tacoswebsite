/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Slideshow from '../components/Slideshow'
import pic from '../pictures/skeleton2.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic2 from '../pictures/ifm-Logo.jpg';
import tacos1 from '../pictures/tacos1.jpg'
import tacos2 from '../pictures/tacos2.jpg'
import storeFront from '../pictures/storefront.jpg'
import tacosBirria from '../pictures/tacosBirria.jpg'
import birriaRamen from '../pictures/birriaramen.jpg'
import pizzaBirria from '../pictures/pizzabirria.jpg'
import tacosBirria2 from '../pictures/tacosBirria2.jpg'
import birriaTacos2 from '../pictures/birriatacos2.jpg'
import cactusBg from '../pictures/cactusBg.png'
import { useNavigate } from "react-router-dom";


const Home = () => {

    let navigate = useNavigate(); 

    const changeRoute = (route) => () => {
        let path = route;
        navigate(path);
    }

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1080
            },
            items: 1
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 1
        }
    };

    return (
        <div class="parent">

            <div class="carousel-item">
                <Carousel
                    additionalTransfrom={0}
                    arrows={false }
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass=""
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    display="grid"
                >

                    <img
                        src={tacos1 }
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                    />
                    <img
                        src={ tacos2 }
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                    />
                    <img
                        src={birriaTacos2}
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                    />
                    
                </Carousel>
            </div>

            <div class="container">

                {/*<img alt="" onClick={changeRoute('about')} class="img-item" src={storeFront}></img > */}

                {/*<img onClick={changeRoute('Menu')} alt="" class="img-item" src={tacosBirria}></img> */}
                {/*<img onClick={changeRoute('Catering')} style={{ maxHeight: '500px' }} alt="" class="img-item" src={pizzaBirria}></img>*/}

                <div class="item" onClick={changeRoute('about')} style={{ opacity: '.85', backgroundImage: 'url(' + storeFront + ')' }}>
                    <p class="item-text">About</p>
                </div>
                <div class="item" onClick={changeRoute('Menu')} style={{ opacity: '.85', backgroundImage: 'url(' + tacosBirria + ')' }}>
                    <p class="item-text">Menu</p>
                </div>
                <div class="item" onClick={changeRoute('Catering')} style={{ opacity: '.85', backgroundImage: 'url(' + pizzaBirria + ')' }}>
                    <p class="item-text">Catering</p>
                </div>
                
                <div class='break'></div>

                <img class="half-img-item" src={tacosBirria2}></img>

                <div class="half-item">
                    <p style={{ textShadow: '2px 2px black', color:'green', fontSize:'4rem', marginLeft: "10vw", marginRight: "10vw", textAlign: 'center' }}>WELCOME</p>
                    <p style={{ color: 'black', fontSize: '1.2rem', marginLeft: "10vw", marginRight: "10vw", textAlign: 'center' }}>
                        Welcome to Taqueria El Tarasco, a culinary oasis nestled in the heart of Wenatchee. Our esteemed establishment is dedicated to curating an exquisite dining experience steeped in the rich tapestry of authentic Mexican cuisine. With a commitment to culinary excellence and a reverence for tradition, we invite you to embark on a delicious journey that celebrates the diverse flavors and heritage of Mexico.</p>
                    <button onClick={changeRoute('about')} type="button">More About Us</button>
                </div>

                <div class="half-item" style={{ height: '500px', border: '1px solid red', width: '100%' }}>
                    <p1 style={{ fontWeight:'bold',marginLeft: '10vw', marginRight: '10vw', color: 'black', fontSize: '1.5rem', textAlign: 'center' }}> At Taqueria El Tarasco, our offerings extend far beyond just tacos, although our tacos are undeniably exceptional! Our menu boasts an array of Mexican culinary essentials and traditional favorites to delight your palate</p1>
                    <button onClick={changeRoute('menu')} type="button">View Menu</button>
                </div>

                {/*  <img alt="" class="half-img-item" src={pic2}></img> */}



            </div>
        </div>
    );

}



export default Home;