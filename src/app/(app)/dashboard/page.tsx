import Header from "@/components/Header/Header";
import React from "react";

const Dashboard = () => {
  const loggedIn = {
    firstName: "anubhav",
  };
  return (
    <div className="w-full min-h-screen flex flex-col gap-2 p-4">
      <div>
        <Header
          title="Welcome,"
          user={loggedIn?.firstName || "Guest"}
          type="greeting"
          subtext="sghjsjhdfhgsdfsgh"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
