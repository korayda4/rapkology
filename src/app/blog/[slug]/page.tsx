import BlogDetailCard from "@/components/blog/BlogDetailCard";
import FooterSection from "@/components/FooterSection";
import styles from "@/styles/blog/blogSection.module.css";
import mockData from "@/const/mockData.json";
import TrendCard from "@/components/trend/TrendCard";
import Image from "next/image";
import { blogDetailPageType } from "@/types/blogDetailPageType";
import { generateBlogMetadata } from "@/meta/BlogDetailMeta";

export { generateBlogMetadata as generateMetadata };

export default function BlogDetailPage({ params }: blogDetailPageType) {
    const slug = params.slug;

    const blog = mockData.find(
        (item) => item.type === "posts" && item.attributes.slug === slug
    );

    if (!blog) return <p>Blog bulunamadı</p>;

    const trends = mockData
        .filter((item) => item.type === "posts" && item.attributes.slug !== slug)
        .slice(0, 4);

    return (
        <section className={styles.blogSection}>
            <div className={styles.leftColumn}>
                <BlogDetailCard
                    slug={blog.attributes.slug}
                    title={blog.attributes.title}
                    content={blog.attributes.content}
                    img={blog.attributes.img}
                    categories={blog.attributes.tags}
                />

                <div className={styles.trendSection}>
                    <div className={styles.trendHeader}>
                        <h2>Trendler</h2>
                        <Image
                            src="/icons/trend-icon.png"
                            alt="Trend Icon"
                            width={40}
                            height={24}
                        />
                    </div>

                    <div className={styles.trendList}>
                        {trends.map((post, i) => (
                            <TrendCard
                                index={i + 1}
                                key={post._id}
                                author={{
                                    name: post.attributes.authors[0],
                                    img: "/images/avatar.png",
                                }}
                                title={post.attributes.title}
                                slug={post.attributes.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <FooterSection />
            </div>
        </section>
    );
}
