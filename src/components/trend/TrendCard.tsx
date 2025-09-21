"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/trends/trendCard.module.css";
import { TrendCardProps } from "@/types/trendType";
import { motion } from "framer-motion";

export default function TrendCard({
    index,
    author,
    title,
    slug
}: TrendCardProps) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* Sol: sıra numarası */}
            <div className={styles.index}>
                {index.toString().padStart(2, "0")}
            </div>

            {/* Sağ: içerik */}
            <div className={styles.content}>
                {/* Profil + isim */}
                <div className={styles.author}>
                    <Image
                        src={author.img}
                        alt={author.name}
                        width={32}
                        height={32}
                        className={styles.avatar}
                    />
                    <span className={styles.authorName}>{author.name}</span>
                </div>

                {/* Title */}
                <div className={styles.title}>{title}</div>

                {/* Çizgi */}
                <div className={styles.line}></div>

                {/* Devamını Oku */}
                <Link href={`/blog/${slug}`} className={styles.readMore}>
                    Daha Fazla Oku
                </Link>
            </div>
        </motion.div>
    );
}
