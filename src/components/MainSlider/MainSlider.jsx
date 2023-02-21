import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'

import './MainSlider.scss'
import { Link } from 'react-router-dom';

const MainSlider = () => {
    return (
        <div className="swiper">
            <div className="swiper-wrapper">
                <Swiper
                    slidesPerView={1}
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="swiper__item">
                            <div className="swiper__content">
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <Link to="/catalog/name" className="swiper__btn">Подробнее</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="swiper__item">
                            <div className="swiper__content">
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <Link to="/catalog/name" className="swiper__btn">Подробнее</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="swiper__item">
                            <div className="swiper__content">
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <Link to="/catalog/name" className="swiper__btn">Подробнее</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default MainSlider