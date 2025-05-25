import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                outline:
                    "border border-primary-foreground text-primary-foreground bg-primary-background hover:bg-primary-foreground hover:text-background",
                tonal: "text-primary bg-primary-background hover:bg-primary/90",
                destructive:
                    "bg-destructive text-popover shadow-sm hover:bg-destructive/90",
                destructiveOutlined:
                    "bg-destructive-background text-destructive-foreground border border-destructive-foreground hover:bg-destructive/90",
                destructiveTonal:
                    "text-destructive-foreground bg-destructive-background hover:bg-destructive/90",
                ghost: "bg-muted-foreground text-muted",
                ghostTonal:
                    "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                ghostOutlined:
                    "bg-muted border border-muted-foreground text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                accent: "bg-accent text-accent-foreground hover:bg-accent/90",
                accentOutlined:
                    "bg-accent-background text-accent-foreground border border-accent-foreground hover:bg-accent-foreground hover:text-accent-background",
                accentTonal:
                    "text-accent-foreground bg-accent-background hover:bg-accent/90",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/90",
                secondaryOutlined:
                    "bg-secondary-background text-secondary-foreground border border-secondary-foreground hover:bg-secondary/90",
                secondaryTonal:
                    "text-secondary-foreground bg-secondary-background hover:bg-secondary/90",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
