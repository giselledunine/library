"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { HelpCircle, PanelLeft, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
    const { toggleSidebar } = useSidebar();
    const { setTheme } = useTheme();

    return (
        <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center justify-between gap-2">
                <h1>Library</h1>
                <div className="flex items-center gap-2">
                    <Button size={"icon"}>
                        <HelpCircle />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button size={"icon"} onClick={toggleSidebar}>
                        <PanelLeft />
                    </Button>
                </div>
            </div>
        </div>
    );
}
