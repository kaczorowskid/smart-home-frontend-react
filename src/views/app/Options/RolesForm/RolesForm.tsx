import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog } from "@/components/common/Dialog";
import { FormTitle } from "@/components/app/FormTitle";
import { User } from "lucide-react";
import { ControlButtons } from "@/components/app/ControlButtons";
import { useIntl } from "react-intl";
import { RolesFormProps } from "./RolesForm.types";
import { formFields, formSchema, FormSchema } from "./RolesForm.schema";
import {
  defaultValues,
  initialValues,
  mapPermissionsDataToCheckboxData,
  mapValuesToCreateForm,
  mapValuesToUpdateForm,
} from "./RolesForm.utils";
import {
  useCreateRole,
  useDeleteRole,
  useGetAllPermissions,
  useGetOneRole,
  useUpdateRole,
} from "@/api/hooks/role.hooks";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectedItems } from "@/components/app/SelectedItems";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePermissions } from "@/hooks/usePermissions.hook";
import { permissionsList } from "@/api/types/common.types";

export const RolesForm = ({ selectedId, open, onClose }: RolesFormProps) => {
  const { formatMessage } = useIntl();
  const { data } = useGetOneRole({ id: selectedId || "" });
  const { data: allPermissionsData } = useGetAllPermissions();

  const permissionsCheckboxData =
    mapPermissionsDataToCheckboxData(allPermissionsData);

  const { mutateAsync: createRole, isPending: isCreatePending } =
    useCreateRole();
  const { mutateAsync: updateRole, isPending: isUpdatePending } =
    useUpdateRole();
  const { mutateAsync: deleteRole, isPending: isDeletePending } =
    useDeleteRole();

  const hasCreateRolePermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_ADD_ROLE,
  ]);
  const hasUpdateRolePermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_UPDATE_ROLE,
  ]);
  const hasDeleteRolePermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_DELETE_ROLE,
  ]);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    values: (() => {
      if (!data) {
        return defaultValues;
      }

      return initialValues(data);
    })(),
  });

  const handleCloseForm = () => {
    onClose();
    form.reset(defaultValues);
  };

  const onSubmit = async (values: FormSchema) => {
    if (selectedId) {
      await updateRole(mapValuesToUpdateForm(values, data?.id));
    } else {
      await createRole(mapValuesToCreateForm(values));
    }

    handleCloseForm();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  const handleDeleteUser = async () => {
    await deleteRole({ id: data?.id || "" });
    handleCloseForm();
  };

  return (
    <Dialog
      className="w-[90%] lg:w-full"
      title={
        <FormTitle title={formatMessage({ id: "view.roles" })} icon={User} />
      }
      open={open || !!selectedId}
      onOpenChange={(status) => {
        if (!status) {
          handleCloseForm();
        }
      }}
    >
      <Form {...form}>
        <FormField
          label={formatMessage({ id: "formField.name" })}
          control={form.control}
          name={formFields.name}
          component={(field) => <Input {...field} />}
        />
        <Popover>
          <PopoverTrigger className="mt-4" asChild>
            <SelectedItems
              label={formatMessage({ id: "formField.permissions" })}
              noSelectedItemsText={formatMessage({
                id: "view.permissions-no-selected",
              })}
              items={permissionsCheckboxData}
              selectedIds={form.watch()["permissions"]}
            />
          </PopoverTrigger>
          <PopoverContent>
            <ScrollArea className="h-[200px]">
              {permissionsCheckboxData?.map((permission) => (
                <FormField
                  reverseLabel
                  label={permission.label}
                  key={permission.id}
                  formItemKey={permission.id}
                  control={form.control}
                  name={formFields.permissions}
                  component={({ value, onChange, ...field }) => (
                    <Checkbox
                      className="mr-4"
                      checked={value?.includes(permission.id)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? onChange([...value, permission.id])
                          : onChange(
                              (value as string[]).filter(
                                (value) => value !== permission.id
                              )
                            );
                      }}
                      {...field}
                    />
                  )}
                />
              ))}
            </ScrollArea>
          </PopoverContent>
        </Popover>
        <ControlButtons
          entity={data?.name || ""}
          isCreate={!selectedId}
          onCreate={handleSave}
          onUpdate={handleSave}
          onDelete={handleDeleteUser}
          isCreatePending={isCreatePending}
          isUpdatePending={isUpdatePending}
          isDeletePending={isDeletePending}
          isCreateDisabled={!hasCreateRolePermission}
          isUpdateDisabled={!hasUpdateRolePermission}
          isDeleteDisabled={!hasDeleteRolePermission}
        />
      </Form>
    </Dialog>
  );
};
