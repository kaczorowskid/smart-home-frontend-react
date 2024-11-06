import { schema } from "@/schemas/form.schemas";
import { z } from "zod";

export const formFields = {
  name: "name",
  surname: "surname",
  email: "email",
  password: "password",
  confirmPassword: "confirmPassword",
} as const;

export const formSchema = z
  .object({
    [formFields.name]: schema.name,
    [formFields.surname]: schema.name,
    [formFields.email]: schema.email,
    [formFields.password]: schema.password,
    [formFields.confirmPassword]: schema.password,
  })
  .refine(
    (data) => data[formFields.password] === data[formFields.confirmPassword],
    {
      path: [formFields.confirmPassword],
      message: "Wrong password",
    }
  );

export type FormSchema = z.infer<typeof formSchema>;
