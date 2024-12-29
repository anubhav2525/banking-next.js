import React from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <div>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
