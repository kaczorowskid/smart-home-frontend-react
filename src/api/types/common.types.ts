export type DeviceType = "THERMOMETER" | "BLIND";

export type ThermometerData = {
  id: string;
  temperature: number;
  humidity: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  deviceId: string;
};

export type Thermometer = {
  id: string;
  name: string;
  deviceId: string;
  type: "THERMOMETER";
  createdAt: Date;
  updatedAt: Date;
  data?: ThermometerData[];
};

export type Blind = {
  id: string;
  name: string;
  value: number;
  deviceId: string;
  type: "BLIND";
  createdAt: Date;
  updatedAt: Date;
};
