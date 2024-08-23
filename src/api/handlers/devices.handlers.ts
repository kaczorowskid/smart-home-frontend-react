import { Request } from "../Request";
import { apiUrls } from "../apiUrls";
import {
  CreateDevicePayload,
  CreateDeviceResponse,
  DeleteDevicePayload,
  DeleteDeviceResponse,
  GetDeviceHumidityForGraphPayload,
  GetDeviceHumidityForGraphResponse,
  GetDeviceResponse,
  GetDeviceTemperatureForGraphPayload,
  GetDeviceTemperatureForGraphResponse,
  UpdateDevicePayload,
  UpdateDeviceResponse,
} from "../types/devices.types";

const request = new Request();

export const getAllDevices = async (): Promise<GetDeviceResponse[]> =>
  request.get(apiUrls.devices.base);

export const createDevice = async (
  payload: CreateDevicePayload
): Promise<CreateDeviceResponse> => request.post(apiUrls.devices.base, payload);

export const udpateDevice = async (
  payload: UpdateDevicePayload
): Promise<UpdateDeviceResponse> =>
  request.patch(apiUrls.devices.getDevice(String(payload.id)), payload);

export const getDeviceTemperatureForGraph = async (
  payload: GetDeviceTemperatureForGraphPayload
): Promise<GetDeviceTemperatureForGraphResponse[]> =>
  request.get(apiUrls.devices.getDeviceTemperatureForGraph(payload.deviceId));

export const getDeviceHumidityForGraph = async (
  payload: GetDeviceHumidityForGraphPayload
): Promise<GetDeviceHumidityForGraphResponse[]> =>
  request.get(apiUrls.devices.getDeviceHumidityForGraph(payload.deviceId));

export const deleteDevice = async (
  payload: DeleteDevicePayload
): Promise<DeleteDeviceResponse> =>
  request.delete(apiUrls.devices.getDevice(payload.id));
