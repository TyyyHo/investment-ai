"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
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
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const anchors = [
  {
    id: "home",
    icon: AiOutlineHome,
    href: "/",
  },
  {
    id: "guide",
    icon: AiOutlineSolution,
    disabled: true,
    href: "/guide",
  },
  {
    id: "filesSearch",
    icon: AiOutlineFileSearch,
    disabled: true,
    href: "/files-search",
  },
  {
    id: "settings",
    icon: AiOutlineSetting,
    disabled: true,
    href: "/settings",
  },
];

export default function AppSidebar() {
  const { open, toggleSidebar } = useSidebar();
  const t = useTranslations();
  const { lng } = useParams<{ lng: string }>();

  return (
    <Sidebar variant="floating" collapsible="icon">
      {/* <SidebarHeader /> */}
      <SidebarContent className="text-white">
        <SidebarGroup>
          <SidebarGroupLabel>{t("nav.application")}</SidebarGroupLabel>
          <SidebarMenu>
            {anchors.map(anchor => (
              <SidebarMenuItem key={anchor.id}>
                <SidebarMenuButton
                  asChild
                  tooltip={t(`nav.${anchor.id}`)}
                  aria-disabled={anchor.disabled}
                >
                  <Link
                    href={anchor.disabled ? "" : `/${lng}${anchor.href}`}
                    className={cn(
                      anchor.disabled && "cursor-not-allowed opacity-50"
                    )}
                  >
                    <anchor.icon />
                    <p className="group-data-[collapsible=icon]:hidden">
                      {t(`nav.${anchor.id}`)}
                    </p>
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
