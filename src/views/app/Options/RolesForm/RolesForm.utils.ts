import { Permission, Role } from "@/api/types/common.types";
import { formFields, FormSchema } from "./RolesForm.schema";
import { CreateRolePayload, UpdateRolePayload } from "@/api/types/role.types";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.permissions]: [],
};

export const initialValues = (
  data: Role | undefined
): FormSchema | undefined => {
  if (!data) {
    return;
  }

  return {
    name: data.name,
    permissions: data.permissions?.map(({ permission }) => permission),
  };
};

export const mapPermissionsDataToCheckboxData = (permission?: Permission[]) =>
  permission?.map((item) => ({ id: item, label: item }));

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
