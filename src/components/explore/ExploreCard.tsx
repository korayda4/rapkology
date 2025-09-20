"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/explore/exploreCard.module.css";
import { motion } from "framer-motion";
import { BlogCardProps } from "@/types/blogDetailPageType";

export default function BlogCard({
    slug,
    profileName,
    title,
    blogImage,
    date,
}: BlogCardProps) {
    return (
        // Animasyonlar ile kullanıcı deneyimini ve görselliği arttırdım
        <motion.div
            className={styles.cardWrapper}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* kartın sol kısmı, Resim ve Tarih alanı */}
            <div className={styles.left}>
                <Image
                    src={blogImage}
                    alt={title}
                    width={300}
                    height={190}
                    className={styles.blogImage}
                />
                <span className={styles.date}>
                    {date}
                </span>
            </div>

            <div className={styles.right}>
                <div className={styles.rightTop}>
                    {/* Kartın sağ kısmı, Profil + İsim, 
                    Başlık divider ve Daha Fazla Oku butonu */}
                    <div className={styles.profileRow}>
                        <Image
                            src={"/images/avatar.png"}
                            alt={profileName}
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.profileName}>
                            {profileName}
                        </span>
                    </div>

                    <div className={styles.titleWrapper}>
                        <div className={styles.title}>
                            {title}
                        </div>
                    </div>

                    <div className={styles.divider} />
                </div>

                <div className={styles.rightBottom}>
                    <Link
                        href={`/blog/${slug}`}
                        className={styles.readMore}
                    >
                        Daha Fazla Oku
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
