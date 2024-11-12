import { Blind, CommonDevice, Thermometer } from "./common.types";

export type GetAllDevicesResponse = CommonDevice[];

export type GetAllThermometersResponse = Thermometer[];
export type GetAllBlindsResponse = Blind[];

export type GetOneDevicePayload = Pick<CommonDevice, "id">;

export type GetOneDevicesResponse = CommonDevice;

export type CreateDevicePayload = Pick<
  CommonDevice,
  "name" | "deviceId" | "type"
>;

export type CreateDeviceResponse = CommonDevice;

export type UpdateDevicePayload = Partial<
  Pick<CommonDevice, "id" | "name" | "deviceId" | "type">
>;

export type UpdateDeviceResponse = CommonDevice;

export type GetDeviceDataForGraphPayload = Pick<CommonDevice, "deviceId"> & {
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
};

export type GetDeviceDataForGraphResponse = Pick<CommonDevice, "name"> & {
  data: {
    temperature: number;
    humidity: number;
    date: string;
  }[];
};

export type DeleteDevicePayload = Pick<CommonDevice, "id" | "type">;

export type DeleteDeviceResponse = CommonDevice;
