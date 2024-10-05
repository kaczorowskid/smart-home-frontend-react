import { User } from "@/api/types/common.types";
import { formFields, FormSchema } from "./RegisterForm.schema";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.surname]: "",
  [formFields.email]: "",
  [formFields.password]: "",
  [formFields.confirmPassword]: "",
};

export const initialValues = (data: User | undefined): FormSchema => ({
  name: data?.name ?? "",
  surname: data?.surname ?? "",
  email: data?.email ?? "",
  password: "",
  confirmPassword: "",
});
