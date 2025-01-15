import { type Thermometer, type ThermometerData } from "./common.types";

export type GetOneSensorDataLogsResponse = ThermometerData[];

export type GetOneSensorDataLogsPayload = Pick<Thermometer, "id">;
