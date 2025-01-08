import { z } from "zod";
import { schema } from "@/schemas/form.schemas";

export const formFields = {
  name: "name",
  type: "type",
  deviceId: "deviceId",
} as const;

export const formSchema = z.object({
  [formFields.name]: schema.name,
  [formFields.deviceId]: schema.deviceId,
  [formFields.type]: z.enum(["THERMOMETER"]),
});

export type FormSchema = z.infer<typeof formSchema>;
