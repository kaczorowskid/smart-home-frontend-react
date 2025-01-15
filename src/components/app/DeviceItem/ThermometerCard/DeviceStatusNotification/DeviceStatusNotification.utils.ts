import { type DeviceStatus } from "@/api/types/common.types";

export const statusColorMapper: Record<DeviceStatus, string> = {
  offline: "bg-red-500 shadow-roundedRed",
  online: "bg-green-500 shadow-roundedGreen",
};
