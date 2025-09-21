"use client";

import Link from "next/link";
import { navItems } from "@/const/headerData";
import styles from "@/styles/header/headerNav.module.css";

export default function NavContainer() {
    return (
        <nav className={styles.nav}>
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={`#${item.key}`}
                    className={styles.link}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
}
