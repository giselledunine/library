import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "Library Project",
    description: "Next App Library Manager",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    <Toaster expand />
                    <SidebarProvider>
                        <AppSidebar />
                        <div className="grid grid-rows-[auto_3fr_1fr] h-screen w-full">
                            <Header></Header>
                            {children}
                            <div>
                                <h3>Footer</h3>
                            </div>
                        </div>
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
