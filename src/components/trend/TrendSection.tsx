"use client";

import Image from "next/image";
import Link from "next/link";
import TrendCard from "./TrendCard";
import styles from "@/styles/trends/trendsSection.module.css";
import mockData from "@/const/mockData.json";

export default function TrendsSection({ count = 6 }: { count?: number }) {
    const trends = mockData
        .slice(0, count)
        .map((item) => ({
            author: { name: item.attributes.authors[0], img: item.attributes.img },
            title: item.attributes.title,
            slug: item.attributes.slug
        }));

    return (
        <section className={styles.trends}>
            <div className={styles.header}>

                {/* Başlık ve İkon */}
                <h2 className={styles.title}>
                    Trendler
                </h2>
                <Image
                    src="/icons/trend-icon.png"
                    alt="Trend Icon"
                    width={40}
                    height={24}
                    style={{ objectFit: "contain" }}
                />
            </div>

            {/* Kartlar  */}
            <div className={styles.cards}>
                {trends.map((item, i) => (
                    <TrendCard
                        key={i}
                        index={i + 1}
                        author={item.author}
                        title={item.title}
                        slug={item.slug}
                    />
                ))}
            </div>

            {/* Tümünü Gör Butonu */}
            <div className={styles.allButtonWrapper}>
                <Link href="#">
                    <Image
                        src="/images/tumunu-gor.png"
                        alt="Tümünü Gör"
                        width={200}
                        height={50}
                        className={styles.allButton}
                    />
                </Link>
            </div>
        </section>
    );
}
