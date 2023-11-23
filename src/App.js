import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Navbar2 from "./components/Navbar2"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Catering from "./pages/Catering"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

function App() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
         
        <BrowserRouter>
            <ScrollToTop />
            { /* Top of the top screen */}
            <header>
                <FontAwesomeIcon icon={faFacebook}  onClick={() => openInNewTab("https://www.facebook.com")}  style={{marginLeft:'10px', marginRight:'10px'}} size="2x" />
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </header>
            <Navbar2 />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/Catering' element={<Catering />}></Route>
            </Routes>
            <footer>
                <div class='column'>
                    <p>Contact Us</p>
                    <p>522 S Wenatchee Ave, Wenatchee, WA 98801</p>
                    <p>509-470-6925</p>
                </div>
                <div class='column'>
                    Facebook
                </div>
                <div class='column'>
                    Instagram
                </div>
                <div class='column'>
                    Taqueria El Tarasco
                </div>
                
            </footer>
        </BrowserRouter>
        
    );
}

export default App;
