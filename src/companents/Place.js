import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./stylus.css";
import { Navigation } from "swiper";
import img1 from "./img/sticker.webp";
import img6 from "./img/sticker6.webp";
import img7 from "./img/sticker8.webp";

const Place = () => {
    return (
        <div id="place">
            <div className="container">
                <div className="placeLine"></div>
                <div className="place">
                    <div className="menuSliderBlock">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide><img src={img6} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={img7} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={img1} alt=""/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="menuTitleBlock">
                        <h1 className="placeTitle">На обед и ужин дают блюда которые вы видите на фото.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;