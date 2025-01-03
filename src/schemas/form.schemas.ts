import { z } from "zod";

export const schema = {
  name: z.string().min(3).max(50),
  deviceId: z.string().min(1).max(3),
  email: z.string().email(),
  password: z.string().min(3).max(50),
  deviceTypes: z.enum(["THERMOMETER", "BLIND"]),
  roleId: z.string().uuid(),
  roomType: z.enum([
    "BACKYARD",
    "BATHROOM",
    "BEDROOM",
    "KITCHEN",
    "LIVINGROOM",
  ]),
  permissions: z.array(z.string()),
};
