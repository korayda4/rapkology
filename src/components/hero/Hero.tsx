"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HeroSlide from "./HeroSlide";
import HeroIndicators from "./HeroIndicators";
import HeroNavigation from "./HeroNavigation";
import { heroSlides } from "@/const/heroData";
import styles from "@/styles/hero/hero.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.heroSection}>
            {/* Swiper Sliderı */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                autoplay={{ delay: 50000, disableOnInteraction: false }}
                loop
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <HeroSlide
                            slide={slide}
                            indicators={
                                // Alt kısımdaki belirteçler
                                <HeroIndicators
                                    total={heroSlides.length}
                                    activeIndex={activeIndex}
                                />
                            }
                        />
                    </SwiperSlide>
                ))}

                <HeroNavigation />
            </Swiper>
        </section>
    );
}
