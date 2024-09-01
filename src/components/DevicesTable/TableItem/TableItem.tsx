import { useForm } from "react-hook-form";
import { formFields, formSchema, FormSchema } from "./TableItem.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useCreateDevice,
  useDeleteDevice,
  useUpdateDevice,
} from "./TableItem.hooks";
import { FormField } from "@/components/common/FormField";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/common/Select";
import { typeItems } from "./TableItem.const";
import { Form } from "@/components/ui/form";
import { AccordionContent } from "@/components/ui/accordion";
import { TableItemProps } from "./TableItem.types";
import { useEffect, useState } from "react";
import { ActionButtons } from "./ActionButtons";
import { DeviceType } from "@/api/types/common.types";

export const TableItem = ({
  id,
  name,
  type,
  deviceId,
  selectedValue,
  setSelectedValue,
  isDashboardPart,
}: TableItemProps) => {
  const [isLocked, setIsLocked] = useState(true);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    values: {
      name: name || "",
      type: type || "THERMOMETER",
      deviceId: deviceId || "",
    },
  });

  const { mutate: createDevice, isPending: isPendingCreateDevice } =
    useCreateDevice();
  const { mutate: updateDevice, isPending: isPendingUpdateDevice } =
    useUpdateDevice();
  const { mutate: deleteDevice, isPending: isPendingDeleteDevice } =
    useDeleteDevice();

  const onSubmit = async (values: FormSchema) => {
    if (id) {
      updateDevice({ id, ...values });
    } else {
      createDevice(values);
    }

    handleResetEditMode();
    setSelectedValue("");
  };

  const handleSetEditMode = () => {
    setIsLocked(false);
  };

  const handleResetEditMode = () => {
    setIsLocked(true);
    form.reset();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  const handleDelete = () => {
    deleteDevice({ id: id || "", type: type as DeviceType });
  };

  useEffect(() => {
    if (selectedValue !== id) {
      handleResetEditMode();
    }
  }, [selectedValue]);

  return (
    <AccordionContent>
      <Form {...form}>
        <FormField
          label="Name"
          control={form.control}
          name={formFields.name}
          component={(field) => <Input disabled={isLocked} {...field} />}
        />
        <FormField
          label="Device ID"
          control={form.control}
          name={formFields.deviceId}
          component={(field) => <Input disabled={isLocked} {...field} />}
        />
        <FormField
          label="Device Type"
          control={form.control}
          name={formFields.type}
          component={({ onChange, ...field }) => (
            <Select
              disabled={isLocked}
              items={typeItems}
              onValueChange={onChange}
              {...field}
            />
          )}
        />
      </Form>
      <ActionButtons
        isLocked={isLocked}
        isExistingRecord={!!id}
        handleSave={handleSave}
        handleDelete={handleDelete}
        handleSetEditMode={handleSetEditMode}
        handleResetEditMode={handleResetEditMode}
        isDashboardPart={isDashboardPart}
        isDeleting={isPendingDeleteDevice}
        isLoading={isPendingCreateDevice || isPendingUpdateDevice}
      />
    </AccordionContent>
  );
};
