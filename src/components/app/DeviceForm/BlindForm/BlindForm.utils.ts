import { formFields, FormSchema } from "./BlindForm.schema";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.deviceId]: "",
  [formFields.type]: "BLIND",
};
