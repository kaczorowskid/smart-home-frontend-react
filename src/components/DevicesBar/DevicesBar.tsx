import { useGetDevicesToBeDisplayedIds } from "./DevicesBar.hooks";
import { TemperatureCard } from "./TemperatureCard/TemperatureCard";

export const DevicesBar = () => {
  const { data } = useGetDevicesToBeDisplayedIds();

  return (
    <div className="grid grid-cols-4 gap-5">
      {data?.map(({ id }) => (
        <TemperatureCard key={id} id={id} />
      ))}
    </div>
  );
};
