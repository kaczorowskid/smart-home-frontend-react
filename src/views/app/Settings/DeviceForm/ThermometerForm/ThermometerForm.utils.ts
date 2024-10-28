import { formFields, FormSchema } from "./ThermometerForm.schema";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.deviceId]: "",
  [formFields.type]: "THERMOMETER",
};
