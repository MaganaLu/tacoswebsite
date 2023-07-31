import React from 'react'
import pic from '../pictures/skeleton2.jpg';
import './Slideshow.css'

const colors = [pic, pic, pic, pic];
const delay = 2500;
function Slideshow() {

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

                {colors.map((image, index) => (
                    <img
                        className="slide"
                        key={index}
                        alt={index}
                        src={image}
                    ></img>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;