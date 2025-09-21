"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/logo.module.css";

export default function Logo() {
    return (
        <Link href="/" className={styles.container}>
            <Image
                src="/images/rapkology-logo.png"
                alt="Rapkology Logo"
                width={235}
                height={60}
                className={styles.image}
            />
        </Link>
    );
}
