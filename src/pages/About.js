import React from 'react';
import './About.css';
import pic from '../pictures/skeleton2.jpg';
import pic2 from '../pictures/ifm-Logo.jpg';
import Carousel from "react-multi-carousel";

const About = () => {
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
                    arrows
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
                        src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
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
                
                <img alt="" class="img-item" src={ pic2 }></img>

                <img alt="" class="img-item" src={pic2}></img>

                <img alt="" class="img-item" src={pic2}></img>


                <div class="item">
                    LOL
                </div>
                <div class="item">
                    LOL
                </div>
                <div class="item">
                    LOL
                </div>
                <div class="item">
                    LOL
                </div>
                <div class="break"></div>
                <div class="item">
                    LOL
                </div>


            </div>
        </div>
    );
}
export default About;