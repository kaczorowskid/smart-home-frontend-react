import { formFields, FormSchema } from "./LoginForm.schema";

export const defaultValues: FormSchema = {
  [formFields.email]: "",
  [formFields.password]: "",
};
