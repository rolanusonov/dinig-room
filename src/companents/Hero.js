import React from 'react';
import imgHero from "./img/anh-nguyen-kcA-c3f_3FE-unsplash 1.png"
const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div>
                        <h1 className="heroTitle">Наша сталовая <br/> рабочим дает <br/> вкусную еду</h1>
                        <p>вы находитесь в информационном сайте</p>
                    </div>
                    <img className="heroImg" src={imgHero} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default Hero;