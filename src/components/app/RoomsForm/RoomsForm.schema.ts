import { schema } from "@/schemas/form.schemas";
import { z } from "zod";

export const formFields = {
  name: "name",
  thermometer: "thermometer",
  blind: "blind",
} as const;

export const formSchema = z.object({
  [formFields.name]: schema.name,
  [formFields.thermometer]: z.array(z.string()),
  [formFields.blind]: z.array(z.string()),
});

export type FormSchema = z.infer<typeof formSchema>;
