import { z } from "zod";

export const formFields = {
  role: "role",
  name: "name",
  surname: "surname",
  email: "email",
} as const;

export const formSchema = z.object({
  [formFields.role]: z.enum(["USER", "ADMIN"]),
  [formFields.name]: z.string().min(3).max(40).optional(),
  [formFields.surname]: z.string().min(3).max(40).optional(),
  [formFields.email]: z.string().email(),
});

export type FormSchema = z.infer<typeof formSchema>;
