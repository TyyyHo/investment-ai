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
  useSidebar,
} from "@/components/ui/sidebar";

import {
  AiOutlineHome,
  AiOutlineSolution,
  AiOutlineFileSearch,
  AiOutlineSetting,
  AiFillCaretRight,
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
  const { open, toggleSidebar } = useSidebar();

  return (
    <Sidebar variant="floating" collapsible="icon">
      {/* <SidebarHeader /> */}
      <SidebarContent className="text-white">
        <SidebarGroup>
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
                    <anchor.icon />
                    <p>{anchor.text}</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton
          className="flex justify-end hover:bg-transparent"
          onClick={toggleSidebar}
        >
          <AiFillCaretRight
            className={cn(
              "text-white transition-all duration-300 ease-in-out",
              open ? "rotate-180" : ""
            )}
            style={{ width: "1.25rem", height: "1.25rem" }}
          />
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}

// Link-rendering is handled directly within SidebarMenuButton above.
