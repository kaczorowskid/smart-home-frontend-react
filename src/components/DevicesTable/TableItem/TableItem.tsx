import { useForm } from "react-hook-form";
import { formFields, formSchema, FormSchema } from "./TableItem.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateDevice, useUpdateDevice } from "./TableItem.hooks";
import { FormField } from "@/components/common/FormField/FormField";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/common/Select/Select";
import { typeItems } from "./TableItem.data";
import { Form } from "@/components/ui/form";
import { AccordionContent } from "@/components/ui/accordion";
import { TableItemProps } from "./TableItem.types";
import { useEffect, useState } from "react";
import { ActionButtons } from "./ActionButtons/ActionButtons";

export const TableItem = ({
  id,
  name,
  type,
  deviceId,
  selectedValue,
  isDashboardPart,
}: TableItemProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    values: {
      name,
      type,
      device_id: deviceId,
    },
  });

  const { mutate: createDevice, isPending: isPendingCreateDevice } =
    useCreateDevice();
  const { mutate: updateDevice, isPending: isPendingUpdateDevice } =
    useUpdateDevice();

  const onSubmit = async (values: FormSchema) => {
    if (id) {
      updateDevice({ id, ...values });
    } else {
      createDevice(values);
    }
  };

  const handleSetEditMode = () => {
    setIsEditMode(true);
  };

  const handleResetEditMode = () => {
    setIsEditMode(false);
    form.reset();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
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
          component={(field) => <Input disabled={!isEditMode} {...field} />}
        />
        <FormField
          label="Device ID"
          control={form.control}
          name={formFields.deviceId}
          component={(field) => <Input disabled={!isEditMode} {...field} />}
        />
        <FormField
          label="Device Type"
          control={form.control}
          name={formFields.type}
          component={({ onChange, ...field }) => (
            <Select
              disabled={!isEditMode}
              items={typeItems}
              onValueChange={onChange}
              {...field}
            />
          )}
        />
      </Form>
      <ActionButtons
        isDashboardPart={isDashboardPart}
        isEditMode={isEditMode}
        handleSave={handleSave}
        handleSetEditMode={handleSetEditMode}
        handleResetEditMode={handleResetEditMode}
        isLoading={isPendingCreateDevice || isPendingUpdateDevice}
      />
    </AccordionContent>
  );
};
