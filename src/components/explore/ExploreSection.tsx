"use client";

import { useState } from "react";
import BlogCard from "./ExploreCard";
import FilterSection from "../FilterSection";
import FooterSection from "../FooterSection";
import styles from "@/styles/explore/exploreSection.module.css";
import Image from "next/image";
import mockData from "@/const/mockData.json";
import SearchButton from "../SearchButton";
import SearchPopover from "../SearchPopover";
import { Popover } from "@/components/ui/Popover";

export default function ExploreSection() {
    const posts = mockData.filter((item) => item.type === "posts");

    const [selectedFilter, setSelectedFilter] = useState("Tümü");
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const [searchQuery, setSearchQuery] = useState("");


    // Filtreleme Fonksiyonları 
    const filteredPosts =
        selectedFilter === "Tümü"
            ? posts
            : posts.filter((post) =>
                post.attributes.tags.includes(selectedFilter)
            );

    const finalPosts = filteredPosts.filter((post) =>
        post.attributes.title.toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    // --------

    return (
        <section className={styles.exploreSection}>
            <div className={styles.leftColumn}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span>Keşfet</span>
                        <Image
                            src="/icons/compass-icon.png"
                            alt="Compass"
                            width={30}
                            height={30}
                        />
                    </div>

                    {/* Dinamik Butonlar Alanı  */}
                    <div className={styles.headerRight}>
                        <Popover>
                            <SearchButton />
                            <SearchPopover
                                onSearch={setSearchQuery}
                            />
                        </Popover>

                        <Image
                            src="/icons/list-icon.png"
                            alt="List"
                            width={18}
                            height={18}
                            onClick={() => setViewMode("list")}
                            className={`${styles.icon} ${viewMode === "list"
                                ? styles.active : ""
                                }`}
                        />
                        <Image
                            src="/icons/list2-icon.png"
                            alt="Grid"
                            width={18}
                            height={18}
                            onClick={() => setViewMode("grid")}
                            className={`${styles.icon} ${viewMode === "grid"
                                ? styles.active : ""}`}
                        />
                    </div>
                </div>

                <div className={styles.mobileOnly}>
                    <FilterSection onFilterChange={setSelectedFilter} />
                </div>
                {/* Blog Kartları Alanı */}
                <div
                    className={`${styles.blogList} ${viewMode === "grid"
                        ? styles.gridView
                        : styles.listView
                        }`}
                >
                    {finalPosts.slice(0, 5).map((post) => (
                        <BlogCard
                            key={post._id}
                            avatar="/avatars/avatar1.png"
                            profileName={post.attributes.authors[0]}
                            title={post.attributes.title}
                            slug={post.attributes.slug}
                            blogImage={post.attributes.img}
                            date={new Date(
                                post.createdAt
                            ).toLocaleDateString("tr-TR", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        />
                    ))}
                </div>

                {/* Mobilde Footer Alanı */}
                <div className={styles.mobileOnly}>
                    <FooterSection />
                </div>
            </div>

            {/* Sağ Kolon Alanı ( Filtreleme ve Footer ) */}
            <div className={styles.rightColumn}>
                <div className={styles.desktopOnly}>
                    <FilterSection
                        onFilterChange={setSelectedFilter}
                    />
                </div>

                <div className={styles.desktopOnly}>
                    <FooterSection />
                </div>
            </div>
        </section>
    );
}
