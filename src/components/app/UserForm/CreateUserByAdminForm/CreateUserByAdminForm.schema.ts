import { z } from "zod";

export const formFields = {
  role: "role",
  email: "email",
} as const;

export const formSchema = z.object({
  [formFields.role]: z.enum(["USER", "ADMIN"]),
  [formFields.email]: z.string().email(),
});

export const defaultValues = {
  [formFields.role]: "",
  [formFields.email]: "",
};

export type FormSchema = z.infer<typeof formSchema>;
