"use client";

import Image from "next/image";
import { Popover } from "@/components/ui/Popover"; // Kendi Popover komponentin varsa path'ini ayarla
import SearchButton from "@/components//SearchButton";
import SearchPopover from "@/components//SearchPopover";
import styles from "@/styles/explore/exploreSectionHeader.module.css";

interface ExploreSectionHeaderProps {
    viewMode: "list" | "grid";
    setViewMode: (mode: "list" | "grid") => void;
    setSearchQuery: (query: string) => void;
}

export default function ExploreSectionHeader({
    viewMode,
    setViewMode,
    setSearchQuery,
}: ExploreSectionHeaderProps) {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <span className={styles.title}>
                    Keşfet
                </span>
                <Image
                    src="/icons/compass-icon.png"
                    alt="Compass"
                    width={30}
                    height={30}
                />
            </div>

            {/* Dinamik butonlar  */}
            <div className={styles.headerRight}>
                <Popover>
                    <SearchButton />
                    <SearchPopover onSearch={setSearchQuery} />
                </Popover>

                <Image
                    src="/icons/list-icon.png"
                    alt="List"
                    width={18}
                    height={18}
                    onClick={() => setViewMode("list")}
                    className={`${styles.icon} ${viewMode === "list" ? styles.active : ""}`}
                />
                <Image
                    src="/icons/list2-icon.png"
                    alt="Grid"
                    width={18}
                    height={18}
                    onClick={() => setViewMode("grid")}
                    className={`${styles.icon} ${viewMode === "grid" ? styles.active : ""}`}
                />
            </div>
        </div>
    );
}
