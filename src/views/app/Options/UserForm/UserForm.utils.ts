import { type Role, type User } from "@/api/types/common.types";
import {
  type UpdateUserPayload,
  type CreateUserByAdminPayload,
} from "@/api/types/user.types";
import { formFields, type FormSchema } from "./UserForm.schema";

export const defaultValues: FormSchema = {
  [formFields.email]: "",
  [formFields.roleId]: "",
  [formFields.name]: undefined,
  [formFields.surname]: undefined,
};

export const initialValues = (
  data: User | undefined
): undefined | FormSchema => {
  if (!data) {
    return;
  }

  return {
    name: data.name,
    email: data.email,
    roleId: data.roleId,
    surname: data.surname,
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
  roleId: values["roleId"],
  name: values["name"] || "",
  surname: values["surname"] || "",
});

export const mapRolesForSelect = (role: Role[] | undefined) => {
  return role?.map(({ id, name }) => ({
    name,
    value: id,
  }));
};
