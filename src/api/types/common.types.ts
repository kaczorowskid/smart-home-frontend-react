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
  battery: number;
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

export type User = {
  id: string;
  name: string;
  surname: string;
  email: string;
  role: "USER" | "ADMIN";
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Room = {
  id: string;
  name: string;
  image: string;
  thermometers?: {
    thermometer: Thermometer;
    roomId: string;
    thermometerId: string;
  }[];
  blinds?: {
    blind: Blind;
    blindId: string;
    roomId: string;
  }[];
};
