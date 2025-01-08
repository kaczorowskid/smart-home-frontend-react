import { User } from "lucide-react";
import { useIntl } from "react-intl";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/common/Dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTitle } from "@/components/app/FormTitle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FormField } from "@/components/common/FormField";
import { permissionsList } from "@/api/types/common.types";
import { type CommonFormProps } from "@/types/common.types";
import { usePermissions } from "@/hooks/usePermissions.hook";
import { SelectedItems } from "@/components/app/SelectedItems";
import { ControlButtons } from "@/components/app/ControlButtons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  useCreateRole,
  useDeleteRole,
  useGetOneRole,
  useUpdateRole,
  useGetAllPermissions,
} from "@/api/hooks/role.hooks";
import { formFields, formSchema, type FormSchema } from "./RolesForm.schema";
import {
  defaultValues,
  initialValues,
  mapValuesToCreateForm,
  mapValuesToUpdateForm,
  mapPermissionsDataToCheckboxData,
} from "./RolesForm.utils";

export const RolesForm = ({ open, onClose, selectedId }: CommonFormProps) => {
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
      open={open || !!selectedId}
      className="w-[90%] lg:w-full"
      title={
        <FormTitle icon={User} title={formatMessage({ id: "view.roles" })} />
      }
      onOpenChange={(status) => {
        if (!status) {
          handleCloseForm();
        }
      }}
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name={formFields.name}
          component={(field) => <Input {...field} />}
          label={formatMessage({ id: "formField.name" })}
        />
        <Popover>
          <PopoverTrigger asChild className="mt-4">
            <SelectedItems
              items={permissionsCheckboxData}
              selectedIds={form.watch()["permissions"]}
              label={formatMessage({ id: "formField.permissions" })}
              noSelectedItemsText={formatMessage({
                id: "view.permissions-no-selected",
              })}
            />
          </PopoverTrigger>
          <PopoverContent>
            <ScrollArea className="h-[200px]">
              {permissionsCheckboxData?.map((permission) => (
                <FormField
                  reverseLabel
                  key={permission.id}
                  control={form.control}
                  label={permission.label}
                  formItemKey={permission.id}
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
          onCreate={handleSave}
          onUpdate={handleSave}
          isCreate={!selectedId}
          entity={data?.name || ""}
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
