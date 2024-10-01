import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "@/components/common/Select";
import { Dialog } from "@/components/common/Dialog";
import { CreateUserByAdminFormProps } from "./CreateUserByAdminForm.types";
import {
  formFields,
  formSchema,
  FormSchema,
} from "./CreateUserByAdminForm.schema";
import { useCreateUserByAdmin } from "./CreateUserByAdminForm.hooks";
import { Button } from "@/components/common/Button";
import { roleItems } from "../common/UserForms.consts";

export const CreateUserByAdminForm = ({
  open,
  onClose,
}: CreateUserByAdminFormProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const { mutateAsync: createUserByAdmin, isPending } = useCreateUserByAdmin();

  const onSubmit = async (values: FormSchema) => {
    await createUserByAdmin(values);
    form.reset();
    onClose();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <Dialog
      title="Add user"
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
          label="Email"
          control={form.control}
          name={formFields.email}
          component={(field) => <Input {...field} />}
        />

        <Button className="mt-5" onClick={handleSave} isLoading={isPending}>
          Create User
        </Button>
      </Form>
    </Dialog>
  );
};
