"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import styles from "@/styles/ui/dialog.module.css";

// Dialog Root
export function Dialog({ children }: { children: React.ReactNode }) {
    return <DialogPrimitive.Root>{children}</DialogPrimitive.Root>;
}

// Dialog Trigger
export function DialogTrigger(props: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
    return <DialogPrimitive.Trigger {...props} asChild />;
}

// Dialog Content
export function DialogContent(
    props: React.ComponentProps<typeof DialogPrimitive.Content>
) {
    return (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className={styles.overlay} />
            <DialogPrimitive.Content {...props} className={props.className || styles.content} />
        </DialogPrimitive.Portal>
    );
}

// Dialog Close
export function DialogClose(props: React.ComponentProps<typeof DialogPrimitive.Close>) {
    return <DialogPrimitive.Close {...props} asChild />;
}

// Dialog Header, Footer, Title, Description
export function DialogHeader({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={className}>{children}</div>;
}

export function DialogFooter({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={className}>{children}</div>;
}

export function DialogTitle({ children, className }: { children: React.ReactNode; className?: string }) {
    return <h2 className={className}>{children}</h2>;
}

export function DialogDescription({ children, className }: { children: React.ReactNode; className?: string }) {
    return <p className={className}>{children}</p>;
}

