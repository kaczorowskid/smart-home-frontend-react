import {
  type Blind,
  type Thermometer,
  type CommonDevice,
} from "./common.types";

export type GetAllBlindsResponse = Blind[];

export type CreateDeviceResponse = CommonDevice;

export type UpdateDeviceResponse = CommonDevice;

export type DeleteDeviceResponse = CommonDevice;

export type GetOneDevicesResponse = CommonDevice;

export type GetAllDevicesResponse = CommonDevice[];

export type GetAllThermometersResponse = Thermometer[];

export type GetOneDevicePayload = Pick<CommonDevice, "id">;

export type DeleteDevicePayload = Pick<CommonDevice, "id" | "type">;

export type CreateDevicePayload = Pick<
  CommonDevice,
  "name" | "type" | "deviceId"
>;

export type UpdateDevicePayload = Partial<
  Pick<CommonDevice, "id" | "name" | "type" | "deviceId">
>;

export type GetDeviceDataForGraphPayload = Pick<CommonDevice, "deviceId"> & {
  dateTo: Date | undefined;
  dateFrom: Date | undefined;
};

export type GetDeviceDataForGraphResponse = Pick<CommonDevice, "name"> & {
  data: {
    date: string;
    humidity: number;
    temperature: number;
  }[];
};
