import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Navbar2 from "./components/Navbar2"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
    return (
        <BrowserRouter>
        { /* Top of the top screen */}
        <div>top of top bar</div>
            <Navbar2 />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                
            </Routes>
            <footer>LOL</footer>
        </BrowserRouter>
        
    );
}

export default App;
