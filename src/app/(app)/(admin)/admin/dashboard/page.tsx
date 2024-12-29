import React from "react";
import DonutPieChart from "@/components/DonutPieChart/DonutPieChart";
import BarChartAdmin from "@/components/BarChartAdmin/BarChartAdmin";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChartConfig } from "@/components/ui/chart";

const AdminDashboard = () => {
  const chartData = [
    { status: "pending", applications: 150, fill: "var(--color-pending)" },
    { status: "approved", applications: 200, fill: "var(--color-approved)" },
    { status: "rejected", applications: 100, fill: "var(--color-rejected)" },
    { status: "completed", applications: 250, fill: "var(--color-completed)" },
  ];

  const chartConfig = {
    applications: {
      label: "Applications",
    },
    pending: {
      label: "Pending",
      color: "hsl(var(--chart-3))",
    },
    approved: {
      label: "Approved",
      color: "hsl(var(--chart-2))",
    },
    rejected: {
      label: "Rejected",
      color: "hsl(var(--chart-4))",
    },
    completed: {
      label: "Completed",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  const totalApplications = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.applications, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full gap-2 p-4">
      <div className="flex gap-x-4">
        <SidebarTrigger />
      </div>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-3">
        <DonutPieChart
          data={chartData}
          chartConfig={chartConfig}
          total={totalApplications.toString()}
          heading="Loan Application Status"
          subHeading="Current Month Overview"
        />
        <DonutPieChart
          data={chartData}
          chartConfig={chartConfig}
          total={totalApplications.toString()}
          heading="Customers Overview"
          subHeading="Current Month Overview"
        />
        <DonutPieChart
          data={chartData}
          chartConfig={chartConfig}
          total={totalApplications.toString()}
          heading="Complaints Overview"
          subHeading="Current Month Overview"
        />
        <BarChartAdmin />
      </div>
    </div>
  );
};

export default AdminDashboard;
