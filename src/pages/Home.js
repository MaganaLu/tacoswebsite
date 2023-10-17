/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Slideshow from '../components/Slideshow'
import pic from '../pictures/skeleton2.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {

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

        <div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
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
            <div class="containerBox">
                <div class="text-box">
                    <h4>Food descrition</h4>
                </div>
                <img class="img-responsive" src={ pic } />
            </div>

            <div class="containerBox">
                <div class="text-box">
                    <h4>Your Text is responsive and centered</h4>
                </div>
                <img class="img-responsive" src={pic} />
            </div>

            <div class="containerBox">
                <div class="text-box">
                    <h4>Your Text is responsive and centered</h4>
                </div>
                <img class="img-responsive" src={ pic } />
            </div>

            <div class="thirdRowContainerBox">
                <img class="" src={pic} />
            </div>
            <div class="thirdRowContainerBox2">
                <div class="thirdRowWelcome">WELCOME</div>
                <div class="thirdRowText">Tacos El Gordo has a passion for delivering great-tasting Mexican Tacos. We have been in the food service industry for over 40 years, opening our first restaurant in 1972.</div>
                <button onClick={() => alert("Hello!")} class="button"> <span>More About Us</span></button>
            </div>

            </div>

    );
    
}



export default Home;