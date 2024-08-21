import { DevicesBar } from "@/components/DevicesBar/DevicesBar";
import { DevicesTable } from "@/components/DevicesTable/DevicesTable";
import { HumidityChart } from "@/components/HumidityChart/HumidityChart";
import { TemperatureChart } from "@/components/TemperatureChart/TemperatureChart";

export const Dashboard = () => (
  <>
    <DevicesBar />
    <div className="flex justify-between gap-5 py-5">
      <TemperatureChart />
      <HumidityChart />
    </div>
    <DevicesTable isDashboardPart />
  </>
);
