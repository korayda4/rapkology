"use client";

import Image from "next/image";
import styles from "@/styles/favorites/favoriteCard.module.css";
import { FavoriteCardProps } from "@/types/favoriteType";

export default function FavoriteCard({
    rank,
    artist,
    title,
    albumImg
}: FavoriteCardProps) {
    return (
        <div className={styles.card}>
            {/* Arka plan katmanları (pek olmadı ama olsun :) )*/}
            <Image
                src="/images/card-bg.png"
                alt="Background layer 1"
                className={styles.bottomBg}
                width={250}
                height={50}
            />


            <div className={styles.center}>

                {/* Albüm resmi ve oynat butonu  */}
                <div className={styles.albumWrap}>
                    <Image
                        src={albumImg}
                        alt={`${title} album`}
                        width={160}
                        height={160}
                        className={styles.album}
                    />
                    <div className={styles.playIconWrap}>
                        <Image
                            src="/icons/play-icon.png"
                            alt="Play"
                            width={44}
                            height={44}
                        />
                    </div>
                </div>

                {/* Şarkı bilgileri ve sıra numarası */}
                <div className={styles.badge}>
                    <span>Top 10</span>
                    <span className={styles.rank}>({rank}. Sıra)</span>
                </div>

                <div className={styles.meta}>
                    <div className={styles.artist}>{artist}</div>
                    <div className={styles.song}>{title}</div>
                </div>

            </div>
        </div>
    );
}
