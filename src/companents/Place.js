import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation, Pagination} from "swiper";
import img1 from "./img/sticker.webp";

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
                                <img src={img1} alt="" className="imgSlider" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg"  alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg"  alt="" />
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