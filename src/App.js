import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
    return (
        <BrowserRouter>
        { /* Top of the top screen */}
        <div>lol</div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                
            </Routes>
            <footer>LOL</footer>
        </BrowserRouter>
        
    );
}

export default App;
