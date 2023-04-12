import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="header">
                        <h1 className="headerTitle">Наша <p className="headTitleCol">сталовая</p></h1>
                        <Link to="/" className="headAbout">О нас</Link>
                    </div>
                    <div className="footerLine"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;