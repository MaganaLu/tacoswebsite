import React from 'react';
import './About.css';
import pic from '../pictures/skeleton2.jpg';

const About = () => {
    return (
        <div class="wrapper">
            <article class="main">
                <img alt="meme" src={pic} />
                <img alt="meme" src={pic} />
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </article>
            <aside class="aside aside-1">
                <img alt="meme" src={pic} />
                
            </aside>
            <aside class="aside aside-2">Aside 2</aside>
            <footer class="footer">Footer</footer>
        </div>
    );
}
export default About;