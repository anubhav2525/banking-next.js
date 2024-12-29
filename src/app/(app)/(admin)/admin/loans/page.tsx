import Header from "@/components/Header/Header";
import React from "react";
import DataTable from "./_components/DataTable/DataTable";

const AdminLoanPage = () => {
  const loggedIn = "John Doe";
  return (
    <div className="w-full min-h-screen flex flex-col gap-2 p-4">
      <div>
        <Header
          title="Loan Applications"
          type="title"
          subtext="asada"
          user={loggedIn}
        />
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  );
};

export default AdminLoanPage;
