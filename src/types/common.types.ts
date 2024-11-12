import {
  DeviceType as DeviceTypeFromApi,
  DeviceStatus as DeviceStatusFromApi,
  RoomType as RoomTypeFromApi,
  User,
} from "@/api/types/common.types";

export type UserRole = User["role"];

export type DeviceType = DeviceTypeFromApi;

export type DeviceStatus = DeviceStatusFromApi;

export type RoomType = RoomTypeFromApi;

export type ChartType = "all" | "temperature" | "humidity";

export type CommonFormProps = {
  open: boolean;
  onClose: () => void;
};
