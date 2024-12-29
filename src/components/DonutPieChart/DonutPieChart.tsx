"use client";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export type DonutPieChartProps = {
  status: string;
  applications: number;
  fill: string;
};

const DonutPieChart = ({
  data,
  chartConfig,
  heading,
  subHeading,
  total,
}: {
  data: DonutPieChartProps[];
  chartConfig: ChartConfig;
  heading?: string;
  subHeading?: string;
  total?: string;
}) => {
  return (
    <Card className="flex flex-col w-full">
      {heading && (
        <CardHeader className="items-center pb-0">
          <CardTitle>{heading}</CardTitle>
          <CardDescription>{subHeading}</CardDescription>
        </CardHeader>
      )}
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[220px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="applications"
              nameKey="status"
              innerRadius={65}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default DonutPieChart;
