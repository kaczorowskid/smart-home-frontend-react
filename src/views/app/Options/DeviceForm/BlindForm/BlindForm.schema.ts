import { z } from "zod";
import { schema } from "@/schemas/form.schemas";

export const formFields = {
  name: "name",
  type: "type",
  deviceId: "deviceId",
} as const;

export const formSchema = z.object({
  [formFields.name]: schema.name,
  [formFields.type]: z.enum(["BLIND"]),
  [formFields.deviceId]: schema.deviceId,
});

export type FormSchema = z.infer<typeof formSchema>;
