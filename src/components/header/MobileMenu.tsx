"use client";

import Link from "next/link";
import { navItems } from "@/const/headerData";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import LoginButton from "../LoginButton";
import LoginModal from "../LoginModal";
import styles from "@/styles/header/mobileMenu.module.css";

interface MobileMenuProps {
    menuOpen: boolean;
    setMenuOpen: (val: boolean) => void;
}

export default function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
    if (!menuOpen) return null;

    return (
        <div className={styles.container}>
            {/* Navigasyon Linkleri */}
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.key}
                    className={styles.link}
                    onClick={() => setMenuOpen(false)}
                >
                    {item.name}
                </Link>
            ))}

            {/* Login Butonu ve Modalı*/}
            <Dialog>
                <DialogTrigger>
                    <LoginButton />
                </DialogTrigger>
                <DialogContent>
                    <LoginModal />
                </DialogContent>
            </Dialog>
        </div>
    );
}
