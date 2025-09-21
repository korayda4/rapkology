"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import Image from "next/image";
import styles from "@/styles/searchButton.module.css";

export default function SearchButton() {
    return (
        <PopoverPrimitive.Trigger asChild>
            <button className={styles.button}>
                <Image
                    src="/icons/search-icon.png"
                    alt="Search"
                    width={18}
                    height={18}
                    className={styles.icon}
                />
            </button>
        </PopoverPrimitive.Trigger>
    );
}
