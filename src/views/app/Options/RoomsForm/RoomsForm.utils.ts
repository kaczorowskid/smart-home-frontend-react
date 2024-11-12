import { CreateRoomPayload, UpdateRoomPayload } from "@/api/types/room.types";
import { formFields, FormSchema } from "./RoomsForm.schema";
import { Blind, Room, Thermometer } from "@/api/types/common.types";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.roomType]: "BACKYARD",
  [formFields.thermometer]: [],
  [formFields.blind]: [],
};

export const initialValues = (
  data: Room | undefined
): FormSchema | undefined => {
  if (!data) {
    return;
  }

  return {
    name: data.name,
    roomType: data.roomType,
    thermometer:
      data.thermometers?.map(({ thermometerId }) => thermometerId) || [],
    blind: data.blinds?.map(({ blindId }) => blindId) || [],
  };
};

export const mapThermometersDataToCheckboxData = (
  thermometer?: Thermometer[]
) => thermometer?.map(({ id, name }) => ({ id, label: name }));

export const mapBlindsDataToCheckboxData = (blind?: Blind[]) =>
  blind?.map(({ id, name }) => ({ id, label: name }));

export const mapValuesToCreateForm = (
  values: FormSchema
): CreateRoomPayload => ({
  name: values["name"],
  roomType: values["roomType"],
  thermometers: values["thermometer"].map((id) => ({ id })),
  blinds: values["blind"].map((id) => ({ id })),
});

export const mapValuesToUpdateForm = (
  values: FormSchema,
  id: string | undefined
): UpdateRoomPayload => ({
  id: id || "",
  name: values["name"],
  roomType: values["roomType"],
  thermometers: values["thermometer"].map((id) => ({ id })),
  blinds: values["blind"].map((id) => ({ id })),
});
