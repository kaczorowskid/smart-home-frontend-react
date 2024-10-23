import {
  CreateUserByAdminPayload,
  UpdateUserPayload,
} from "@/api/types/user.types";
import { formFields, FormSchema } from "./UserForm.schema";
import { User } from "@/api/types/common.types";

export const defaultValues: FormSchema = {
  [formFields.role]: "USER",
  [formFields.name]: undefined,
  [formFields.surname]: undefined,
  [formFields.email]: "",
};

export const initialValues = (
  data: User | undefined
): FormSchema | undefined => {
  if (!data) {
    return;
  }

  return {
    name: data.name,
    surname: data.surname,
    role: data.role,
    email: data.email,
  };
};

export const mapValuesToCreateForm = (
  values: FormSchema
): CreateUserByAdminPayload => {
  return {
    email: values["email"],
    role: values["role"],
  };
};

export const mapValuesToUpdateForm = (
  values: FormSchema
): Omit<UpdateUserPayload, "id"> => ({
  name: values["name"] || "",
  surname: values["surname"] || "",
  role: values["role"],
});
