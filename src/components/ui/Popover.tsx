"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ReactNode } from "react";

interface PopoverProps {
    children: ReactNode;
}

export function Popover({ children }: PopoverProps) {
    return <PopoverPrimitive.Root>{children}</PopoverPrimitive.Root>;
}
