export type GetDeviceResponse = {
  id: string;
  type: "THERMOMETER" | "BLIND";
  name: string;
  created_at: Date;
  updated_at: Date;
};

export type GetTemperatureDevicePayload = {
  id: string;
};

export type GetTemperatureDeviceResponse = {
  id: string;
  name: string;
  temperature: number;
  humidity: number;
  created_at: Date;
  updated_at: Date;
};

export type GetDeviceToBeDisplayedIdResponse = {
  id: string;
};

export type CreateDevicePayload = {
  name: string;
  // device_id: string;
  type: "THERMOMETER" | "BLIND";
};

export type CreateDeviceResponse = {
  id: string;
  type: "THERMOMETER" | "BLIND";
  name: string;
  created_at: Date;
  updated_at: Date;
};

export type UpdateDevicePayload = Partial<{
  id: string;
  name: string;
  // device_id: string;
  type: "THERMOMETER" | "BLIND";
}>;

export type UpdateDeviceResponse = {
  id: string;
  type: "THERMOMETER" | "BLIND";
  name: string;
  created_at: Date;
  updated_at: Date;
};
