export type GetDeviceToDisplayPayload = {
  order: string;
};

export type GetDeviceToDisplayResponse = {
  order: number;
  name: string;
  type: "THERMOMETER" | "BLIND";
  thermometers:
    | {
        date: string;
        temperature: number;
        humidity: number;
      }
    | undefined;
};

export type CreateOrUpdateDevicePayload = {
  order: string;
  id: string;
};

export type CreateOrUpdateDeviceResponse = {
  id: string;
  order: number;
  device_id: string;
};
