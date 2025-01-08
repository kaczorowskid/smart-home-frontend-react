import { z } from "zod";
import { schema } from "@/schemas/form.schemas";

export const formFields = {
  name: "name",
  email: "email",
  surname: "surname",
  password: "password",
  confirmPassword: "confirmPassword",
} as const;

export const formSchema = z
  .object({
    [formFields.name]: schema.name,
    [formFields.email]: schema.email,
    [formFields.surname]: schema.name,
    [formFields.password]: schema.password,
    [formFields.confirmPassword]: schema.password,
  })
  .refine(
    (data) => data[formFields.password] === data[formFields.confirmPassword],
    {
      message: "Wrong password",
      path: [formFields.confirmPassword],
    }
  );

export type FormSchema = z.infer<typeof formSchema>;
