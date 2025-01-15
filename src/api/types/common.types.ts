export const permissionsList = {
  IS_ADMIN: "IS_ADMIN",
  ROOMS_VIEW: "ROOMS_VIEW",
  GRAPHS_VIEW: "GRAPHS_VIEW",
  OPTIONS_VIEW: "OPTIONS_VIEW",
  SETTINGS_VIEW: "SETTINGS_VIEW",
  DASHBOARD_VIEW: "DASHBOARD_VIEW",
  OPTIONS_ADD_ROOM: "OPTIONS_ADD_ROOM",
  OPTIONS_ADD_USER: "OPTIONS_ADD_USER",
  OPTIONS_ADD_ROLE: "OPTIONS_ADD_ROLE",
  OPTIONS_ADD_DEVICE: "OPTIONS_ADD_DEVICE",
  OPTIONS_VIEW_ROOMS: "OPTIONS_VIEW_ROOMS",
  OPTIONS_VIEW_USERS: "OPTIONS_VIEW_USERS",
  OPTIONS_VIEW_ROLES: "OPTIONS_VIEW_ROLES",
  OPTIONS_UPDATE_ROOM: "OPTIONS_UPDATE_ROOM",
  OPTIONS_DELETE_ROOM: "OPTIONS_DELETE_ROOM",
  OPTIONS_UPDATE_USER: "OPTIONS_UPDATE_USER",
  OPTIONS_DELETE_USER: "OPTIONS_DELETE_USER",
  OPTIONS_UPDATE_ROLE: "OPTIONS_UPDATE_ROLE",
  OPTIONS_DELETE_ROLE: "OPTIONS_DELETE_ROLE",
  OPTIONS_VIEW_DEVICES: "OPTIONS_VIEW_DEVICES",
  OPTIONS_UPDATE_DEVICE: "OPTIONS_UPDATE_DEVICE",
  OPTIONS_DELETE_DEVICE: "OPTIONS_DELETE_DEVICE",
} as const;

export type CommonDevice = Blind | Thermometer;

export type DeviceStatus = "online" | "offline";

export type DeviceType = "BLIND" | "THERMOMETER";

export type Permission = keyof typeof permissionsList;

export type RoomType =
  | "BEDROOM"
  | "KITCHEN"
  | "BACKYARD"
  | "BATHROOM"
  | "LIVINGROOM";

export type Role = {
  id: string;
  name: string;
  permissions: {
    id?: string;
    roleId?: string;
    permission: Permission;
  }[];
};

export type Blind = {
  id: string;
  name: string;
  value: number;
  type: "BLIND";
  createdAt: Date;
  updatedAt: Date;
  deviceId: string;
  status: DeviceStatus;
};

export type ThermometerData = {
  id: string;
  date: Date;
  battery: number;
  createdAt: Date;
  updatedAt: Date;
  humidity: number;
  deviceId: string;
  temperature: number;
};

export type User = {
  id: string;
  role: Role;
  name: string;
  email: string;
  roleId: string;
  surname: string;
  createdAt: Date;
  updatedAt: Date;
  isVerified: boolean;
};

export type Thermometer = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deviceId: string;
  type: "THERMOMETER";
  status: DeviceStatus;
  data: ThermometerData[];
};

export type Room = {
  id: string;
  name: string;
  roomType: RoomType;
  blinds?: {
    blind: Blind;
    roomId: string;
    blindId: string;
  }[];
  thermometers?: {
    roomId: string;
    thermometerId: string;
    thermometer: Thermometer;
  }[];
};
