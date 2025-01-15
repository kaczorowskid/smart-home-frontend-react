import { apiUrls } from "../apiUrls";
import { Request } from "../Request";
import {
  type GetOneSensorDataLogsPayload,
  type GetOneSensorDataLogsResponse,
} from "../types/thermometerData.types";

const request = new Request();

export const getOneSensorDataLogs = async (
  payload: GetOneSensorDataLogsPayload
): Promise<GetOneSensorDataLogsResponse> =>
  request.get(apiUrls.thermometerData.getOneSensor(payload.id));
