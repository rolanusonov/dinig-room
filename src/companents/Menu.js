import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./stylus.css";
import img1 from "./img/1465-ed4_wide.jpg"
import img2 from "./img/sticker2.webp"
import img3 from "./img/sticker3.webp"
import img4 from "./img/sticker4.webp"

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
 const Menu = () => {

    return (
        <div id="menu">
            <div className="container">
                <div className="menu">
                    <div className="menuSliderBlock">
                    <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={img1} alt="" className="imgSlider" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt=""  className="imgSlider"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} alt=""  className="imgSlider"/>
                        </SwiperSlide>
 >

                    </Swiper>
                </div>
                    <div className="menuTitleBlock">
                        <h1 className="menuTitle">У нас на завтрак рабочим дают  2 кусочка сливочного масла,  2 варёных яйца, хлеб, соль и горячий чай.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;