import { schema } from "@/schemas/form.schemas";
import { z } from "zod";

export const formFields = {
  email: "email",
  password: "password",
} as const;

export const formSchema = z.object({
  [formFields.email]: schema.email,
  [formFields.password]: schema.password,
});

export type FormSchema = z.infer<typeof formSchema>;
