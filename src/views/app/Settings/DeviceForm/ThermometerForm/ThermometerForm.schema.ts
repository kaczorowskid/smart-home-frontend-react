import { schema } from "@/schemas/form.schemas";
import { z } from "zod";

export const formFields = {
  name: "name",
  deviceId: "deviceId",
  type: "type",
} as const;

export const formSchema = z.object({
  [formFields.name]: schema.name,
  [formFields.deviceId]: schema.deviceId,
  [formFields.type]: z.enum(["THERMOMETER"]),
});

export type FormSchema = z.infer<typeof formSchema>;
