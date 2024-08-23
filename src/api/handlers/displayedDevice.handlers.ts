import { apiUrls } from "../apiUrls";
import { Request } from "../Request";
import {
  CreateOrUpdateDevicePayload,
  CreateOrUpdateDeviceResponse,
  GetDeviceToDisplayPayload,
  GetDeviceToDisplayResponse,
} from "../types/displayedDevice.types";

const request = new Request();

export const getDeviceToDisplay = async (
  payload: GetDeviceToDisplayPayload
): Promise<GetDeviceToDisplayResponse> =>
  request.get(apiUrls.displayedDevice.getDevice(payload.order));

export const createOrUpdateDevice = async (
  payload: CreateOrUpdateDevicePayload
): Promise<CreateOrUpdateDeviceResponse> =>
  request.put(apiUrls.displayedDevice.getDevice(payload.order), payload);
