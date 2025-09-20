"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

import styles from "@/styles/favorites/favoritesSection.module.css";
import FavoriteCard from "@/components/favorites/FavoriteCard";

import mockDataJson from "@/const/mockData.json";

type Favorite = {
    id: string;
    rank: number;
    artist: string;
    title: string;
    albumImg: string;
    bgImg: string;
};

const FavoritesSection = () => {
    const favorites: Favorite[] = mockDataJson.map((item, index) => ({
        id: item._id,
        rank: index + 1,
        artist: item.attributes.authors?.[0] || "Bilinmeyen",
        title: item.attributes.title,
        albumImg: item.attributes.img,
        bgImg: item.attributes.img,
    }));

    return (
        <section className={styles.favorites}>

            {/* Üst Logo ve Platform Logoları */}
            <div className={styles.topLogoWrapper}>
                <Image
                    src="/images/favorites-image.png"
                    alt="Ayın Favorileri Logo"
                    className={styles.favoritesBg}
                    width={370}
                    height={80}
                />

                <div className={styles.platformLogos}>
                    <Image
                        src="/icons/youtube-logo.png"
                        alt="YouTube"
                        width={90}
                        height={20}
                    />
                    <Image
                        src="/icons/spotify-logo.png"
                        alt="Spotify"
                        width={90}
                        height={25}
                    />
                </div>
            </div>

            {/* İçerik Alanı */}
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Ayın <br /> Favorileri
                </h2>

                <Swiper
                    modules={[Scrollbar]}
                    spaceBetween={24}
                    slidesPerView={1.2}
                    scrollbar={{ draggable: true }}
                    className={styles.swiper}
                >
                    {favorites.map((fav) => (
                        <SwiperSlide key={fav.id}>
                            <FavoriteCard
                                rank={fav.rank}
                                artist={fav.artist}
                                title={fav.title}
                                albumImg={fav.albumImg}
                                bgImg={fav.bgImg}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FavoritesSection;
