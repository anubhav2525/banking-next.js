import React from "react";
import { SidebarTrigger } from "../ui/sidebar";

const Header = ({
  title,
  subtitle,
}: {
  title?: string;

  subtitle?: string;
}) => {
  return (
    <section className="flex w-full flex-col gap-2">
      <div>
        <SidebarTrigger />
      </div>
      <div>{title}</div>
      <div>{subtitle}</div>
    </section>
  );
};

export default Header;
