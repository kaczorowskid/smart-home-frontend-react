import { z } from "zod";

export const formFields = {
  name: "name",
  deviceId: "deviceId",
  type: "type",
} as const;

export const formSchema = z.object({
  [formFields.name]: z.string().min(2).max(50),
  [formFields.deviceId]: z.string().min(1).max(50),
  [formFields.type]: z.enum(["BLIND"]),
});

export type FormSchema = z.infer<typeof formSchema>;
