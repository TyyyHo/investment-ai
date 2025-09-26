import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "./components/sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function FeatureLayout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen">
      <SidebarProvider className="size-full overflow-hidden">
        <AppSidebar />
        <SidebarInset className="size-full bg-transparent p-2">
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
