export type GetDeviceResponse = {
  id: string;
  type: "THERMOMETER" | "BLIND";
  name: string;
  device_id: string;
  created_at: Date;
  updated_at: Date;
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

export type GetDeviceDataForGraphPayload = {
  deviceId: string;
};

export type GetDeviceDataForGraphResponse = {
  temperature: number;
  humidity: number;
  date: string;
};

export type DeleteDevicePayload = {
  id: string;
};

export type DeleteDeviceResponse = {
  id: string;
  type: "THERMOMETER" | "BLIND";
  name: string;
  device_id: string;
  created_at: Date;
  updated_at: Date;
};
