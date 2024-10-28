import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useCreateDevice,
  useDeleteDevice,
  useUpdateDevice,
} from "../DeviceForm.hooks";
import { BlindFormProps } from "./BlindForm.types";
import { formFields, formSchema, FormSchema } from "./BlindForm.schema";
import { defaultValues } from "./BlindForm.utils";
import { ControlButtons } from "../../../../../components/app/ControlButtons";

export const BlindForm = ({
  selectedId,
  onClose,
  deviceId,
  name,
}: BlindFormProps) => {
  const { mutateAsync: createBlind, isPending: isCreatePending } =
    useCreateDevice();
  const { mutateAsync: updateBlind, isPending: isUpdatePending } =
    useUpdateDevice();
  const { mutate: deleteBlind, isPending: isDeletePending } = useDeleteDevice();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
    values: {
      deviceId: deviceId || "",
      name: name || "",
      type: "BLIND",
    },
  });

  const handleCloseForm = () => {
    onClose();
    form.reset(defaultValues);
  };

  const onSubmit = async (values: FormSchema) => {
    if (!!selectedId) {
      await updateBlind({
        ...values,
        id: selectedId,
        type: "BLIND",
      });
    } else {
      await createBlind({
        ...values,
        type: "BLIND",
      });
    }

    handleCloseForm();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  const handleDeleteDevice = () => {
    deleteBlind({ id: selectedId, type: "BLIND" });
    handleCloseForm();
  };

  return (
    <Form {...form}>
      <FormField
        label="Name"
        control={form.control}
        name={formFields.name}
        component={(field) => <Input {...field} />}
      />
      <FormField
        label="Device ID"
        control={form.control}
        name={formFields.deviceId}
        component={(field) => <Input {...field} />}
      />

      <ControlButtons
        entity="blind"
        isCreate={!selectedId}
        onCreate={handleSave}
        onUpdate={handleSave}
        onDelete={handleDeleteDevice}
        isCreatePending={isCreatePending}
        isUpdatePending={isUpdatePending}
        isDeletePending={isDeletePending}
      />
    </Form>
  );
};
