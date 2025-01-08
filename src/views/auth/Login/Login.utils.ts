import { formFields, type FormSchema } from "./Login.schema";

export const defaultValues: FormSchema = {
  [formFields.email]: "",
  [formFields.password]: "",
};
