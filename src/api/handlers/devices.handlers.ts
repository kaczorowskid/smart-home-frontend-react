import { Request } from "../Request";
import { apiUrls } from "../apiUrls";
import {
  type CreateDevicePayload,
  type DeleteDevicePayload,
  type GetOneDevicePayload,
  type UpdateDevicePayload,
  type CreateDeviceResponse,
  type DeleteDeviceResponse,
  type GetAllBlindsResponse,
  type UpdateDeviceResponse,
  type GetOneDeviceResponse,
  type GetAllDevicesResponse,
  type GetAllThermometersResponse,
  type GetDeviceDataForGraphPayload,
  type GetDeviceDataForGraphResponse,
} from "../types/devices.types";

const request = new Request();

export const getAllDevices = async (): Promise<GetAllDevicesResponse> =>
  request.get(apiUrls.devices.base);

export const getAllThermometers =
  async (): Promise<GetAllThermometersResponse> =>
    request.get(apiUrls.devices.thermometers);

export const getAllBlinds = async (): Promise<GetAllBlindsResponse> =>
  request.get(apiUrls.devices.blinds);

export const getOneDevice = async (
  payload: GetOneDevicePayload
): Promise<GetOneDeviceResponse> =>
  request.get(apiUrls.devices.getDevice(payload.id));

export const createDevice = async (
  payload: CreateDevicePayload
): Promise<CreateDeviceResponse> => request.post(apiUrls.devices.base, payload);

export const udpateDevice = async (
  payload: UpdateDevicePayload
): Promise<UpdateDeviceResponse> =>
  request.patch(apiUrls.devices.getDevice(String(payload.id)), payload);

export const deleteDevice = async (
  payload: DeleteDevicePayload
): Promise<DeleteDeviceResponse> =>
  request.delete(apiUrls.devices.getDevice(payload.id), payload);

export const getDeviceDataForGraph = async ({
  deviceId,
  ...payload
}: GetDeviceDataForGraphPayload): Promise<GetDeviceDataForGraphResponse> =>
  request.get(apiUrls.devices.getDeviceDataForGraph(deviceId), payload);
