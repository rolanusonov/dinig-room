import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
 import DG from '2gis-maps';

import aboutImg1 from "./img/photo_2023-04-12_11-10-34.jpg"
import aboutImg2 from "./img/photo_2023-04-12_11-10-40.jpg"



const About = () => {

    return (
        <div id='about'>
            <div className="container">
                <div className="about">
                    <div className="aboutBtn">
                        <Link to="/" className="aboutButton"> &larr;Назад</Link>
                        <h1 className="aboutTitle">Наша столовая обслуживает только рабочих  <Link to="https://aykhalcentr.ru/vse-uslugi"> АйхалЦентр </Link></h1>
                    </div>
                    <div className="aboutImgBlock">
                        <img src={aboutImg1} alt=""/>
                        <img src={aboutImg2} alt=""/>
                    </div>

                 </div>
            </div>
        </div>
    );
};

export default About;