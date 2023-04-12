import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation, Pagination} from "swiper";
import img1 from "./img/sticker.webp";
import img5 from "./img/sticker5.webp";
import img6 from "./img/sticker6.webp";
import img7 from "./img/sticker8.webp";

const Place = () => {
    return (
        <div id="place">
            <div className="container">
                <div className="placeLine"></div>
                <div className="place">
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
                                <img src={img5} alt="" className="imgSlider" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img6} alt="" className="imgSlider" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img7} alt="" className="imgSlider" />
                            </SwiperSlide>

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