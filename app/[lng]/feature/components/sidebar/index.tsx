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
  SidebarHeader,
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
import Image from "next/image";

const anchors = [
  {
    id: "ipo-analysis",
    icon: AiOutlineHome,
    href: "/feature/demo",
    disabled: false,
  },
  {
    id: "M&A-analysis",
    icon: AiOutlineHome,
    href: "/feature/demo",
    disabled: true,
  },
  {
    id: "financing-analysis",
    icon: AiOutlineHome,
    href: "/feature/demo",
    disabled: true,
  },
  // {
  //   id: "guide",
  //   icon: AiOutlineSolution,
  //   disabled: true,
  //   href: "/guide",
  // },
  {
    id: "history",
    icon: AiOutlineFileSearch,
    disabled: true,
    href: "/history",
  },
  {
    id: "personal-settings",
    icon: AiOutlineSolution,
    disabled: true,
    href: "/personal-settings",
  },
  {
    id: "system-settings",
    icon: AiOutlineSetting,
    disabled: true,
    href: "/system-settings",
  },
];

export default function AppSidebar() {
  const { open, toggleSidebar } = useSidebar();
  const t = useTranslations();
  const { lng } = useParams<{ lng: string }>();

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader
        className={cn(
          "flex items-center justify-center transition-all",
          open ? "my-2" : "my-0"
        )}
      >
        <Image src="/images/logo.png" alt="logo" width={150} height={100} />
      </SidebarHeader>
      <SidebarContent className="text-white">
        <SidebarGroup>
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
                      "transition-all",
                      anchor.disabled && "cursor-not-allowed opacity-50"
                    )}
                  >
                    <anchor.icon />
                    <p
                      className={cn(
                        "text-base font-semibold",
                        open ? "" : "opacity-0"
                      )}
                    >
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
