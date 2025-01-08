import { House } from "lucide-react";
import { useIntl } from "react-intl";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/common/Dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/common/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTitle } from "@/components/app/FormTitle";
import { FormField } from "@/components/common/FormField";
import { permissionsList } from "@/api/types/common.types";
import { type CommonFormProps } from "@/types/common.types";
import { usePermissions } from "@/hooks/usePermissions.hook";
import { SelectedItems } from "@/components/app/SelectedItems";
import { ControlButtons } from "@/components/app/ControlButtons";
import {
  useGetAllBlinds,
  useGetAllThermometers,
} from "@/api/hooks/devices.hooks";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  useCreateRoom,
  useDeleteRoom,
  useGetOneRoom,
  useUpdateRoom,
} from "@/api/hooks/room.hooks";
import { roomsItems } from "./RoomsForm.consts";
import { formFields, formSchema, type FormSchema } from "./RoomsForm.schema";
import {
  defaultValues,
  initialValues,
  mapValuesToCreateForm,
  mapValuesToUpdateForm,
  mapBlindsDataToCheckboxData,
  mapThermometersDataToCheckboxData,
} from "./RoomsForm.utils";

export const RoomsForm = ({ open, onClose, selectedId }: CommonFormProps) => {
  const { formatMessage } = useIntl();
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
  const { mutateAsync: deleteRoom, isPending: isDeletePending } =
    useDeleteRoom();

  const hasCreateRoomPermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_ADD_ROOM,
  ]);
  const hasUpdateRoomPermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_UPDATE_ROOM,
  ]);
  const hasDeleteRoomPermission = usePermissions([
    permissionsList.IS_ADMIN,
    permissionsList.OPTIONS_DELETE_ROOM,
  ]);

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
    if (selectedId) {
      await updateRoom(mapValuesToUpdateForm(values, data?.id));
    } else {
      await createRoom(mapValuesToCreateForm(values));
    }
    handleCloseForm();
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  const handleDeleteRoom = async () => {
    await deleteRoom({ id: data?.id || "" });
    handleCloseForm();
  };

  return (
    <Dialog
      open={open || !!selectedId}
      className="w-[90%] lg:w-full"
      title={
        <FormTitle icon={House} title={formatMessage({ id: "view.rooms" })} />
      }
      onOpenChange={(status) => {
        if (!status) {
          handleCloseForm();
        }
      }}
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name={formFields.name}
          component={(field) => <Input {...field} />}
          label={formatMessage({ id: "formField.name" })}
        />
        <FormField
          control={form.control}
          name={formFields.roomType}
          label={formatMessage({ id: "formField.user-role" })}
          component={({ value, onChange, ...field }) => (
            <Select
              items={roomsItems}
              value={value as string}
              onValueChange={onChange}
              {...field}
            />
          )}
        />
        <Popover>
          <PopoverTrigger asChild className="mt-4">
            <SelectedItems
              items={thermometersCheckboxData}
              selectedIds={form.watch()["thermometer"]}
              label={formatMessage({ id: "formField.thermometers" })}
              noSelectedItemsText={formatMessage({
                id: "view.thermometers-no-selected",
              })}
            />
          </PopoverTrigger>
          <PopoverContent>
            {thermometersCheckboxData?.map((thermometer) => (
              <FormField
                reverseLabel
                key={thermometer.id}
                control={form.control}
                label={thermometer.label}
                formItemKey={thermometer.id}
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
          <PopoverTrigger asChild className="mt-4">
            <SelectedItems
              items={blindsCheckboxData}
              selectedIds={form.watch()["blind"]}
              label={formatMessage({ id: "formField.blinds" })}
              noSelectedItemsText={formatMessage({
                id: "view.blinds-no-selected",
              })}
            />
          </PopoverTrigger>
          <PopoverContent>
            {blindsCheckboxData?.map((blind) => (
              <FormField
                reverseLabel
                key={blind.id}
                label={blind.label}
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
          onCreate={handleSave}
          onUpdate={handleSave}
          isCreate={!selectedId}
          entity={data?.name || ""}
          onDelete={handleDeleteRoom}
          isCreatePending={isCreatePending}
          isUpdatePending={isUpdatePending}
          isDeletePending={isDeletePending}
          isCreateDisabled={!hasCreateRoomPermission}
          isUpdateDisabled={!hasUpdateRoomPermission}
          isDeleteDisabled={!hasDeleteRoomPermission}
        />
      </Form>
    </Dialog>
  );
};
