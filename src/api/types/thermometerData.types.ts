import { type Thermometer, type ThermometerData } from "./common.types";

export type GetOneSensorDataLogsPayload = Pick<Thermometer, "id">;

export type GetOneSensorDataLogsResponse = {
  data: ThermometerData[];
  min: {
    humidity: number;
    temperature: number;
  };
  max: {
    humidity: number;
    temperature: number;
  };
};
