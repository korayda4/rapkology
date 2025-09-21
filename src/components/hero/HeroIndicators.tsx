"use client";

import styles from "@/styles/hero/heroIndicators.module.css";
import { HeroIndicatorsProps } from "@/types/heroType";

export default function HeroIndicators({ total, activeIndex }: HeroIndicatorsProps) {
    return (
        <>
            {/* Alt kısımdaki belirteçler */}
            {Array.from({ length: total }).map((_, idx) => (
                <span
                    key={idx}
                    className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ""}`}
                />
            ))}
        </>
    );
}
