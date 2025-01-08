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
import { type ThermometerFormProps } from "./ThermometerForm.types";
import {
  formFields,
  formSchema,
  type FormSchema,
} from "./ThermometerForm.schema";
import {
  defaultValues,
  mapValuesToCreateForm,
  mapValuesToUpdateForm,
} from "./ThermometerForm.utils";

export const ThermometerForm = ({
  name,
  onClose,
  deviceId,
  selectedId,
}: ThermometerFormProps) => {
  const { formatMessage } = useIntl();

  const { isPending: isCreatePending, mutateAsync: createThermometer } =
    useCreateDevice();
  const { isPending: isUpdatePending, mutateAsync: updateThermometer } =
    useUpdateDevice();
  const { isPending: isDeletePending, mutateAsync: deleteThermometer } =
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
      name: name || "",
      type: "THERMOMETER",
      deviceId: deviceId || "",
    },
  });

  const handleCloseForm = () => {
    onClose();
    form.reset(defaultValues);
  };

  const onSubmit = async (values: FormSchema) => {
    if (selectedId) {
      await updateThermometer(mapValuesToUpdateForm(values, selectedId));
    } else {
      await createThermometer(mapValuesToCreateForm(values));
    }

    handleCloseForm();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  const handleDeleteDevice = async () => {
    await deleteThermometer({ id: selectedId, type: "THERMOMETER" });
    handleCloseForm();
  };

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
