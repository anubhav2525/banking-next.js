import BasicInfo from "@/components/Profile/BasicInfo/BasicInfo";
import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import AccountInfo from "@/components/Profile/AccountInfo/AccountInfo";

const Profile = () => {
  return (
    <div className="min-h-screen w-full p-4">
      <div className="flex mb-4">
        <SidebarTrigger />
      </div>
      <div className="flex flex-col gap-8">
        <BasicInfo />
        <AccountInfo />
      </div>
    </div>
  );
};

export default Profile;
