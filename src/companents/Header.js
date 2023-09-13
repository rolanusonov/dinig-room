import React from 'react';
import {Link} from "react-router-dom";




const Header = () => {
    return (
      <div id="header">
          <div className="container">
              <div className="header">
                  <h1 className="headerTitle">Наша <p className="headTitleCol">столовая</p></h1>
                  <Link to="/about" className="headAbout">О нас</Link>
                </div>
          </div>
      </div>
    );
};

export default Header;