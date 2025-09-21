"use client";
import { Dialog } from "@/components/ui/Dialog";
import dynamic from "next/dynamic";

import LoginButton from "@/components/LoginButton";
import LoginModal from "@/components/LoginModal";
import { Popover } from "@/components/ui/Popover";
import styles from "@/styles/header/headerActions.module.css";

const SearchButton = dynamic(() => import("@/components/SearchButton"), { ssr: false });
const SearchPopover = dynamic(() => import("@/components/SearchPopover"), { ssr: false });

export default function HeaderActions() {
    return (
        <div className={styles.actions}>
            {/* Search Butonu ve Popoverı */}
            <Popover>
                <SearchButton />
                <SearchPopover
                    onSearch={() => { }}
                />
            </Popover>

            {/* Login Butonu ve Modalı*/}
            <Dialog>
                <LoginButton />
                <LoginModal />
            </Dialog>
        </div>
    );
}
