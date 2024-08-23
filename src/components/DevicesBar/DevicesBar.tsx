import { DeviceItem } from "./DeviceItem/DeviceItem";

export const DevicesBar = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <DeviceItem key={index} order={index} />
      ))}
    </div>
  );
};
