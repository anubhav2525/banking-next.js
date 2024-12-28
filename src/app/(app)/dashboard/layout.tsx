import React from "react";
import RightSidePanel from "@/components/RightSidePanel/RightSidePanel";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const user = {
    firstName: "Anubhav",
    lastName: "Srivastava",
    email: "anbhav",
  };
  return (
    <div className="flex flex-row min-h-screen w-full justify-between">
      <div>{children}</div>
      <div className="hidden lg:flex">
        {/* <RightSidePanel user={user} /> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
