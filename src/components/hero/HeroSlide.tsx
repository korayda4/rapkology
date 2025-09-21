"use client";

import Image from "next/image";
import styles from "@/styles/hero/heroSlide.module.css";
import { HeroSlideProps } from "@/types/heroType";
import { motion } from "framer-motion";


export default function HeroSlide({ slide, indicators }: HeroSlideProps) {
    return (
        <div className={styles.slideWrapper}>
            <div className={styles.contentContainer}>
                {/* Başlık, Açıklama ve Devamını Oku Butonu */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className={styles.title} style={{ color: slide.color || "#fff" }}>
                        {slide.title}
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className={styles.description} style={{ color: slide.color || "#fff" }}>
                        {slide.description}
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className={styles.readMore}>
                        <Image
                            src="/images/devam-button.png"
                            alt="Devamını Oku"
                            width={136}
                            height={40}
                            className="w-full h-auto"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </motion.div>


                <div className={styles.indicatorsWrapper}>{indicators}</div>
            </div>

            {/* Arka plan görseli ve overlay katmanları (Hepsine Giriş animasyonu ekledim) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Image
                    src={slide.image}
                    alt={slide.title}
                    className={styles.slideImage}
                    width={1920}
                    height={1080}
                    priority
                />
            </motion.div>

            <Image
                src="/images/hslide-desk.png"
                alt="Overlay"
                className={styles.hslide}
                width={1920}
                height={1080}
                priority
                style={{ objectFit: "cover" }}

            />

            <Image
                src="/images/hslide-mobile.png"
                alt="Overlay"
                className={styles.hslideMobile}
                width={1920}
                height={1080}
                style={{ objectFit: "cover" }}
                priority
            />


            {/* Gradients */}
            <div className={styles.gradientHorizontal}></div>
            <div className={styles.gradientVertical}></div>
        </div>
    );
}
