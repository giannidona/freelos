import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="mr-5">
        <AppSidebar />
      </div>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
