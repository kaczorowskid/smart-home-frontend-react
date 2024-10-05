import { schema } from "@/schemas/form.schemas";
import { z } from "zod";

export const formFields = {
  role: "role",
  name: "name",
  surname: "surname",
  email: "email",
} as const;

export const formSchema = z.object({
  [formFields.role]: schema.userRoles,
  [formFields.name]: schema.name.optional(),
  [formFields.surname]: schema.name.optional(),
  [formFields.email]: schema.email,
});

export type FormSchema = z.infer<typeof formSchema>;
