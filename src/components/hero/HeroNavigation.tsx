"use client";

import styles from "@/styles/hero/heroNavigation.module.css";

export default function HeroNavigation() {
    return (
        <>
            {/* Swiper Butonları */}
            <div
                style={{ color: "white" }}
                className={`${styles.navigationButton} ${styles.prev} swiper-button-prev`}
            />
            <div
                style={{ color: "white" }}
                className={`${styles.navigationButton} ${styles.next} swiper-button-next`}
            />
        </>
    );
}
