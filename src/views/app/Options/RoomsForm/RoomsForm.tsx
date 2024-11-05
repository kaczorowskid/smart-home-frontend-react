import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog } from "@/components/common/Dialog";
import { FormTitle } from "@/components/app/FormTitle";
import { House } from "lucide-react";
import { ControlButtons } from "@/components/app/ControlButtons";
import { UserFormProps } from "./RoomsForm.types";
import { formFields, formSchema, FormSchema } from "./RoomsForm.schema";
import {
  defaultValues,
  initialValues,
  mapBlindsDataToCheckboxData,
  mapThermometersDataToCheckboxData,
} from "./RoomsForm.utils";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectedItems } from "./SelectedItems";
import { roomsItems } from "./RoomsForm.consts";
import { Select } from "@/components/common/Select";
import {
  useCreateRoom,
  useDeleteRoom,
  useGetOneRoom,
  useUpdateRoom,
} from "@/api/hooks/room.hooks";
import {
  useGetAllBlinds,
  useGetAllThermometers,
} from "@/api/hooks/devices.hooks";

export const RoomsForm = ({ selectedId, open, onClose }: UserFormProps) => {
  const { data } = useGetOneRoom({ id: selectedId || "" });
  const { data: allThermometersData } = useGetAllThermometers();
  const { data: allBlindsData } = useGetAllBlinds();

  const thermometersCheckboxData =
    mapThermometersDataToCheckboxData(allThermometersData);
  const blindsCheckboxData = mapBlindsDataToCheckboxData(allBlindsData);

  const { mutateAsync: createRoom, isPending: isCreatePending } =
    useCreateRoom();
  const { mutateAsync: updateRoom, isPending: isUpdatePending } =
    useUpdateRoom();
  const { mutate: deleteRoom, isPending: isDeletePending } = useDeleteRoom();

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
    if (!!selectedId) {
      await updateRoom({
        id: data?.id || "",
        name: values["name"],
        image: values["image"],
        thermometers: values["thermometer"].map((id) => ({ id })),
        blinds: values["blind"].map((id) => ({ id })),
      });
    } else {
      await createRoom({
        name: values["name"],
        image: values["image"],
        thermometers: values["thermometer"].map((id) => ({ id })),
        blinds: values["blind"].map((id) => ({ id })),
      });
    }
    handleCloseForm();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  const handleDeleteRoom = () => {
    deleteRoom({ id: data?.id || "" });
    handleCloseForm();
  };

  return (
    <Dialog
      className="w-[90%] lg:w-full"
      title={<FormTitle title="Rooms" icon={House} />}
      open={open || !!selectedId}
      onOpenChange={(status) => {
        if (!status) {
          handleCloseForm();
        }
      }}
    >
      <Form {...form}>
        <FormField
          label="Name"
          control={form.control}
          name={formFields.name}
          component={(field) => <Input {...field} />}
        />
        <FormField
          label="User role"
          control={form.control}
          name={formFields.image}
          component={({ onChange, value, ...field }) => (
            <Select
              items={roomsItems}
              onValueChange={onChange}
              value={value as string}
              {...field}
            />
          )}
        />
        <Popover>
          <PopoverTrigger className="mt-4" asChild>
            <SelectedItems
              label="Thermometers"
              noSelectedItemsText="Choose thermometers"
              items={thermometersCheckboxData}
              selectedIds={form.watch()["thermometer"]}
            />
          </PopoverTrigger>
          <PopoverContent>
            {thermometersCheckboxData?.map((thermometer) => (
              <FormField
                reverseLabel
                label={thermometer.label}
                key={thermometer.id}
                formItemKey={thermometer.id}
                control={form.control}
                name={formFields.thermometer}
                component={({ value, onChange, ...field }) => (
                  <Checkbox
                    className="mr-4"
                    checked={value?.includes(thermometer.id)}
                    onCheckedChange={(checked) => {
                      return checked
                        ? onChange([...value, thermometer.id])
                        : onChange(
                            (value as string[]).filter(
                              (value) => value !== thermometer.id
                            )
                          );
                    }}
                    {...field}
                  />
                )}
              />
            ))}
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger className="mt-4" asChild>
            <SelectedItems
              label="Blinds"
              noSelectedItemsText="Choose blinds"
              items={blindsCheckboxData}
              selectedIds={form.watch()["blind"]}
            />
          </PopoverTrigger>
          <PopoverContent>
            {blindsCheckboxData?.map((blind) => (
              <FormField
                reverseLabel
                label={blind.label}
                key={blind.id}
                formItemKey={blind.id}
                control={form.control}
                name={formFields.blind}
                component={({ value, onChange, ...field }) => (
                  <Checkbox
                    className="mr-4"
                    checked={value?.includes(blind.id)}
                    onCheckedChange={(checked) => {
                      return checked
                        ? onChange([...value, blind.id])
                        : onChange(
                            (value as string[]).filter(
                              (value) => value !== blind.id
                            )
                          );
                    }}
                    {...field}
                  />
                )}
              />
            ))}
          </PopoverContent>
        </Popover>
        <ControlButtons
          entity={data?.name || ""}
          isCreate={!selectedId}
          onCreate={handleSave}
          onUpdate={handleSave}
          onDelete={handleDeleteRoom}
          isCreatePending={isCreatePending}
          isUpdatePending={isUpdatePending}
          isDeletePending={isDeletePending}
        />
      </Form>
    </Dialog>
  );
};
