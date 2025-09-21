"use client";
import { useState } from "react";
import HeaderActions from "./HeaderActions";
import NavContainer from "./HeaderNav";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Logo from "../Logo";
import styles from "@/styles/header/header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <Logo />
            <NavContainer />
            <div className={styles.right}>
                <HeaderActions />

                {/* Hamburger Menu */}
                <button
                    className={styles.hamburgerBtn}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Image
                        src="/icons/hamburger-menu.png"
                        alt="Menu"
                        className={styles.hamburgerIcon}
                        width={24}
                        height={12}
                    />
                </button>
            </div>

            {/* Mobile Menu Componenti */}
            <MobileMenu
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
        </header>
    );
}
