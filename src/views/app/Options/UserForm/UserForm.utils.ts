import {
  CreateUserByAdminPayload,
  UpdateUserPayload,
} from "@/api/types/user.types";
import { formFields, FormSchema } from "./UserForm.schema";
import { Role, User } from "@/api/types/common.types";

export const defaultValues: FormSchema = {
  [formFields.roleId]: "",
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
    roleId: data.roleId,
    email: data.email,
  };
};

export const mapValuesToCreateForm = (
  values: FormSchema
): CreateUserByAdminPayload => ({
  ...values,
  email: values["email"],
  roleId: values["roleId"],
});

export const mapValuesToUpdateForm = (
  values: FormSchema,
  id: string | undefined
): UpdateUserPayload => ({
  ...values,
  id: id || "",
  name: values["name"] || "",
  surname: values["surname"] || "",
  roleId: values["roleId"],
});

export const mapRolesForSelect = (role: Role[] | undefined) => {
  return role?.map(({ id, name }) => ({
    name,
    value: id,
  }));
};
