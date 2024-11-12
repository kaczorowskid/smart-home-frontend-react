export type DeviceType = "THERMOMETER" | "BLIND";
export type RoomType =
  | "BACKYARD"
  | "BATHROOM"
  | "BEDROOM"
  | "KITCHEN"
  | "LIVINGROOM";
export type DeviceStatus = "online" | "offline";

export type ThermometerData = {
  id: string;
  temperature: number;
  humidity: number;
  date: Date;
  battery: number;
  createdAt: Date;
  updatedAt: Date;
  deviceId: string;
};

export type Thermometer = {
  id: string;
  name: string;
  deviceId: string;
  type: "THERMOMETER";
  // status: DeviceStatus;
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
  // status: DeviceStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type CommonDevice = Thermometer | Blind;

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
  roomType: RoomType;
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
