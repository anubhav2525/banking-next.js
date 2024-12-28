import React from "react";
import RightSidePanel from "@/components/Right";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row min-h-screen w-full justify-between">
      <div>{children}</div>
      <div className="hidden lg:flex">
        <RightSidePanel />
      </div>
    </div>
  );
};

export default DashboardLayout;
