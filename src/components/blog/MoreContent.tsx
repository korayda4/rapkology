"use client";

import Image from "next/image";
import styles from "@/styles/blog/moreContent.module.css";
import mockData from "@/const/mockData.json";

export default function MoreContent() {
    const posts = mockData.filter(
        (item) => item.type === "posts"
    ).slice(0, 3);

    return (
        <div className={styles.moreContent}>
            <h2 className={styles.title}>
                Daha Fazla İçerik
            </h2>

            <div className={styles.list}>
                {posts.map((post, index) => (
                    <div key={post._id}>
                        <div className={styles.item}>
                            <Image
                                src={post.attributes.img}
                                alt={post.attributes.title}
                                width={80}
                                height={75}
                                className={styles.image}
                            />
                            <p className={styles.text}>{post.attributes.title}</p>
                        </div>

                        {/* Divider ( Gri çizgi alanı ) */}
                        {index < posts.length - 1 &&
                            <div className={styles.divider}>
                                
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}
