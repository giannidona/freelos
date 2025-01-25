import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { User } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar className="">
      <SidebarContent className="p-5">
        <div>
          <p className="mb-3 text-2xl font-bold">Clients</p>
          <Button
            variant={"secondary"}
            className="text-md flex w-full font-semibold"
          >
            Add new client
          </Button>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a className="h-auto" href={"/dashboard/[client]"}>
                    <div>
                      <span className="flex items-center gap-x-2 text-xl font-semibold">
                        <User size={20} /> Adam Beyer
                      </span>
                      <span className="font-semibold text-yellow-400">
                        (in progress)
                      </span>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a className="h-auto" href={"/dashboard/[client]"}>
                    <div>
                      <span className="flex items-center gap-x-2 text-xl font-semibold">
                        <User size={20} /> Martin Garix
                      </span>
                      <span className="font-semibold text-green-400">
                        (finished)
                      </span>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
