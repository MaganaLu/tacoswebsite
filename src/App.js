import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Navbar2 from "./components/Navbar2"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"

function App() {
    return (
        <BrowserRouter>
            { /* Top of the top screen */}
            <header>add social media links here</header>
            <Navbar2 />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/menu' element={<Menu />} />
                
            </Routes>
            <footer>LOL</footer>
        </BrowserRouter>
        
    );
}

export default App;
