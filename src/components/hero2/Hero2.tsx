"use client";

import Image from "next/image";
import styles from "@/styles/hero2/hero2.module.css";

export default function Hero2() {
    return (
        <section className={styles.hero2}>
            {/* Üstteki iki resim */}
            <div className={styles.topImages}>
                <Image
                    src="/images/twitch.png"
                    alt="Twitch"
                    width={260}
                    height={100}
                    className={styles.twitch}
                    priority
                />
                <Image
                    src="/images/follow.png"
                    alt="Follow"
                    width={260}
                    height={100}
                    className={styles.follow}
                    priority
                />
            </div>

            {/* Alt grup */}
            <div className={styles.bottomGroup}>
                <div className={styles.gradientVertical}></div>

                <div className={styles.stage}>
                    {/* İnsanlar */}
                    <div className={styles.people}>
                        <Image
                            src="/images/man.png"
                            alt="Man"
                            width={280}
                            height={480}
                            className={styles.man}
                            priority
                        />
                        <Image
                            src="/images/woman.png"
                            alt="Woman"
                            width={280}
                            height={480}
                            className={styles.woman}
                            priority
                        />
                    </div>
                </div>
            </div>

            <Image
                src="/images/hslide-desk.png"
                alt="Overlay"
                className={styles.hslide}
                width={1920}
                height={1080}
                priority
            />

            <Image
                src="/images/hslide-mobile.png"
                alt="Overlay"
                className={styles.hslideMobile}
                width={1920}
                height={1080}
                priority
            />
        </section>
    );
}
