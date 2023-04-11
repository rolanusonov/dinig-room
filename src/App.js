import './App.css';
import Header from "./companents/Header";

import {Route, Routes} from "react-router-dom";
import About from "./companents/About";
import Home from "./companents/Home";
import Footer from "./companents/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>


        </div>
    );
}

export default App;
