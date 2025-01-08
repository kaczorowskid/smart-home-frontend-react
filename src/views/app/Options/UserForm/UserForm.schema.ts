import { z } from "zod";
import { schema } from "@/schemas/form.schemas";

export const formFields = {
  name: "name",
  email: "email",
  roleId: "roleId",
  surname: "surname",
} as const;

export const formSchema = z.object({
  [formFields.email]: schema.email,
  [formFields.roleId]: schema.roleId,
  [formFields.name]: schema.name.optional(),
  [formFields.surname]: schema.name.optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
