import { useChangeDisplayedDevice } from "./DevicesBar.hooks";
import { TemperatureCard } from "./TemperatureCard/TemperatureCard";

export const DevicesBar = () => {
  const items = useChangeDisplayedDevice();

  return (
    <div className="grid grid-cols-4 gap-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <TemperatureCard items={items(index) || []} order={index} />
      ))}
    </div>
  );
};
