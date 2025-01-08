import { z } from "zod";
import { schema } from "@/schemas/form.schemas";

export const formFields = {
  name: "name",
  blind: "blind",
  roomType: "roomType",
  thermometer: "thermometer",
} as const;

export const formSchema = z.object({
  [formFields.name]: schema.name,
  [formFields.roomType]: schema.roomType,
  [formFields.blind]: z.array(z.string()),
  [formFields.thermometer]: z.array(z.string()),
});

export type FormSchema = z.infer<typeof formSchema>;
