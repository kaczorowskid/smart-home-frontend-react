export type GetDevicePayload = {
  id: string;
};

export type GetDeviceResponse = {
  id: string;
  type: "THERMOMETER" | "BLIND";
  name: string;
  device_id: string;
  created_at: Date;
  updated_at: Date;
  thermometers: {
    humidity: number;
    temperature: number;
    date: string;
  }[];
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
  name: string;
  thermometers: {
    temperature: number;
    humidity: number;
    date: string;
  }[];
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
