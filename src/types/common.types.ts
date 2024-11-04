import {
  DeviceType as DeviceTypeFromApi,
  User,
} from "@/api/types/common.types";

export type UserRole = User["role"];

export type DeviceType = DeviceTypeFromApi;

export type ChartType = "all" | "temperature" | "humidity";

export type CommonFormProps = {
  open: boolean;
  onClose: () => void;
};
