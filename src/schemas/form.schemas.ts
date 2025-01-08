import { z } from "zod";

export const schema = {
  email: z.string().email(),
  roleId: z.string().uuid(),
  name: z.string().min(3).max(50),
  deviceId: z.string().min(1).max(3),
  password: z.string().min(3).max(50),
  deviceTypes: z.enum(["THERMOMETER", "BLIND"]),
  roomType: z.enum([
    "BACKYARD",
    "BATHROOM",
    "BEDROOM",
    "KITCHEN",
    "LIVINGROOM",
  ]),
  permissions: z.array(
    z.enum([
      "IS_ADMIN",
      "DASHBOARD_VIEW",
      "GRAPHS_VIEW",
      "ROOMS_VIEW",
      "OPTIONS_VIEW",
      "OPTIONS_VIEW_DEVICES",
      "OPTIONS_ADD_DEVICE",
      "OPTIONS_UPDATE_DEVICE",
      "OPTIONS_DELETE_DEVICE",
      "OPTIONS_VIEW_ROOMS",
      "OPTIONS_ADD_ROOM",
      "OPTIONS_UPDATE_ROOM",
      "OPTIONS_DELETE_ROOM",
      "OPTIONS_VIEW_USERS",
      "OPTIONS_ADD_USER",
      "OPTIONS_UPDATE_USER",
      "OPTIONS_DELETE_USER",
      "OPTIONS_VIEW_ROLES",
      "OPTIONS_ADD_ROLE",
      "OPTIONS_UPDATE_ROLE",
      "OPTIONS_DELETE_ROLE",
      "SETTINGS_VIEW",
    ])
  ),
};
