import { DeviceChart } from "@/components/DeviceChart/DeviceChart";
import { DevicesBar } from "@/components/DevicesBar/DevicesBar";
import { DevicesTable } from "@/components/DevicesTable/DevicesTable";

export const Dashboard = () => (
  <>
    <DevicesBar />
    <div className="flex justify-between gap-5 py-5">
      <DeviceChart chartType="temperature" />
      <DeviceChart chartType="humidity" />
    </div>
    <DevicesTable isDashboardPart />
  </>
);
