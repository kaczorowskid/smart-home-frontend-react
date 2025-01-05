export const permissionsList = {
  IS_ADMIN: "IS_ADMIN",
  DASHBOARD_VIEW: "DASHBOARD_VIEW",
  GRAPHS_VIEW: "GRAPHS_VIEW",
  ROOMS_VIEW: "ROOMS_VIEW",
  OPTIONS_VIEW: "OPTIONS_VIEW",
  OPTIONS_VIEW_DEVICES: "OPTIONS_VIEW_DEVICES",
  OPTIONS_ADD_DEVICE: "OPTIONS_ADD_DEVICE",
  OPTIONS_UPDATE_DEVICE: "OPTIONS_UPDATE_DEVICE",
  OPTIONS_DELETE_DEVICE: "OPTIONS_DELETE_DEVICE",
  OPTIONS_VIEW_ROOMS: "OPTIONS_VIEW_ROOMS",
  OPTIONS_ADD_ROOM: "OPTIONS_ADD_ROOM",
  OPTIONS_UPDATE_ROOM: "OPTIONS_UPDATE_ROOM",
  OPTIONS_DELETE_ROOM: "OPTIONS_DELETE_ROOM",
  OPTIONS_VIEW_USERS: "OPTIONS_VIEW_USERS",
  OPTIONS_ADD_USER: "OPTIONS_ADD_USER",
  OPTIONS_UPDATE_USER: "OPTIONS_UPDATE_USER",
  OPTIONS_DELETE_USER: "OPTIONS_DELETE_USER",
  OPTIONS_VIEW_ROLES: "OPTIONS_VIEW_ROLES",
  OPTIONS_ADD_ROLE: "OPTIONS_ADD_ROLE",
  OPTIONS_UPDATE_ROLE: "OPTIONS_UPDATE_ROLE",
  OPTIONS_DELETE_ROLE: "OPTIONS_DELETE_ROLE",
  SETTINGS_VIEW: "SETTINGS_VIEW",
} as const;

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
  role: Role;
  roleId: string;
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

export type Permission = keyof typeof permissionsList;

export type Role = {
  id: string;
  name: string;
  permissions: {
    id?: string;
    roleId?: string;
    permission: Permission;
  }[];
};
