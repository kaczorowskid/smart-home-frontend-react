import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "@/components/common/Select";
import { Dialog } from "@/components/common/Dialog";
import { UserFormProps } from "./UserForm.types";
import { formFields, formSchema, FormSchema } from "./UserForm.schema";
import {
  defaultValues,
  initialValues,
  mapRolesForSelect,
  mapValuesToCreateForm,
  mapValuesToUpdateForm,
} from "./UserForm.utils";
import { FormTitle } from "@/components/app/FormTitle";
import { User } from "lucide-react";
import { ControlButtons } from "@/components/app/ControlButtons";
import {
  useCreateUserByAdmin,
  useDeleteUser,
  useGetOneUser,
  useUpdateUser,
} from "@/api/hooks/user.hooks";
import { useIntl } from "react-intl";
import { useGetAllRoles } from "@/api/hooks/role.hooks";

export const UserForm = ({ selectedId, open, onClose }: UserFormProps) => {
  const { formatMessage } = useIntl();
  const { data } = useGetOneUser({ id: selectedId || "" });
  const { data: allRoles } = useGetAllRoles();

  const { mutateAsync: createUserByAdmin, isPending: isCreatePending } =
    useCreateUserByAdmin();
  const { mutateAsync: updateUser, isPending: isUpdatePending } =
    useUpdateUser();
  const { mutateAsync: deleteUser, isPending: isDeletePending } =
    useDeleteUser();

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
      className="w-[90%] lg:w-full"
      title={
        <FormTitle title={formatMessage({ id: "view.user" })} icon={User} />
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
          label={formatMessage({ id: "formField.user-role" })}
          control={form.control}
          name={formFields.roleId}
          component={({ onChange, ...field }) => (
            <Select
              items={mapRolesForSelect(allRoles) || []}
              onValueChange={onChange}
              {...field}
            />
          )}
        />
        {!!selectedId && (
          <>
            <FormField
              label={formatMessage({ id: "formField.user-name" })}
              control={form.control}
              name={formFields.name}
              component={(field) => <Input {...field} />}
            />
            <FormField
              label={formatMessage({ id: "formField.user-surname" })}
              control={form.control}
              name={formFields.surname}
              component={(field) => <Input {...field} />}
            />
          </>
        )}
        <FormField
          label={formatMessage({ id: "formField.email" })}
          control={form.control}
          name={formFields.email}
          component={(field) => <Input {...field} disabled={!!selectedId} />}
        />
        <ControlButtons
          entity={data?.email || ""}
          isCreate={!selectedId}
          onCreate={handleSave}
          onUpdate={handleSave}
          onDelete={handleDeleteUser}
          isCreatePending={isCreatePending}
          isUpdatePending={isUpdatePending}
          isDeletePending={isDeletePending}
        />
      </Form>
    </Dialog>
  );
};
