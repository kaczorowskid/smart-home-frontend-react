import { type Role, type Permission } from "@/api/types/common.types";
import {
  type CreateRolePayload,
  type UpdateRolePayload,
} from "@/api/types/role.types";
import { formFields, type FormSchema } from "./RolesForm.schema";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.permissions]: [],
};

export const initialValues = (
  data: Role | undefined
): undefined | FormSchema => {
  if (!data) {
    return;
  }

  return {
    name: data.name,
    permissions: data.permissions?.map(({ permission }) => permission),
  };
};

export const mapPermissionsDataToCheckboxData = (
  permission: undefined | Permission[]
) => permission?.map((item) => ({ id: item, label: item }));

export const mapValuesToCreateForm = (
  values: FormSchema
): CreateRolePayload => ({
  name: values["name"],
  permissions: values["permissions"],
});

export const mapValuesToUpdateForm = (
  values: FormSchema,
  id: string | undefined
): UpdateRolePayload => ({
  id: id || "",
  name: values["name"],
  permissions: values["permissions"],
});
