import { useIntl } from "react-intl";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/common/FormField";
import { permissionsList } from "@/api/types/common.types";
import { usePermissions } from "@/hooks/usePermissions.hook";
import { ControlButtons } from "@/components/app/ControlButtons";
import {
  useCreateDevice,
  useDeleteDevice,
  useUpdateDevice,
} from "@/api/hooks/devices.hooks";
import { type BlindFormProps } from "./BlindForm.types";
import { formFields, formSchema, type FormSchema } from "./BlindForm.schema";
import {
  defaultValues,
  mapValuesToCreateForm,
  mapValuesToUpdateForm,
} from "./BlindForm.utils";

export const BlindForm = ({
  name,
  onClose,
  deviceId,
  selectedId,
}: BlindFormProps) => {
  const { formatMessage } = useIntl();

  const { mutateAsync: createBlind, isPending: isCreatePending } =
    useCreateDevice();
  const { mutateAsync: updateBlind, isPending: isUpdatePending } =
    useUpdateDevice();
  const { mutateAsync: deleteBlind, isPending: isDeletePending } =
    useDeleteDevice();

  const hasCreateDevicePermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_ADD_DEVICE,
  ]);
  const hasUpdateDevicePermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_UPDATE_DEVICE,
  ]);
  const hasDeleteDevicePermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_DELETE_DEVICE,
  ]);

  const form = useForm<FormSchema>({
    defaultValues: defaultValues,
    resolver: zodResolver(formSchema),
    values: {
      type: "BLIND",
      name: name || "",
      deviceId: deviceId || "",
    },
  });

  const handleCloseForm = () => {
    onClose();
    form.reset(defaultValues);
  };

  const onSubmit = async (values: FormSchema) => {
    if (selectedId) {
      await updateBlind(mapValuesToUpdateForm(values, selectedId));
    } else {
      await createBlind(mapValuesToCreateForm(values));
    }

    handleCloseForm();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  const handleDeleteDevice = async () => {
    await deleteBlind({ type: "BLIND", id: selectedId });
    handleCloseForm();
  };

  // PLACEHOLDER VIEW
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name={formFields.name}
        component={(field) => <Input {...field} />}
        label={formatMessage({ id: "formField.name" })}
      />
      <FormField
        control={form.control}
        name={formFields.deviceId}
        component={(field) => <Input {...field} />}
        label={formatMessage({ id: "formField.device-id" })}
      />

      <ControlButtons
        entity={name || ""}
        onCreate={handleSave}
        onUpdate={handleSave}
        isCreate={!selectedId}
        onDelete={handleDeleteDevice}
        isCreatePending={isCreatePending}
        isUpdatePending={isUpdatePending}
        isDeletePending={isDeletePending}
        isCreateDisabled={!hasCreateDevicePermission}
        isUpdateDisabled={!hasUpdateDevicePermission}
        isDeleteDisabled={!hasDeleteDevicePermission}
      />
    </Form>
  );
};
