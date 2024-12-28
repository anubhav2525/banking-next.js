import React from "react";
import Header from "@/components/Header/Header";
import DynamicTable from "@/components/Loan/DynamicTableLoan/DynamicTableLoan";

const Loan = () => {
  const loggedIn = "John Doe";
  return (
    <div className="w-full min-h-screen flex flex-col gap-2 p-4">
      <div>
        <Header title="Loan" type="title" subtext="asada" user={loggedIn} />
      </div>
      <div>
        <DynamicTable />
      </div>
    </div>
  );
};

export default Loan;
