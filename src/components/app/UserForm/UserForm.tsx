import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "@/components/common/Select";
import { Dialog } from "@/components/common/Dialog";
import { UserFormProps } from "./UserForm.types";
import {
  useCreateUserByAdmin,
  useDeleteUser,
  useGetOneUser,
  useUpdateUser,
} from "./UserForm.hooks";
import { formFields, formSchema, FormSchema } from "./UserForm.schema";
import { ControlButtons } from "./ControlButtons";
import {
  defaultValues,
  initialValues,
  mapValuesToCreateForm,
  mapValuesToUpdateForm,
} from "./UserForm.utils";
import { roleItems } from "./UserForm.consts";
import { FormTitle } from "../FormTitle";
import { User } from "lucide-react";

export const UserForm = ({ selectedEmail, open, onClose }: UserFormProps) => {
  const { data } = useGetOneUser({ email: selectedEmail || "" });

  const { mutateAsync: createUserByAdmin, isPending: isCreatePending } =
    useCreateUserByAdmin();
  const { mutateAsync: updateUser, isPending: isUpdatePending } =
    useUpdateUser();
  const { mutate: deleteUser, isPending: isDeletePending } = useDeleteUser();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
    values: initialValues(data),
  });

  const handleCloseForm = () => {
    onClose();
    form.reset(defaultValues);
  };

  const onSubmit = async (values: FormSchema) => {
    if (!!selectedEmail) {
      await updateUser({
        id: data?.id || "",
        ...mapValuesToUpdateForm(values),
      });
    } else {
      await createUserByAdmin(mapValuesToCreateForm(values));
    }
    handleCloseForm();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  const handleDeleteUser = () => {
    deleteUser({ id: data?.id || "" });
    handleCloseForm();
  };

  return (
    <Dialog
      title={<FormTitle title="User" icon={User} />}
      open={open || !!selectedEmail}
      onOpenChange={(status) => {
        if (!status) {
          handleCloseForm();
        }
      }}
    >
      <Form {...form}>
        <FormField
          label="User role"
          control={form.control}
          name={formFields.role}
          component={({ onChange, ...field }) => (
            <Select
              items={roleItems || []}
              onValueChange={onChange}
              {...field}
            />
          )}
        />
        {!!selectedEmail && (
          <>
            <FormField
              label="Name"
              control={form.control}
              name={formFields.name}
              component={(field) => <Input {...field} />}
            />
            <FormField
              label="Surname"
              control={form.control}
              name={formFields.surname}
              component={(field) => <Input {...field} />}
            />
          </>
        )}
        <FormField
          label="Email"
          control={form.control}
          name={formFields.email}
          component={(field) => <Input {...field} disabled={!!selectedEmail} />}
        />
        <ControlButtons
          email={data?.email || ""}
          isCreate={!selectedEmail}
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
