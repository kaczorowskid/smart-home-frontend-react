import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "@/components/common/Select";
import { Dialog } from "@/components/common/Dialog";
import { Button } from "@/components/common/Button";
import { UpdateUserFormProps } from "./UpdateUserForm.types";
import { formFields, formSchema, FormSchema } from "./UpdateUserForm.schema";
import { roleItems } from "../common/UserForms.consts";
import {
  useDeleteUser,
  useGetOneUser,
  useUpdateUser,
} from "./UpdateUserForm.hooks";
import { AlertDialog } from "@/components/common/AlertDialog";

export const UpdateUserForm = ({
  selectedEmail,
  open,
  onClose,
}: UpdateUserFormProps) => {
  const { data } = useGetOneUser({ email: selectedEmail || "" });

  const { mutateAsync: updateUser, isPending } = useUpdateUser();
  const { mutate: deleteUser } = useDeleteUser();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    values: data && {
      name: data.name,
      surname: data.surname,
      email: data.email,
      role: data.role,
    },
  });

  const onSubmit = async (values: FormSchema) => {
    await updateUser({
      id: data?.id || "",
      ...values,
    });
    form.reset();
    onClose();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  //TODO: Change email to id
  const handleDeleteUser = () => {
    deleteUser({ id: data?.id || "" });
    onClose();
  };

  return (
    <Dialog
      title="Update user"
      open={open}
      onOpenChange={(status) => {
        if (!status) {
          onClose();
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
        <FormField
          label="Email"
          control={form.control}
          name={formFields.email}
          component={(field) => <Input {...field} disabled />}
        />

        <div className="flex flex-row-reverse pt-5 gap-5">
          <Button onClick={handleSave} isLoading={isPending}>
            Update user
          </Button>
          <AlertDialog
            title="Are you sure?"
            onOk={handleDeleteUser}
            description={`Delete user ${data?.email}`}
            trigger={
              <Button variant="destructive" isLoading={isPending}>
                Delete user
              </Button>
            }
          />
        </div>
      </Form>
    </Dialog>
  );
};
