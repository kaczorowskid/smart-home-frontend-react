import { Blind, DeviceType, Thermometer } from "./common.types";

export type GetAllDevicesResponse = (Thermometer | Blind)[];

export type GetAllThermometersResponse = Thermometer[];
export type GetAllBlindsResponse = Blind[];

export type GetOneDevicePayload = {
  id: string;
};

export type GetOneDevicesResponse = Thermometer | Blind;

export type CreateDevicePayload = {
  name: string;
  deviceId: string;
  type: DeviceType;
};

export type CreateDeviceResponse = Thermometer | Blind;

export type UpdateDevicePayload = Partial<{
  id: string;
  name: string;
  deviceId: string;
  type: DeviceType;
}>;

export type UpdateDeviceResponse = Thermometer | Blind;

export type GetDeviceDataForGraphPayload = {
  deviceId: string;
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
};

export type GetDeviceDataForGraphResponse = {
  name: string;
  data: {
    temperature: number;
    humidity: number;
    date: string;
  }[];
};

export type DeleteDevicePayload = {
  id: string;
  type: DeviceType;
};

export type DeleteDeviceResponse = Thermometer | Blind;
