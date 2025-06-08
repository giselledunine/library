"use client";

import { useState } from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    useSidebar,
    SidebarGroupLabel,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    Calendar,
    ChevronsUpDown,
    Book,
    Clock,
    ChevronRight,
    Star,
    BriefcaseBusiness,
    AlertCircle,
    CircleUser,
    BookCopy,
    Home,
    List,
    PenLineIcon,
} from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import Link from "next/link";

export function AppSidebar() {
    const { isMobile, setOpen } = useSidebar();
    const [activeItem, setActiveItem] = useState();
    const data = {
        user: {
            name: "Sophia Hmamouche",
            avatar: "/avatar.png",
        },
        nav: [
            {
                title: "Home",
                url: "/",
                icon: Home,
            },
        ],
        navMain: [
            {
                title: "Books",
                url: "/books",
                icon: BookCopy,
                items: [
                    {
                        title: "Liste",
                        url: "/books",
                        icon: List,
                    },
                    {
                        title: "Ajouter des livres",
                        url: "#",
                        icon: PenLineIcon,
                    },
                ],
            },
            {
                title: "Utilisateurs",
                url: "/users",
                icon: CircleUser,
                items: [
                    {
                        title: "Liste",
                        url: "/users",
                        icon: List,
                    },
                    {
                        title: "Ajouter des utilisateurs",
                        url: "/addUsers",
                        icon: PenLineIcon,
                    },
                ],
            },
            {
                title: "Réservations",
                url: "/reservations",
                icon: Calendar,
                items: [
                    {
                        title: "Liste",
                        url: "/reservations",
                        icon: List,
                    },
                    {
                        title: "Ajouter des réservations",
                        url: "/addReservations",
                        icon: PenLineIcon,
                    },
                ],
            },
            {
                title: "Alertes",
                url: "/alertes",
                icon: AlertCircle,
            },
            {
                title: "Séléctions et nouveautés",
                url: "/selection",
                icon: Star,
            },
            {
                title: "Pour les pros",
                url: "#",
                icon: BriefcaseBusiness,
            },
        ],
    };
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage
                                            src={data.user.avatar}
                                            alt={data.user.name}
                                        />
                                        <AvatarFallback className="rounded-lg">
                                            CN
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-medium">
                                            {data.user.name}
                                        </span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                                align="start"
                                side={isMobile ? "bottom" : "right"}
                                sideOffset={isMobile ? 8 : 16}>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Book className="mr-2 h-4 w-4" />
                                        Réservations
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Clock className="mr-2 h-4 w-4" />
                                        Historique
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.nav.map((el) => (
                            <SidebarMenuItem key={el.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={el.url}>
                                        <el.icon />
                                        <span>{el.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarMenu>
                        {data.navMain.map((el) => (
                            <Collapsible
                                key={el.title}
                                asChild
                                className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            tooltip={el.title}
                                            onClick={() => {
                                                setActiveItem(el.title);
                                                setOpen(true);
                                            }}
                                            isActive={
                                                activeItem?.title === el.title
                                            }
                                            className="px-2.5 md:px-2">
                                            <el.icon />
                                            <span>{el.title}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {el.items?.map((subItem) => (
                                                <SidebarMenuSubItem
                                                    key={subItem.title}>
                                                    <SidebarMenuSubButton
                                                        asChild>
                                                        <a href={subItem.url}>
                                                            <subItem.icon></subItem.icon>
                                                            <span>
                                                                {subItem.title}
                                                            </span>
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}
