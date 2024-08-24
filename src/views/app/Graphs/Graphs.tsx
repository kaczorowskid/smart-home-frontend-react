import { DeviceChart } from "@/components/DeviceChart/DeviceChart";

export const Graphs = () => (
  <>
    <DeviceChart chartType="temperature" />;
    <DeviceChart chartType="humidity" />;
    <DeviceChart chartType="all" />;
  </>
);
