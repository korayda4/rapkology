"use client";

import Image from "next/image";
import styles from "@/styles/blog/blogDetailCard.module.css";

type BlogDetailCardProps = {
    slug: string;
    title: string;
    content: string;
    img: string;
    categories: string[];
};

export default function BlogDetailCard({
    slug,
    title,
    content,
    img,
    categories,
}: BlogDetailCardProps) {
    return (
        <div className={styles.blogDetailCard}>
            {/* Navigasyon Gösterge Alanı */}
            <nav className={styles.breadcrumb}>
                <span style={{ cursor: "pointer" }} onClick={() => window.location.href = "/"}>Ana Sayfa</span> &gt; <span>Blog</span> &gt; <span>{slug}</span>
            </nav>

            {/* İzlenme Sayısı Alanı */}
            <div className={styles.viewCount}>
                <Image
                    src="/icons/eye-icon.png"
                    alt="views"
                    width={18}
                    height={12}
                />
                <span>12.709</span>
            </div>

            {/* Başlık Alanı */}
            <h1 className={styles.title}>
                {title}
            </h1>

            {/* Açıklama Alanı */}
            <p className={styles.content}>
                {content}
            </p>

            {/* Ana Görsel Alanı */}
            <div className={styles.imageWrapper}>
                <Image
                    src={img}
                    alt={title}
                    width={730}
                    height={500}
                    className={styles.image}
                />
                <div className={styles.playIcon}>
                    <Image
                        src="/icons/play2-icon.png"
                        alt="Play"
                        width={60}
                        height={60}
                    />
                </div>
            </div>

            {/* Açıklama tekrarları (Yeterli veri olmadığı için böyle yapmak zorunda kaldım)*/}
            <p className={styles.content}>
                {content}
            </p>
            <p className={styles.content}>
                {content}
            </p>

            {/* Kategoriler Alanı */}
            <div className={styles.categories}>
                {categories.map((cat, index) => (
                    <span key={index} className={styles.category}>
                        {cat}
                    </span>
                ))}
            </div>

            {/* Like & Yorum Alanı */}
            <div className={styles.interactions}>
                <div className={styles.interactionItem}>
                    <Image
                        src="/icons/like-icon.png"
                        alt="Like"
                        width={24}
                        height={18}
                    />
                    <span>14 kişi beğendi</span>
                </div>
                <div className={styles.interactionItem}>
                    <Image
                        src="/icons/comment-icon.png"
                        alt="Comment"
                        width={22}
                        height={18}
                    />
                    <span>2</span>
                </div>
            </div>
        </div>
    );
}
