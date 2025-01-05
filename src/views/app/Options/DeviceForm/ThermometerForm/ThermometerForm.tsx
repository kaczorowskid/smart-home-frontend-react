import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formFields, formSchema, FormSchema } from "./ThermometerForm.schema";
import { ControlButtons } from "@/components/app/ControlButtons";
import {
  defaultValues,
  mapValuesToCreateForm,
  mapValuesToUpdateForm,
} from "./ThermometerForm.utils";
import { ThermometerFormProps } from "./ThermometerForm.types";
import {
  useCreateDevice,
  useDeleteDevice,
  useUpdateDevice,
} from "@/api/hooks/devices.hooks";
import { useIntl } from "react-intl";
import { usePermissions } from "@/hooks/usePermissions.hook";
import { permissionsList } from "@/api/types/common.types";

export const ThermometerForm = ({
  selectedId,
  onClose,
  deviceId,
  name,
}: ThermometerFormProps) => {
  const { formatMessage } = useIntl();

  const { mutateAsync: createThermometer, isPending: isCreatePending } =
    useCreateDevice();
  const { mutateAsync: updateThermometer, isPending: isUpdatePending } =
    useUpdateDevice();
  const { mutateAsync: deleteThermometer, isPending: isDeletePending } =
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
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
    values: {
      deviceId: deviceId || "",
      name: name || "",
      type: "THERMOMETER",
    },
  });

  const handleCloseForm = () => {
    onClose();
    form.reset(defaultValues);
  };

  const onSubmit = async (values: FormSchema) => {
    if (!!selectedId) {
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
        label={formatMessage({ id: "formField.name" })}
        control={form.control}
        name={formFields.name}
        component={(field) => <Input {...field} />}
      />
      <FormField
        label={formatMessage({ id: "formField.device-id" })}
        control={form.control}
        name={formFields.deviceId}
        component={(field) => <Input {...field} />}
      />

      <ControlButtons
        entity={name || ""}
        isCreate={!selectedId}
        onCreate={handleSave}
        onUpdate={handleSave}
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
