import {
  type Room,
  type Blind,
  type Thermometer,
} from "@/api/types/common.types";
import {
  type CreateRoomPayload,
  type UpdateRoomPayload,
} from "@/api/types/room.types";
import { formFields, type FormSchema } from "./RoomsForm.schema";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.blind]: [],
  [formFields.thermometer]: [],
  [formFields.roomType]: "BACKYARD",
};

export const initialValues = (
  data: Room | undefined
): undefined | FormSchema => {
  if (!data) {
    return;
  }

  return {
    name: data.name,
    roomType: data.roomType,
    blind: data.blinds?.map(({ blindId }) => blindId) || [],
    thermometer:
      data.thermometers?.map(({ thermometerId }) => thermometerId) || [],
  };
};

export const mapThermometersDataToCheckboxData = (
  thermometer: undefined | Thermometer[]
) => thermometer?.map(({ id, name }) => ({ id, label: name }));

export const mapBlindsDataToCheckboxData = (blind: Blind[] | undefined) =>
  blind?.map(({ id, name }) => ({ id, label: name }));

export const mapValuesToCreateForm = (
  values: FormSchema
): CreateRoomPayload => ({
  name: values["name"],
  roomType: values["roomType"],
  blinds: values["blind"].map((id) => ({ id })),
  thermometers: values["thermometer"].map((id) => ({ id })),
});

export const mapValuesToUpdateForm = (
  values: FormSchema,
  id: string | undefined
): UpdateRoomPayload => ({
  id: id || "",
  name: values["name"],
  roomType: values["roomType"],
  blinds: values["blind"].map((id) => ({ id })),
  thermometers: values["thermometer"].map((id) => ({ id })),
});
