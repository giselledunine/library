import * as React from "react";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
const Input = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input"> & { search?: boolean }
>(({ className, type, search, ...props }, ref) => {
    return (
        <div className="relative text-primary-foreground">
            <input
                type={type}
                className={cn(
                    "flex h-9 w-full rounded-2xl border border-primary-foreground bg-primary-background px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className
                )}
                ref={ref}
                {...props}
            />
            {search && (
                <Search className="w-5 h-5 absolute right-3 top-2 z-10" />
            )}
        </div>
    );
});
Input.displayName = "Input";

export { Input };
