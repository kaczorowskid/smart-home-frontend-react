import { cn } from "@/lib/utils";
import { statusColorMapper } from "./DeviceStatusNotification.utils";
import { type DeviceStatusNotificationProps } from "./DeviceStatusNotification.types";

export const DeviceStatusNotification = ({
  deviceStatus,
}: DeviceStatusNotificationProps) => {
  return (
    <div
      className={cn(
        "w-[10px] h-[10px] rounded-full",
        statusColorMapper[deviceStatus]
      )}
    />
  );
};
