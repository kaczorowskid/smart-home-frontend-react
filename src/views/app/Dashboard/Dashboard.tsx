import { DevicesBar } from "@/components/DevicesBar/DevicesBar";
import { DevicesTable } from "@/components/DevicesTable/DevicesTable";
import { HumidityChart } from "@/components/HumidityChart/HumidityChart";
import { TemperatureChart } from "@/components/TemperatureChart/TemperatureChart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

export const Dashboard = () => (
  <>
    <DevicesBar />
    <div className="flex justify-between gap-5 py-5">
      <TemperatureChart config={chartConfig} data={chartData} />
      <HumidityChart />
    </div>
    <DevicesTable isDashboardPart />
  </>
);
