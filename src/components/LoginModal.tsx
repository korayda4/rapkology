"use client";

import {
    DialogContent,
    DialogHeader,
    DialogFooter
} from "@/components/ui/Dialog";

import {
    DialogTitle,
    DialogDescription
} from "@/components/ui/DialogHelpers";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import styles from "@/styles/loginModal.module.css";

export default function LoginModal() {
    return (
        <DialogContent className={styles.content}>
            {/* Header */}
            <DialogHeader className={styles.header}>
                <DialogTitle className={styles.title}>Giriş Yap</DialogTitle>
                <DialogDescription className={styles.description}>
                    RAPKOLOGY ailesine tekrar hoşgeldin! Email ve Şifre ile giriş yap
                </DialogDescription>
            </DialogHeader>

            {/* Form */}
            <form className={styles.form}>
                <Input type="email" placeholder="Email" className={styles.input} />
                <Input type="password" placeholder="Şifre" className={styles.input} />
            </form>

            {/* Footer */}
            <DialogFooter className={styles.footer}>
                <Button className={styles.button}>Giriş Yap</Button>
            </DialogFooter>
        </DialogContent>
    );
}
