import { type User } from "@/api/types/common.types";
import { formFields, type FormSchema } from "./Register.schema";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.email]: "",
  [formFields.surname]: "",
  [formFields.password]: "",
  [formFields.confirmPassword]: "",
};

export const initialValues = (data: User | undefined): FormSchema => ({
  password: "",
  confirmPassword: "",
  name: data?.name ?? "",
  email: data?.email ?? "",
  surname: data?.surname ?? "",
});
