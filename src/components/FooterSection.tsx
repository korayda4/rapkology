"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/footerSection.module.css";

const footerLinks = [
    ["Haberler", "Etkinlikler"],
    ["Müzikler", "Videolar"],
    ["İletişim"],
];

export default function FooterSection() {
    return (
        <div className={styles.footerSection}>
            <h2 className={styles.title}>
                GELİŞMELERDEN İLK SEN HABERDAR OL!
            </h2>

            {/* Email input ve Gönder butonu */}
            <div id="contact" className={styles.emailRow}>
                <input
                    type="email"
                    placeholder="Email"
                    className={styles.emailInput}
                />
                <button
                    className={styles.sendButton}
                >
                    Gönder →
                </button>
            </div>

            <div className={styles.bottomBorder}></div>

            <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
                <Image
                    src="/images/socialMedia.png"
                    alt="Social Media"
                    width={220}
                    height={30}
                    style={{ objectFit: "contain" }}
                />
            </div>

            {/* Link sütunları */}
            <div className={styles.links}>
                {footerLinks.map((col, i) => (
                    <div key={i} className={styles.linkColumn}>
                        {col.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className={styles.link}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                ))}
            </div>

            <div className={styles.copyright}>
                © RAPKOLOGY All Rights Are Reserved 2022.
            </div>
        </div>
    );
}
