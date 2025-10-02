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
  AiOutlineSolution,
  AiOutlineFileSearch,
  AiOutlineSetting,
  AiFillCaretRight,
  AiOutlineFolderOpen,
  AiOutlineFileProtect,
  AiOutlineFileSync,
} from "react-icons/ai";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Image from "next/image";

const anchors = [
  {
    id: "ipo-analysis",
    icon: AiOutlineFileProtect,
    href: "/feature/demo",
    disabled: false,
  },
  {
    id: "financing-analysis",
    icon: AiOutlineFileSync,
    href: "/feature/demo",
    disabled: true,
  },
  {
    id: "M&A-analysis",
    icon: AiOutlineFileSearch,
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
    icon: AiOutlineFolderOpen,
    disabled: true,
    href: "/history",
  },
  {
    id: "custom-analysis",
    icon: AiOutlineSolution,
    disabled: true,
    href: "/custom-analysis",
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
          open ? "mt-1.5" : "my-0"
        )}
      >
        <Image src="/images/logo.png" alt="logo" width={150} height={100} />
        {open && (
          <div className="text-center">
            <h1 className="text-lg font-bold tracking-wider text-[#d8931c]">
              廷豐金融科技
            </h1>
            <h1 className="text-sm font-bold tracking-wider text-[#d8931c]">
              GRAND EMPIRE
            </h1>
            <p className="mb-2 text-xl font-semibold text-[#0088a6] text-shadow-md">
              AI 投資銀行機器人
            </p>
          </div>
        )}
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
