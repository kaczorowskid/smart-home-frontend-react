import {
  DeviceType as DeviceTypeFromApi,
  DeviceStatus as DeviceStatusFromApi,
  RoomType as RoomTypeFromApi,
} from "@/api/types/common.types";
import { AxiosError } from "axios";

export type DeviceType = DeviceTypeFromApi;

export type DeviceStatus = DeviceStatusFromApi;

export type RoomType = RoomTypeFromApi;

export type ChartType = "all" | "temperature" | "humidity";

export type CommonFormProps = {
  open: boolean;
  onClose: () => void;
};

export type CustomAxiosError = AxiosError<{
  message: string;
  statusCode: number;
  prismCode: string;
  timestamp: Date;
}>;
