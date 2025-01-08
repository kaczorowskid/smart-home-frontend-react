import { User } from "lucide-react";
import { useIntl } from "react-intl";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/common/Select";
import { Dialog } from "@/components/common/Dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTitle } from "@/components/app/FormTitle";
import { useGetAllRoles } from "@/api/hooks/role.hooks";
import { FormField } from "@/components/common/FormField";
import { permissionsList } from "@/api/types/common.types";
import { type CommonFormProps } from "@/types/common.types";
import { usePermissions } from "@/hooks/usePermissions.hook";
import { ControlButtons } from "@/components/app/ControlButtons";
import {
  useDeleteUser,
  useGetOneUser,
  useUpdateUser,
  useCreateUserByAdmin,
} from "@/api/hooks/user.hooks";
import { formFields, formSchema, type FormSchema } from "./UserForm.schema";
import {
  defaultValues,
  initialValues,
  mapRolesForSelect,
  mapValuesToCreateForm,
  mapValuesToUpdateForm,
} from "./UserForm.utils";

export const UserForm = ({ open, onClose, selectedId }: CommonFormProps) => {
  const { formatMessage } = useIntl();
  const { data } = useGetOneUser({ id: selectedId || "" });
  const { data: allRoles } = useGetAllRoles();

  const { isPending: isCreatePending, mutateAsync: createUserByAdmin } =
    useCreateUserByAdmin();
  const { mutateAsync: updateUser, isPending: isUpdatePending } =
    useUpdateUser();
  const { mutateAsync: deleteUser, isPending: isDeletePending } =
    useDeleteUser();

  const hasCreateUserPermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_ADD_USER,
  ]);
  const hasUpdateUserPermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_UPDATE_USER,
  ]);
  const hasDeleteUserPermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_DELETE_USER,
  ]);
  const canChangeRole = usePermissions([permissionsList.IS_ADMIN]);

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
      await updateUser(mapValuesToUpdateForm(values, data?.id));
    } else {
      await createUserByAdmin(mapValuesToCreateForm(values));
    }

    handleCloseForm();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  const handleDeleteUser = async () => {
    await deleteUser({ id: data?.id || "" });
    handleCloseForm();
  };

  return (
    <Dialog
      open={open || !!selectedId}
      className="w-[90%] lg:w-full"
      title={
        <FormTitle icon={User} title={formatMessage({ id: "view.user" })} />
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
          name={formFields.roleId}
          label={formatMessage({ id: "formField.user-role" })}
          component={({ onChange, ...field }) => (
            <Select
              onValueChange={onChange}
              disabled={!canChangeRole}
              items={mapRolesForSelect(allRoles) || []}
              {...field}
            />
          )}
        />
        {!!selectedId && (
          <>
            <FormField
              control={form.control}
              name={formFields.name}
              component={(field) => <Input {...field} />}
              label={formatMessage({ id: "formField.user-name" })}
            />
            <FormField
              control={form.control}
              name={formFields.surname}
              component={(field) => <Input {...field} />}
              label={formatMessage({ id: "formField.user-surname" })}
            />
          </>
        )}
        <FormField
          control={form.control}
          name={formFields.email}
          label={formatMessage({ id: "formField.email" })}
          component={(field) => <Input {...field} disabled={!!selectedId} />}
        />
        <ControlButtons
          onCreate={handleSave}
          onUpdate={handleSave}
          isCreate={!selectedId}
          entity={data?.email || ""}
          onDelete={handleDeleteUser}
          isCreatePending={isCreatePending}
          isUpdatePending={isUpdatePending}
          isDeletePending={isDeletePending}
          isCreateDisabled={!hasCreateUserPermission}
          isUpdateDisabled={!hasUpdateUserPermission}
          isDeleteDisabled={!hasDeleteUserPermission}
        />
      </Form>
    </Dialog>
  );
};
