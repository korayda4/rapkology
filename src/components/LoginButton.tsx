"use client";

import { DialogTrigger } from "@/components/ui/Dialog";
import styles from "@/styles/loginButton.module.css";

export default function LoginButton() {
    return (
        <DialogTrigger asChild>
            <button className={styles.button}>Giriş Yap</button>
        </DialogTrigger>
    );
}
