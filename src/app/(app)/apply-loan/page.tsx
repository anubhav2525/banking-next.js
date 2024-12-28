import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ApplyLoanForm from "@/components/Loan/ApplyLoanForm/ApplyLoanForm";

const Loan = () => {
  return (
    <div className="min-h-screen w-full p-4">
      <div className="flex mb-4">
        <SidebarTrigger />
      </div>
      <div>
        <ApplyLoanForm />
      </div>
    </div>
  );
};

export default Loan;
