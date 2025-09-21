"use client";

import React, { useState } from "react";
import styles from "@/styles/filterSection.module.css";
import { filters } from "@/const/filterData";

type FilterSectionProps = {
    onFilterChange: (filter: string) => void;
};

export default function FilterSection({ onFilterChange }: FilterSectionProps) {
    const [activeFilter, setActiveFilter] = useState("Tümü");

    // Filtreyi Parente aktarma ve aktif buton yönetimi fonksiyonu
    const handleClick = (filter: string) => {
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    return (
        <div className={styles.filterSection}>
            <h2 className={styles.title}>
                NE GÖRMEK İSTERSİN?
            </h2>

            {/* Filtreleme Butonları */}
            <div className={styles.filterButtons}>
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ""}`}
                        onClick={() => handleClick(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
}
