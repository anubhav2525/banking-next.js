import React from "react";
import { SidebarTrigger } from "../ui/sidebar";

const Header = ({
  type = "title",
  title,
  subtext,
  user,
}: {
  type?: "title" | "greeting";
  title: string;
  subtext?: string;
  user?: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <SidebarTrigger />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-gray-900 dark:text-gray-100 text-2xl md:text-4xl">
          {title}
          {type === "greeting" && (
            <span className="text-blue-500">&nbsp;{user}</span>
          )}
        </h1>
        <p className="font-normal text-gray-600 tracking-wider dark:text-gray-300 text-base md:text-lg xl:text-xl">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default Header;
