"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import styles from "@/styles/searchPopover.module.css";

type SearchPopoverProps = {
    onSearch: (value: string) => void;
};

export default function SearchPopover({ onSearch }: SearchPopoverProps) {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchValue);
    };

    return (
        <PopoverPrimitive.Content
            className={styles.content}
            sideOffset={24}
        >
            <Input
                placeholder="Ara..."
                value={searchValue}
                onChange={handleInputChange}
            />
            <Button onClick={handleSearch}>Ara</Button>
        </PopoverPrimitive.Content>
    );
}
