export type GetDeviceResponse = {
  id: string;
  type: "THERMOMETER" | "BLIND";
  name: string;
  device_id: string;
  created_at: Date;
  updated_at: Date;
};

export type GetTemperatureDevicePayload = {
  id: string;
};

export type GetTemperatureDeviceResponse = {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  thermometers: {
    date: string;
    humidity: number;
    temperature: number;
  }[];
};

export type GetDeviceToBeDisplayedIdResponse = {
  id: string;
};

export type CreateDevicePayload = {
  name: string;
  device_id: string;
  type: "THERMOMETER" | "BLIND";
};

export type CreateDeviceResponse = {
  id: string;
  type: "THERMOMETER" | "BLIND";
  name: string;
  device_id: string;
  created_at: Date;
  updated_at: Date;
};

export type UpdateDevicePayload = Partial<{
  id: string;
  name: string;
  device_id: string;
  type: "THERMOMETER" | "BLIND";
}>;

export type UpdateDeviceResponse = {
  id: string;
  type: "THERMOMETER" | "BLIND";
  name: string;
  device_id: string;
  created_at: Date;
  updated_at: Date;
};

export type GetDeviceTemperatureForGraphPayload = {
  deviceId: string;
};

export type GetDeviceTemperatureForGraphResponse = {
  temperature: number;
  date: string;
};

export type GetDeviceHumidityForGraphPayload = {
  deviceId: string;
};

export type GetDeviceHumidityForGraphResponse = {
  humidity: number;
  date: string;
};
