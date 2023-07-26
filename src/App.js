import logo from './logo.svg';
import './App.css';
//import pic from './pictures/skeleton2.jpg';

import Carousel  from "./components/Carousel.js";
import slides from "./data/carouselData.json"

function App() {



  return (
      
    <div className="App">
    <Carousel />
  
    </div>
  );
}

export default App;
