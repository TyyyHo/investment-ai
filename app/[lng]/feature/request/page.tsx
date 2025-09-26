"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function RequestPage() {
  return (
    <div className="size-full min-h-screen px-16 py-8">
      <p className="text-2xl font-bold text-white">Request</p>
      <SidebarTrigger />
    </div>
  );
}
