import { z } from "zod";
import { schema } from "@/schemas/form.schemas";

export const formFields = {
  name: "name",
  permissions: "permissions",
} as const;

export const formSchema = z.object({
  [formFields.name]: schema.name,
  [formFields.permissions]: schema.permissions,
});

export type FormSchema = z.infer<typeof formSchema>;
