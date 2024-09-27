import { z } from "zod";

export const formFields = {
  email: "email",
  password: "password",
} as const;

export const formSchema = z.object({
  [formFields.email]: z.string().email(),
  [formFields.password]: z.string().min(2).max(50),
});

export const defaultValues = {
  [formFields.email]: "",
  [formFields.password]: "",
};

export type FormSchema = z.infer<typeof formSchema>;
