"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
  AiOutlineHome,
  AiOutlineSolution,
  AiOutlineFileSearch,
  AiOutlineSetting,
} from "react-icons/ai";

const anchors = [
  {
    icon: AiOutlineHome,
    text: "Home",
    href: "/",
  },
  {
    icon: AiOutlineSolution,
    text: "Guide",
    disabled: true,
    href: "/guide",
  },
  {
    icon: AiOutlineFileSearch,
    text: "Files Search",
    disabled: true,
    href: "/files-search",
  },
  {
    icon: AiOutlineSetting,
    text: "Settings",
    disabled: true,
    href: "/settings",
  },
];

export default function AppSidebar() {
  return (
    <Sidebar
      variant="floating"
      collapsible="icon"
      className="bg-transparent ring-white"
    >
      {/* <SidebarHeader /> */}
      <SidebarContent className="bg-transparent text-white">
        <SidebarGroup className="">
          <SidebarMenu>
            {anchors.map(anchor => (
              <SidebarMenuItem key={anchor.text}>
                <SidebarMenuButton
                  asChild
                  tooltip={anchor.text}
                  aria-disabled={anchor.disabled}
                >
                  <Link
                    href={anchor.disabled ? "" : anchor.href}
                    className={cn(
                      anchor.disabled && "cursor-not-allowed opacity-50"
                    )}
                  >
                    <anchor.icon className="size-6" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      {anchor.text}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

// Link-rendering is handled directly within SidebarMenuButton above.
