import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function FeatureLayout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen">
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </div>
  );
}
