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
    [formFields.name]: z.string().min(3).max(50),
    [formFields.surname]: z.string().min(3).max(50),
    [formFields.email]: z.string().email(),
    [formFields.password]: z.string().min(2).max(50),
    [formFields.confirmPassword]: z.string().min(2).max(50),
  })
  .refine(
    (data) => data[formFields.password] === data[formFields.confirmPassword],
    {
      path: [formFields.confirmPassword],
      message: "Wrong password",
    }
  );

export const defaultValues = {
  [formFields.name]: "",
  [formFields.surname]: "",
  [formFields.email]: "",
  [formFields.password]: "",
  [formFields.confirmPassword]: "",
};

export type FormSchema = z.infer<typeof formSchema>;
